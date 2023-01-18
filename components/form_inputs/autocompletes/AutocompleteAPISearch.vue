<template>
    <v-container id="api">
        <h2>API search</h2>
        <v-card
                color="red lighten-2"
                dark
        >
            <v-card-title class="text-h5 red lighten-3">
                Search through API
            </v-card-title>
            <v-card-text>
                Unofficial MyAnimeList API. For more information visit
                <a
                        class="grey--text text--lighten-3"
                        href="https://docs.api.jikan.moe/"
                        target="_blank"
                >API docs</a>.
            </v-card-text>
            <v-card-text>
                <v-autocomplete
                        v-model="model"
                        :items="items"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="white"
                        hide-no-data
                        hide-selected
                        item-text="Title"
                        item-value="API"
                        label="Anime Titles"
                        placeholder="Start typing to Search"
                        prepend-icon="mdi-database-search"
                        return-object
                ></v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-expand-transition>
                <v-list
                        v-if="model"
                        class="red lighten-3"
                >
                    <v-list-item
                            v-for="(field, i) in fields"
                            :key="i"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="field.value"></v-list-item-title>
                            <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-expand-transition>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        :disabled="!model"
                        color="grey darken-3"
                        @click="model = null"
                >
                    Clear
                    <v-icon right>
                        mdi-close-circle
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    nameLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
  }),

  computed: {
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map((key) => ({
        key,
        value: this.model[key] || 'n/a',
      }));
    },
    items() {
      return this.entries.map((entry) => {
      const Title = entry.title;
      const Synopsis = entry.synopsis;
      const Aired = entry.aired.string;
      const Genres = entry.genres.map(p => p.name).join(", ");

        return {Title, Synopsis, Aired, Genres};
      });
    },
  },

  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch('https://api.jikan.moe/v4/anime')
        .then((res) => res.json())
        .then((res) => {
          this.entries = res.data;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};

</script>

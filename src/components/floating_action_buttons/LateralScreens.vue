<template>
  <v-container>
    <h2>Lateral Screens</h2>
    <v-card id="lateral">
      <v-toolbar
        dark
        tabs
        flat
        color="indigo"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs
            v-model="tabs"
            align-with-title
          >
            <v-tab href="#one">
              Item One
            </v-tab>
            <v-tab href="#two">
              Item Two
            </v-tab>
            <v-tab href="#three">
              Item Three
            </v-tab>
            <v-tabs-slider color="pink"></v-tabs-slider>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-card-text>
        <v-tabs-items v-model="tabs">
          <v-tab-item
            v-for="content in ['one', 'two', 'three']"
            :key="content"
            :value="content"
          >
            <v-card
              height="200px"
              flat
            >
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
      <v-fab-transition>
        <v-btn
          :key="activeFab.icon"
          :color="activeFab.color"
          fab
          large
          dark
          bottom
          left
          class="v-btn--example"
          @click="click"
        >
          <v-icon>{{ activeFab.icon }}</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card>
    <v-text-field id="ls-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    hidden: false,
    tabs: null,
    state: '',
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case 'one': return { color: 'success', icon: 'mdi-share-variant' };
        case 'two': return { color: 'red', icon: 'mdi-pencil' };
        case 'three': return { color: 'green', icon: 'mdi-chevron-up' };
        default: return {};
      }
    },
  },

  methods: {
    click() {
      switch (this.tabs) {
        case 'one': { this.state = 'Last clicked: Share'; break; }
        case 'two': { this.state = 'Last clicked: Pencil'; break; }
        case 'three': { this.state = 'Last clicked: Chevron up'; break; }
        default: { break; }
      }
    },
  },
};
</script>

<style>
#lateral .v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}
</style>

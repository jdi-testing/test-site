<template>
  <v-card
    class="overflow-hidden mx-auto"
    height="200"
    max-width="500"
  >
    <v-bottom-navigation
      absolute
      hide-on-scroll
      horizontal
      scroll-target="#hide-on-scroll-example"
      @change="selected = $event"
    >
      <v-btn
        color="deep-purple accent-4"
        text
        value="Recents"
      >
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn
        color="deep-purple accent-4"
        text
        value="Favorites"
      >
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn
        color="deep-purple accent-4"
        text
        value="Nearby"
      >
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-responsive
      id="hide-on-scroll-example"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-responsive height="1500">{{ selected }}</v-responsive>
    </v-responsive>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selected: null,
  })
}
</script>

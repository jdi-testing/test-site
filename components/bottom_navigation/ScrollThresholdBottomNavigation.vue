<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="200"
    max-width="500"
  >
    <v-bottom-navigation
      absolute
      color="white"
      hide-on-scroll
      horizontal
      scroll-target="#scroll-threshold-example"
      scroll-threshold="500"
      @change="selected = $event"
    >
      <v-btn value="Recents">
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="Favorites">
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="Nearby">
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-sheet
      id="scroll-threshold-example"
      class="overflow-y-auto pb-16"
      max-height="600"
    >
      <v-responsive height="1500">{{ selected }}</v-responsive>
    </v-sheet>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selected: null,
  })
}
</script>

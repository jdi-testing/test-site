<template>
  <v-container>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      append-icon="mdi-map-marker"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      prepend-icon="mdi-magnify"
    ></v-range-slider>
  </v-container>
</template>


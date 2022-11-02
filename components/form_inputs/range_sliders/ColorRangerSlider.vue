<template>
  <v-container>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      background-color="orange"
      label="background-color"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      color="orange"
      label="color"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      thumb-color="orange"
      label="thumb-color"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      track-color="orange"
      label="track-color"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      track-fill-color="orange"
      label="track-fill-color"
    ></v-range-slider>
  </v-container>
</template>

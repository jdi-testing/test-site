<template>
  <v-container>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      background-color="red"
      label="background-color"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      color="red"
      label="color"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      thumb-color="red"
      label="thumb-color"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      track-color="red"
      label="track-color"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      track-fill-color="red"
      label="track-fill-color"
    ></v-range-slider>
  </v-container>
</template>

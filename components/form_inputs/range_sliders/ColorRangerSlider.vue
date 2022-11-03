<template>
  <v-container>

    <v-subheader>background-color="orange"</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      background-color="orange"
    ></v-range-slider>

    <v-subheader>color="orange"</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      color="orange"
    ></v-range-slider>

    <v-subheader>thumb-color="orange"</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      thumb-color="orange"
    ></v-range-slider>

    <v-subheader>track-color="orange"</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      track-color="orange"
    ></v-range-slider>

    <v-subheader>track-fill-color="orange"</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      track-fill-color="orange"
    ></v-range-slider>
  </v-container>
</template>

<template>
  <v-container>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      height="200px"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      loader-height="10"
    ></v-range-slider>
  </v-container>
</template>

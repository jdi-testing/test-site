<template>
  <v-container>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      hint="Some hint"
    ></v-range-slider>
  </v-container>
</template>
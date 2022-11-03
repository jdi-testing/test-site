<template dark>
  <v-container dark>

    <v-subheader>dark theme (with color=orange for visibility)"</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      dark
      color="green"
      :value="[-25, 25]"
    ></v-range-slider>

    <v-subheader>dense</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      dense
      :value="[-25, 25]"
    ></v-range-slider>

    <v-subheader>hint</v-subheader>
    <v-range-slider
      hint="hint"
      max="50"
      min="-50"
      :value="[-25, 25]"
    ></v-range-slider>
  </v-container>
</template>

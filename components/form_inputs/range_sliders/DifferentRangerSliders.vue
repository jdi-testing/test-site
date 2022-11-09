<template>
  <v-col>
    <v-range-slider
      :dark="isDarkTheme"
      min="-50"
      max="50"
      :value="[-25, 25]"
      hint="Some hint"
      :hide-details="isDetailsHidden"
      :error="isError"
      :background-color="backgroundColor"
      :color="color"
      :track-color="trackColor"
    ></v-range-slider>

    <v-col>
      <p class="text-h5">Settings</p>

      <v-subheader>Dark theme</v-subheader>
      <v-row class="mx-5 align-center">
        <v-switch v-model="isDarkTheme" class="ma-0 ml-5" />
      </v-row>

      <v-subheader>Hide details</v-subheader>
      <v-row class="mx-5 align-center">
        <v-switch v-model="isDetailsHidden" class="ma-0 ml-5" />
      </v-row>

      <v-subheader>Error</v-subheader>
      <v-row class="mx-5 align-center">
        <v-switch v-model="isError" class="ma-0 ml-5" />
      </v-row>

      <v-subheader>Background color</v-subheader>
      <v-row class="mx-5 align-center">
        <v-color-picker
          v-model="backgroundColor"
        ></v-color-picker>
      </v-row>

      <v-subheader>Color</v-subheader>
      <v-row class="mx-5 align-center">
        <v-color-picker
          v-model="color"
        ></v-color-picker>
      </v-row>

      <v-subheader>Track-color</v-subheader>
      <v-row class="mx-5 align-center">
        <v-color-picker
          v-model="trackColor"
        ></v-color-picker>
      </v-row>
    </v-col>
  </v-col>
</template>


<script>
export default {
  name: 'DifferentRangerSliders',
  data: () => ({
    isDarkTheme: false,
    isDetailsHidden: false,
    isError: false,
    backgroundColor: "Blue",
    color: "Orange",
    trackColor: "Green",
  }),
};
</script>



<template>
  <v-row justify="space-around">
    <v-color-picker
      class="ma-2"
      show-swatches
      @input="checkInput"
      @update:mode="updateMode"
      dark
    ></v-color-picker>
    <v-color-picker
      class="ma-2"
      :swatches="swatches"
      show-swatches
      @input="checkInput"
      @update:mode="updateMode"
      dark
    ></v-color-picker>
    <v-color-picker
      class="ma-2"
      show-swatches
      swatches-max-height="300px"
      @input="checkInput"
      @update:mode="updateMode"
      dark
    ></v-color-picker>
  </v-row>
</template>
<script>
import colorPicker from "@/mixins/colorPicker.js";
export default {
  name: 'SwatchesColorPicker',
  mixins: [colorPicker],
  data: () => ({
    swatches: [
      ['#FF0000', '#AA0000', '#550000'],
      ['#FFFF00', '#AAAA00', '#555500'],
      ['#00FF00', '#00AA00', '#005500'],
      ['#00FFFF', '#00AAAA', '#005555'],
      ['#0000FF', '#0000AA', '#000055'],
    ],
  }),
};
</script>

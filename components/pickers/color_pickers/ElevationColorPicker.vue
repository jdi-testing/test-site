<template>
  <v-row
    justify="space-around"
    align="center"
  >
    <v-color-picker
      v-model="picker"
      flat
      @input="checkInput"
      @update:mode="updateMode"
    ></v-color-picker>

    <v-color-picker
      v-model="picker"
      elevation="15"
      @input="checkInput"
      @update:mode="updateMode"
    ></v-color-picker>
  </v-row>
</template>
<script>
import colorPicker from "@/mixins/colorPicker.js";
export default {
  name: 'ElevationColorPicker',
  mixins: [colorPicker]
};
</script>

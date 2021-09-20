<template>
  <v-row justify="space-around">
    <v-color-picker
      class="ma-2"
      hide-canvas
      @input="checkInput"
      @update:mode="updateMode"
    ></v-color-picker>
    <v-color-picker
      class="ma-2"
      canvas-height="300"
      @input="checkInput"
      @update:mode="updateMode"
    ></v-color-picker>
    <v-color-picker
      class="ma-2"
      dot-size="30"
      @input="checkInput"
      @update:mode="updateMode"
    ></v-color-picker>
  </v-row>
</template>
<script>
import colorPicker from "@/mixins/colorPicker.js"
export default {
  name: 'CanvasColorPicker',
  mixins: [colorPicker]
};
</script>

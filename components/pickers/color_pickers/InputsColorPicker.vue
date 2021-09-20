<template>
  <v-row justify="space-around">
    <v-color-picker
      class="ma-2"
      hide-inputs
    ></v-color-picker>
    <v-color-picker
      class="ma-2"
      hide-mode-switch
      @input="checkInput"
      @update:mode="updateMode"
    ></v-color-picker>
    <v-row
      class="ma-2"
      style="flex: 0 0 auto"
    >
      <v-color-picker 
        :mode.sync="mode"
        @input="checkInput"
        @update:mode="updateMode"
      ></v-color-picker>
      <v-select
        v-model="mode"
        :items="['hsla', 'rgba', 'hexa']"
        style="max-width: 300px"
      ></v-select>
    </v-row>
  </v-row>
</template>
<script>
import colorPicker from "@/mixins/colorPicker.js";
export default {
  name: 'InputsColorPicker',
  mixins: [colorPicker]
};
</script>

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
    ></v-range-slider>

    <v-col>
      <p class="text-h5">Settings</p>

      <v-row class="mx-5 align-center">
        <span>Dark theme</span>
        <v-switch v-model="isDarkTheme" class="ma-0 ml-5" />
      </v-row>

      <v-row class="mx-5 align-center">
        <span>Hide details</span>
        <v-switch v-model="isDetailsHidden" class="ma-0 ml-5" />
      </v-row>

      <v-row class="mx-5 align-center">
        <span>Error</span>
        <v-switch v-model="isError" class="ma-0 ml-5" />
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
  }),
};
</script>



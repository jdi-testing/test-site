<template>
  <v-container>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      error
      label="error"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      error-messages = "errorText"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      :error-messages="['errorText1', 'errorText2', 'errorText3']"
      :error-count="3"
    ></v-range-slider>
  </v-container>
</template>

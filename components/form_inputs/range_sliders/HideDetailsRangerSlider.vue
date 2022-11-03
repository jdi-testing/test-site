<template>
  <v-container>
    <v-range-slider
      max="50"
      min="-50"
      hide-details
      :value="[-25, 25]"
      label="Hide hint"
      hint="Im a hint"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      hide-details
      :value="[-25, 25]"
      label="Hide error with text"
      error-messages = "errorText1"
    ></v-range-slider>

    <v-range-slider
      max="50"
      min="-50"
      hide-details
      :value="[-25, 25]"
      label="Hide errors with text"
      :error-messages="['errorText1', 'errorText2', 'errorText3']"
      :error-count="3"
    ></v-range-slider>
  </v-container>
</template>

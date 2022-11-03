<template>
  <v-container>

    <v-subheader>hide hint</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      hide-details
      :value="[-25, 25]"
      hint="Im a hint"
    ></v-range-slider>

    <v-subheader>hide error with text</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      hide-details
      :value="[-25, 25]"
      error-messages = "errorText1"
    ></v-range-slider>

    <v-subheader>hide multi errors with text</v-subheader>
    <v-range-slider
      max="50"
      min="-50"
      hide-details
      :value="[-25, 25]"
      :error-messages="['errorText1', 'errorText2', 'errorText3']"
      :error-count="3"
    ></v-range-slider>
  </v-container>
</template>

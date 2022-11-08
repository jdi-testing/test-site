<template>
  <v-container>
    <v-col
      cols="2"
    >
        <v-text-field
          label="Error count"
           v-model="errorCount"
            type="number"
            min="0"
           max="5"
        ></v-text-field>
    </v-col>

    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      :error-messages="['errorText1', 'errorText2', 'errorText3', 'errorText4', 'errorText5']"
      :error-count="errorCount"
    ></v-range-slider>
  </v-container>
</template>

<script>
export default {
  name: 'ErrorsRangerSlider',
  data: () => ({
    errorCount: 1,
  }),
};
</script>

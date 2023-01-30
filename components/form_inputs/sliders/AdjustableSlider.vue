<template>
  <v-col>
    <v-slider
      class="slider align-start flex-column"
      :background-color="backgroundColor"
      type="number"
      v-model="value"
      :dark="isDarkTheme"
      :dense="isDense"
      :rules="rules"
      :error-count="errorCount"
      :height="height"
      :hide-details="isDetailsHidden"
      :hide-spin-buttons="areSpinButtonsHidden"
      :loader-height="loaderHeight"
      :loading="loading.hex || loading"
      :success="isSuccess"
      :success-messages="successMessages"
      :validate-on-blur="validateOnBlur"
      thumb-label="always"
      min="0"
      max="100"
      hint="Some hint"
    >
      <template v-slot:append>
        <v-text-field
          v-model="value"
          class="mt-0 pt-0 ml-0"
          type="number"
          style="width: 60px"
        ></v-text-field>
      </template>
    </v-slider>
    <v-col>
      <p class="text-h5">Settings</p>
      <v-row class="mx-5 align-center">
        <span>Background color</span>
        <v-color-picker
          v-model="picker"
          class="ma-0"
          hide-mode-switch
          hide-canvas
        ></v-color-picker>
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Dark theme</span>
        <v-switch v-model="isDarkTheme" class="ma-0 ml-5" />
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Dense</span>
        <v-switch v-model="isDense" class="ma-0 ml-5" />
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Error count</span>
        <v-text-field
          type="number"
          v-model="errorCount"
          class="ma-0 ml-5 align-start"
          min="0"
        />
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Height</span>
        <v-text-field
          type="number"
          v-model="height"
          class="ma-0 ml-5"
          min="1"
        />
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Hide details</span>
        <v-switch v-model="isDetailsHidden" class="ma-0 ml-5" />
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Hide spin buttons</span>
        <v-switch v-model="areSpinButtonsHidden" class="ma-0 ml-5" />
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Loader height</span>
        <v-text-field
          type="number"
          v-model="loaderHeight"
          class="ma-0 ml-5"
          min="1"
        />
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Loading</span>
        <v-switch
          v-model="isLoading"
          @change="onLoadingChange"
          class="ma-0 ml-5"
        />
        <v-color-picker
          v-model="picker"
          class="ma-0"
          hide-canvas
          @update:color="onLoadingChange"
        ></v-color-picker>
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Success</span>
        <v-switch
          v-model="isSuccess"
          @change="onSuccessChange"
          class="ma-0 ml-5"
        />
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Validate on blur</span>
        <v-switch v-model="validateOnBlur" class="ma-0 ml-5" />
      </v-row>
      <v-row class="mx-5 align-center">
        <span>Add success message</span>
        <v-text-field
          v-model="successMessage"
          class="ma-0 ml-5"
          @keydown.enter="addSuccessMessage"
        />
        <v-btn class="ml-5" @click="clearSuccessMessages"
          >Clear success messages</v-btn
        >
      </v-row>
    </v-col>
  </v-col>
</template>

<script>
const getRules = () => {
  const rules = [];
  for (let i = 0; i < 50; i++) {
    rules.push((v) => v > i || `${i} is too low`);
  }
  return rules;
};
const rules = getRules();
export default {
  name: 'AdjustableSlider',

  data: () => ({
    value: 0,
    backgroundColor: '',
    isDarkTheme: false,
    isDense: false,
    rules,
    errorCount: 1,
    height: 10,
    isDetailsHidden: false,
    areSpinButtonsHidden: false,
    loaderHeight: 10,
    loading: false,
    isLoading: false,
    loadingColor: '',
    isSuccess: false,
    validateOnBlur: false,
    successMessage: '',
    successMessages: [],
    attempts: 0,
  }),

  methods: {
    addSuccessMessage() {
      this.successMessages.push(this.successMessage);
    },

    onLoadingChange(loading) {
      // for some reason, vuetify color picker emits change event on first render
      const skipFirst = typeof loading === 'object' && this.attempts === 0;
      this.attempts++;
      if (!skipFirst) {
        this.loading = loading;
      }
    },

    onSuccessChange(isSuccess) {
      if (isSuccess) {
        this.rules = [];
      } else {
        this.rules = rules;
      }
      this.isSuccess = isSuccess;
    },

    clearSuccessMessages() {
      this.successMessages = [];
    },
  },
};
</script>

<style scoped>
.slider >>> .v-input__append-outer {
  margin-left: 0;
}
</style>

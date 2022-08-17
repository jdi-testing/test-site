<template>
  <v-container>
    <h2>Loader Buttons</h2>
    <v-btn
      class="ma-2"
      :loading="acceptTerms"
      :disabled="acceptTerms"
      color="secondary"
      @click="loader = 'acceptTerms'"
    >
      Accept Terms
    </v-btn>

    <v-btn
      :loading="upload"
      :disabled="upload"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'upload'"
    >
      Upload
      <v-icon
        right
        dark
      >
        mdi-cloud-upload
      </v-icon>
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="customLoader"
      :disabled="customLoader"
      color="success"
      @click="loader = 'customLoader'"
    >
      Custom Loader
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="iconLoader"
      :disabled="iconLoader"
      color="info"
      @click="loader = 'iconLoader'"
    >
      Icon Loader
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>

    <v-btn
      :loading="cloudIcon"
      :disabled="cloudIcon"
      color="blue-grey"
      class="ma-2 white--text"
      fab
      @click="loader = 'cloudIcon'"
    >
      <v-icon dark>
        mdi-cloud-upload
      </v-icon>
    </v-btn>
    <v-snackbar
        v-model="snackbarVisible"
        timeout="3000"
    >
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbarVisible = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      loader: null,
      acceptTerms: false,
      upload: false,
      customLoader: false,
      iconLoader: false,
      cloudIcon: false,
      snackbarText: '',
      snackbarVisible: false,
    };
  },
  watch: {
    loader() {
      if (this.loader === null) return;
      this.snackbarVisible = false;
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => {
        this[l] = false;
        this.snackbarText = `${l} finished loading`;
        this.snackbarVisible = true;
      }, 3000);

      this.loader = null;
    },
  },
};
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

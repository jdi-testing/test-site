<template>
  <v-container>
    <h2>Depressed Buttons</h2>
      <v-btn 
        depressed 
        class="ma-2"
        @click="click_normal"
      >
        Normal
      </v-btn>
      <v-btn
        @click="click_primary"
        depressed
        color="primary"
        class="ma-2"
      >
        Primary
      </v-btn>
      <v-btn
        @click="click_error"
        depressed
        color="error"
        class="ma-2"
      >
        Error
      </v-btn>
      <v-btn
        depressed
        disabled
        class="ma-2"
      >
        Disabled
      </v-btn>
    <v-text-field id="depr-buttons-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    state: '',
  }),

  methods: {
    click_normal() {
      this.state = 'Depressed button clicked: Normal';
    },
    click_primary() {
      this.state = 'Depressed button clicked: Primary';
    },
    click_error() {
      this.state = 'Depressed button clicked: Error';
    },
  },
};
</script>

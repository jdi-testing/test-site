<template>
  <v-container>
    <h2>Depressed Buttons</h2>
    <v-row
      align="center"
      justify="space-around"
    >
      <v-btn 
        depressed 
        @click="click_normal"
      >
        Normal
      </v-btn>
      <v-btn
        @click="click_primary"
        depressed
        color="primary"
      >
        Primary
      </v-btn>
      <v-btn
        @click="click_error"
        depressed
        color="error"
      >
        Error
      </v-btn>
      <v-btn
        depressed
        disabled
      >
        Disabled
      </v-btn>
    </v-row>
    <v-text-field id="depr-buttons-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    state: '',
  }),

  methods: {
    async click_normal() {
      this.state = 'Depressed button clicked: Normal';
    },
    async click_primary() {
      this.state = 'Depressed button clicked: Primary';
    },
    async click_error() {
      this.state = 'Depressed button clicked: Error';
    },
  },
};
</script>

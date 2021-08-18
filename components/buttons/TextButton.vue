<template>
  <v-container>  
    <h2>Text Buttons</h2>

    <v-btn 
      text
      @click="click_normal"
    >
      Normal
    </v-btn>
    <v-btn
      text
      color="primary"
      @click="click_primary"
    >
      Primary
    </v-btn>
    <v-btn
      text
      color="error"
      @click="click_error"
    >
      Error
    </v-btn>
    <v-btn
      text
      disabled
    >
      Disabled
    </v-btn>

    <v-text-field id="text-buttons-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    state: '',
  }),

  methods: {
    click_normal() {
      this.state = 'Text button clicked: Normal';
    },
    click_primary() {
      this.state = 'Text button clicked: Primary';
    },
    click_error() {
      this.state = 'Text button clicked: Error';
    },
  },
};
</script>

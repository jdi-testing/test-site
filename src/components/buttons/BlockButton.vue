<template>
  <v-container>
    <h2>Block Button</h2>
    <v-btn 
      block
      @click="click"
    >
      Block Button
    </v-btn>
    <v-text-field id= "block-button-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    state: '',
  }),

  methods: {
    click() {
      this.state = 'Block button clicked';
    },
  },
};
</script>

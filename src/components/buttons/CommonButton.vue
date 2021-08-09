<template>
  <v-container>  
    <h2>Common Button</h2>
    <v-btn
      elevation="2"
      @click="click"
    >
    Click me!
    </v-btn>
    <v-text-field id="button-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    state: '',
  }),

  methods: {
    click() {
      this.state = 'Button clicked';
    },
  },
};
</script>

<template>
  <v-container>
    <h2>Outlined Button</h2>
    <div class="text-center">
    <v-btn
      class="ma-2"
      outlined
      color="indigo"
      @click="click"
    >
      Outlined Button
    </v-btn>
  </div>
  <v-text-field id="outline-buttons-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({ 
    state: '', 
  }),

  methods: {
    click() {
      this.state = 'Outlined button clicked';
    },
  },
};
</script>

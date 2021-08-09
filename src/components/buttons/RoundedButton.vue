<template>
  <v-container>
    <h2>Rounded Button</h2>
    <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
      @click="click"
    >
      Rounded Button
    </v-btn>
  </div>
  <v-text-field id="rounded-button-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({ 
    state: '', 
  }),

  methods: {
    click() {
      this.state = 'Rounded button clicked';
    },
  },
};
</script>

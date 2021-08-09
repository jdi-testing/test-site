<template>
  <v-container>
    <h2>Tile Button</h2>
    <div class="text-center">
    <v-btn
      tile
      color="success"
      @click="click"
    >
      <v-icon left>
        mdi-pencil
      </v-icon>
      Edit
    </v-btn>
  </div>
  <v-text-field id="tile-button-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({ 
    state: '', 
  }),

  methods: {
    click() {
      this.state = 'Tile button clicked';
    },
  },
};
</script>

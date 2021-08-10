<template>
  <v-container>
    <h2>Plain Buttons</h2>
    <div class="text-center">
    <v-sheet
      class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
      color="blue-grey darken-3"
      dark
    >
      <div class="grey--text text--lighten-1 text-body-2 mb-4">
        Are you sure you want to delete this album?
      </div>

      <v-btn
        :disabled="loading"
        class="ma-1"
        color="grey"
        plain
        @click="click_cancel"
      >
        Cancel
      </v-btn>

      <v-btn
        :loading="loading"
        class="ma-1"
        color="error"
        plain
        @click="remove"
      >
        Delete
      </v-btn>
    </v-sheet>
  </div>
  <v-text-field id="plain-buttons-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({ 
    loading: false,
    state: '', 
  }),

  methods: {
    async remove() {
      this.state = 'Plain button clicked: delete';
      this.loading = true;

      await new Promise((resolve) => setTimeout(resolve, 3000));

      this.loading = false;
    },
    click_cancel() {
      this.state = 'Plain button clicked: cancel';
    },
  },
};
</script>

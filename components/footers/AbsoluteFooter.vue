<template>
  <v-card height="100px">
    <v-footer
      id="AbsoluteFooter"
      absolute
      padless
      elevation=10
      rounded
      app
    >
      <v-card
        width="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
  }),
};
</script>
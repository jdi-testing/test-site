<template>
  <v-card height="100px">
    <v-footer
      id="AbsoluteFooter"
      absolute
      padless
      elevation=10
      rounded
      app
      max-height=60
      max-width=1200
      min-height=40
      min-width=800
      tile
      color="red lighten-1"
    >
      <v-card-text class="white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-footer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
  }),
};
</script>
<template>
  <div>
      <v-checkbox v-model="tile" label="enable tile" />
      <v-banner
          color="green"
          rounded
          :tile="tile"
      >
          Tile Banner
      </v-banner>
  </div>
</template>
<script>
export default {
  data: () => ({
    tile: false,
  }),
};
</script>

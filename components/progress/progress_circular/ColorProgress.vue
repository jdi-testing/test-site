<template>
  <div class="text-center">
    <v-progress-circular
      :value="100"
      color="blue-grey"
    >
      1
    </v-progress-circular>

    <v-progress-circular
      :value="80"
      color="deep-orange lighten-2"
    >
      2
    </v-progress-circular>

    <v-progress-circular
      :value="60"
      color="brown"
    >
      3
    </v-progress-circular>

    <v-progress-circular
      :value="40"
      color="lime"
    >
      4
    </v-progress-circular>

    <v-progress-circular
      :value="20"
      color="indigo darken-2"
    >
      5
    </v-progress-circular>
  </div>
</template>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
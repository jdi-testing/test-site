<template>
  <v-row justify="space-around" align="center">
    <v-chip :text-color="color"> Colored chip </v-chip>

    <v-color-picker v-model="color" hide-canvas></v-color-picker>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      color: 'black',
    };
  },
};
</script>

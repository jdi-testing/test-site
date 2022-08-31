<template>
  <v-row justify="space-around" align="center">
    <v-chip :disabled="isDisabled" @click="toggle"> Disabled </v-chip>

    <v-switch v-model="isDisabled" label="Disabled"></v-switch>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: false,
    };
  },

  methods: {
    toggle() {
      this.isDisabled = !this.isDisabled;
    },
  },
};
</script>

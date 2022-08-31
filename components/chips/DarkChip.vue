<template>
  <v-row justify="space-around" align="center">
    <v-chip :dark="isDark" @click="toggle"> Dark chip </v-chip>

    <v-switch v-model="isDark" label="Dark theme"></v-switch>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
    };
  },

  methods: {
    toggle() {
      this.isDark = !this.isDark;
    },
  },
};
</script>

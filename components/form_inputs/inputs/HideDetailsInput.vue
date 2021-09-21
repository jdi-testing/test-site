<template>
  <v-form v-model="valid">
    <v-text-field
      label="Main input"
      :rules="rules"
      hide-details="auto"
      @change="$emit('countErrors', !valid, 'hide details error')"
    ></v-text-field>
    <v-text-field label="Another input"></v-text-field>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    rules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
};
</script>

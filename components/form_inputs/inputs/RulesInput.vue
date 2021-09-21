<template>
  <v-form v-model="valid">
    <v-text-field 
      :rules="rules"
      @change="$emit('countErrors', !valid, 'rules input error')"
    ></v-text-field>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    rules: [
      (value) => !!value || 'Required.',
      (value) => (value || '').length <= 20 || 'Max 20 characters',
      (value) => {
        /* eslint-disable max-len */
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
      },
    ],
  }),
};
</script>

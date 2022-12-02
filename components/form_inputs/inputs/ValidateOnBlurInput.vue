<template>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
      <v-text-field
        v-model="phone"
        :rules="[rules.phone]"
        validate-on-blur
        filled
        color="deep-purple"
        label="Phone number"
      ></v-text-field>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    phone: undefined,
    rules: {
      phone: (v) => !!(v || '').match(/^\d+$/) || 'Please enter a valid phone number',
    },
  }),
};
</script>

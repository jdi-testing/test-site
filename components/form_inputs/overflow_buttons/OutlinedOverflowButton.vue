<template>
  <v-container>
    <v-overflow-btn
      class="my-2"
      :items="items"
      label="Overflow Btn - Outlined"
      dark
      outlined
      shaped
      full-width
      success
      success-messages="Success message"
      background-color=blue-grey
    ></v-overflow-btn>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: ['Arial', 'Calibri', 'Courier', 'Verdana'],
  }),
};
</script>

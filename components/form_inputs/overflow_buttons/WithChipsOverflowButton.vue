<template>
  <v-container>
    <v-overflow-btn
      class="my-2"
      :items="items"
      label="Overflow Btn - Dense"
      flat
      chips
      small-chips
      deletable-chips
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

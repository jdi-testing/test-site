<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          item-text="label"
          item-color="cyan"
          item-disabled="invalid"
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      select: [],
      items: [
        {label: 'Programming', invalid: false},
        {label: 'Design', invalid: true},
        {label: 'Vue', invalid: false},
        {label: 'Vuetify', invalid: false},
      ],
    };
  },
};
</script>

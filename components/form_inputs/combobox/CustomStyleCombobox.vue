<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          background-color="teal lighten-5"
          color="teal darken-4"
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
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
    };
  },
};
</script>

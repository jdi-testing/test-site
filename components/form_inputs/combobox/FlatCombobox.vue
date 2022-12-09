<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        Non flat
      </v-col>

      <v-col cols="6">
        Flat
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.solo"
          :items="items"
          solo
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.soloFlat"
          :items="items"
          solo
          flat
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      select: {
        solo: [],
        soloFlat: [],
      },
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

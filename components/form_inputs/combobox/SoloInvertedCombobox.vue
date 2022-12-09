<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-combobox
          v-model="selectSolo"
          :items="items"
          label="Solo"
          solo
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="selectSoloInverted"
          :items="items"
          label="Solo"
          solo-inverted
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      selectSolo: [],
      selectSoloInverted: [],
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

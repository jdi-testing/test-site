<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        True
      </v-col>

      <v-col cols="6">
        False
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="selectOverflow"
          :items="items"
          multiple
          :allow-overflow="true"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select"
          :items="items"
          multiple
          :allow-overflow="false"
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      selectOverflow: [],
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

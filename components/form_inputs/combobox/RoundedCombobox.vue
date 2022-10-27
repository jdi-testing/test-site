<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-combobox
          v-model="select.regular"
          :items="items"
          multiple
          label="Regular"
          rounded
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.filled"
          :items="items"
          multiple
          label="Filled"
          filled
          rounded
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.outlined"
          :items="items"
          multiple
          label="Outined"
          outlined
          rounded
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.solo"
          :items="items"
          multiple
          label="Solo"
          solo
          rounded
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
        regular: [],
        filled: [],
        outlined: [],
        solo: [],
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

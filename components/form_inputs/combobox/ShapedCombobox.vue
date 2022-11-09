<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-combobox
          v-model="select.filled"
          :items="items"
          multiple
          label="Filled"
          filled
          shaped
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.outlined"
          :items="items"
          multiple
          label="Outined"
          outlined
          shaped
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
        filled: [],
        outlined: [],
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

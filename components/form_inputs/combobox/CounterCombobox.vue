<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        Single selection (counts letters)
      </v-col>

      <v-col cols="4">
        Multiple selection (counts selected items)
      </v-col>

      <v-col cols="4">
        Multiple selection with validation
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.single"
          :items="items"
          counter
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.multiple"
          :items="items"
          multiple
          counter
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.multipleValidated"
          :items="items"
          multiple
          :counter="1"
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
        single: [],
        multiple: [],
        multipleValidated: [],
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

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        Placeholder
      </v-col>

      <v-col cols="6">
        Persistent placeholder
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.regular"
          :items="items"
          multiple
          label="Regular"
          placeholder="Placeholder"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.regularPersistent"
          :items="items"
          multiple
          label="Regular"
          placeholder="Placeholder"
          persistent-placeholder
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.filled"
          :items="items"
          multiple
          label="Filled"
          filled
          placeholder="Placeholder"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.filledPersistent"
          :items="items"
          multiple
          label="Filled"
          filled
          placeholder="Placeholder"
          persistent-placeholder
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.outlined"
          :items="items"
          multiple
          label="Outined"
          outlined
          placeholder="Placeholder"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.outlinedPersistent"
          :items="items"
          multiple
          label="Outined"
          outlined
          placeholder="Placeholder"
          persistent-placeholder
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.solo"
          :items="items"
          multiple
          label="Solo"
          solo
          placeholder="Placeholder"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.soloPersistent"
          :items="items"
          multiple
          label="Solo"
          solo
          placeholder="Placeholder"
          persistent-placeholder
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
        regularPersistent: [],
        filled: [],
        filledPersistent: [],
        outlined: [],
        outlinedPersistent: [],
        solo: [],
        soloPersistent: [],
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

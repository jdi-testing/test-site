<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        Enabled
      </v-col>

      <v-col cols="6">
        Disabled
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.regular"
          :items="items"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.regularDisabled"
          :items="items"
          disabled
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.filled"
          :items="items"
          filled
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.filledDisabled"
          :items="items"
          filled
          disabled
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.outlined"
          :items="items"
          outlined
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.outlinedDisabled"
          :items="items"
          outlined
          disabled
        ></v-combobox>
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
          v-model="select.soloDisabled"
          :items="items"
          solo
          disabled
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
        regularDisabled: [],
        filled: [],
        filledDisabled: [],
        outlined: [],
        outlinedDisabled: [],
        solo: [],
        soloDisabled: [],
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

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        Ordinary
      </v-col>

      <v-col cols="4">
        Error
      </v-col>

      <v-col cols="4">
        Success
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.regular"
          :items="items"
          multiple
          label="Regular"
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.regularError"
          :items="items"
          multiple
          label="Regular"
          error
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.regularSuccess"
          :items="items"
          multiple
          label="Regular"
          success
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.filled"
          :items="items"
          multiple
          label="Filled"
          filled
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.filledError"
          :items="items"
          multiple
          label="Filled"
          filled
          error
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.filledSuccess"
          :items="items"
          multiple
          label="Filled"
          filled
          success
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.outlined"
          :items="items"
          multiple
          label="Outined"
          outlined
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.outlinedError"
          :items="items"
          multiple
          label="Outined"
          outlined
          error
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.outlinedSuccess"
          :items="items"
          multiple
          label="Outined"
          outlined
          success
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.solo"
          :items="items"
          multiple
          label="Solo"
          solo
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.soloError"
          :items="items"
          multiple
          label="Solo"
          solo
          error
        ></v-combobox>
      </v-col>

      <v-col cols="4">
        <v-combobox
          v-model="select.soloSuccess"
          :items="items"
          multiple
          label="Solo"
          solo
          success
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
        regularSuccess: [],
        regularError: [],
        filled: [],
        filledSuccess: [],
        filledError: [],
        outlined: [],
        outlinedSuccess: [],
        outlinedError: [],
        solo: [],
        soloSuccess: [],
        soloError: [],
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

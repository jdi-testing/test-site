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
          v-model="select.hintTrue"
          :items="items"
          label="With hint"
          hint="Hint"
          persistent-hint
          :hide-details="true"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.hintFalse"
          :items="items"
          label="With hint"
          hint="Hint"
          persistent-hint
          :hide-details="false"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.errorTrue"
          :items="items"
          label="With error"
          error
          error-messages="Error"
          :hide-details="true"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.errorFalse"
          :items="items"
          label="With error"
          error
          error-messages="Error"
          :hide-details="false"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.counterTrue"
          :items="items"
          label="With counter"
          :counter="1"
          :hide-details="true"
        ></v-combobox>
      </v-col>

      <v-col cols="6">
        <v-combobox
          v-model="select.counterFalse"
          :items="items"
          label="With counter"
          :counter="1"
          :hide-details="false"
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
        hintTrue: [],
        hintFalse: [],
        errorTrue: [],
        errorFalse: [],
        counterTrue: [],
        counterFalse: [],
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

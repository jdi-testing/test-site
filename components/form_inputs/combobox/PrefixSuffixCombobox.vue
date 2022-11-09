<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select.prefix"
          :items="items"
          label="Prefix"
          prefix="Start"
        ></v-combobox>
      </v-col>

      <v-col cols="12">
        <v-combobox
          v-model="select.suffix"
          :items="items"
          label="Suffix"
          suffix="End"
        ></v-combobox>
      </v-col>
        
      <v-col cols="12">
        <v-combobox
          v-model="select.prefixAndSuffix"
          :items="items"
          label="Prefix & Suffix"
          prefix="Start"
          suffix="End"
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
        prefix: [],
        suffix: [],
        prefixAndSuffix: []
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

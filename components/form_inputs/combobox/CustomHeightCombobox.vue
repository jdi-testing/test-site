<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select.small"
          :items="items"
          :height="0"
          label="0"
        ></v-combobox>
      </v-col>
      
      <v-col cols="12">
        <v-combobox
          v-model="select.medium"
          :items="items"
          :height="50"
          label="50"
        ></v-combobox>
      </v-col>
      
      <v-col cols="12">
        <v-combobox
          v-model="select.large"
          :items="items"
          :height="100"
          label="100"
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
        small: [],
        medium: [],
        large: [],
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

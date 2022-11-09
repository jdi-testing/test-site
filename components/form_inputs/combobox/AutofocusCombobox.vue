<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-combobox
          v-model="select"
          :items="items"
          autofocus
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
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

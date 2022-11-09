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
          v-model="selectTrue"
          :items="items"
          multiple
          clearable
          :open-on-clear="true"
        ></v-combobox>
      </v-col>
        
      <v-col cols="6">
        <v-combobox
          v-model="selectFalse"
          :items="items"
          multiple
          clearable
          :open-on-clear="false"
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      selectTrue: [],
      selectFalse: [],
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

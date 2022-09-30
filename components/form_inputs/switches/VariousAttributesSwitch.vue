<template>
  <v-container fluid>
    <v-row align="center">
      <span class="mr-3">Append Icon, Dense, Success, Success Messages</span>
      <v-switch
        dense
        success
        :success-messages="['Success 1', 'Success 2']"
        dark
        append-icon="mdi-close"
        :label="'Switch'"
      ></v-switch>
    </v-row>
    <v-row align="center">
      <span class="mr-3">Dense, Dark</span>
      <v-switch dense dark :label="'Switch'"></v-switch>
    </v-row>
    <v-row align="center">
      <span class="mr-3">Prepend Icon, Dense, Error, Error messages (2)</span>
      <v-switch
        dense
        error
        error-count="2"
        :error-messages="['First', 'Second']"
        prepend-icon="mdi-close"
        :label="'Switch'"
      ></v-switch>
    </v-row>
    <v-row align="center">
      <span class="mr-3">Readonly, Background-Color</span>
      <v-switch
        readonly
        background-color="yellow"
        :label="'Switch'"
        :messages="['Message 1', 'Message 2']"
      ></v-switch>
    </v-row>
    <v-row align="center">
      <span class="mr-3">Ripple, Persistent hint</span>
      <v-switch
        ripple
        :label="'Switch'"
        validate-on-blur
        persistent-hint
        hint="Some hint"
      ></v-switch>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

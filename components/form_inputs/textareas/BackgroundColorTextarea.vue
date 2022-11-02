<template>
  <v-container>
    <v-textarea
      background-color="light-blue"
      color="black"
      label="Label"
      messages="Message"
    ></v-textarea>

    <v-textarea
      background-color="grey lighten-2"
      color="cyan"
      label="Label"
      error
      :error-messages="['Error message']"
      error-count="1"
    ></v-textarea>

    <v-textarea
      background-color="amber lighten-4"
      color="orange orange-darken-4"
      label="Label"
      success
      :success-messages="['Success message']"
    ></v-textarea>
  </v-container>
</template>

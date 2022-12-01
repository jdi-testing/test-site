<template>
  <v-container
    id="input-usage"
    fluid
  >
    <v-row>
      <v-col cols="12">
        <v-input
          readonly
          background-color=blue
          text
          color=white
          dark
        >
          Readonly&back-ground color&dark theme input
        </v-input>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        text: '',
      }
    },
  }
</script>
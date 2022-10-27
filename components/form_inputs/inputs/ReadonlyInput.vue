<template>
  <v-container
    id="input-usage"
    fluid
  >
    <v-row>
      <v-col cols="12">
        <v-input
          readonly
        >
          Readonly input
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
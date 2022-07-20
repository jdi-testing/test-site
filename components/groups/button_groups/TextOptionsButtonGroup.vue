<template>
  <v-row>

    <v-col
      cols="12"
      class="py-2"
    >
      <p>Text Options</p>

      <v-btn-toggle
        v-model="text"
        tile
        color="deep-purple accent-3"
        group
      >
        <v-btn value="left">
          Left
        </v-btn>

        <v-btn value="center">
          Center
        </v-btn>

        <v-btn value="right">
          Right
        </v-btn>

        <v-btn value="justify">
          Justify
        </v-btn>
      </v-btn-toggle>
    </v-col>

    <v-col
      cols="12"
      class="py-2"
    >
      <p>Text &amp; Icon Options</p>

      <v-btn-toggle
        v-model="icon"
        borderless
      >
        <v-btn value="left">
          <span class="hidden-sm-and-down">Left</span>

          <v-icon right>
            mdi-format-align-left
          </v-icon>
        </v-btn>

        <v-btn value="center">
          <span class="hidden-sm-and-down">Center</span>

          <v-icon right>
            mdi-format-align-center
          </v-icon>
        </v-btn>

        <v-btn value="right">
          <span class="hidden-sm-and-down">Right</span>

          <v-icon right>
            mdi-format-align-right
          </v-icon>
        </v-btn>

        <v-btn value="justify">
          <span class="hidden-sm-and-down">Justify</span>

          <v-icon right>
            mdi-format-align-justify
          </v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        text: 'center',
        icon: 'justify',
        toggle_none: null,
        toggle_one: 0,
      }
    },
  }
</script>
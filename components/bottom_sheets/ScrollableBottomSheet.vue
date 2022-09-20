<template>
<div id="app">
  <v-app id="inspire">
    <div class="text-center">
      <v-bottom-sheet
        v-model="sheet"
        inset
        scrollable
        hide-overlay
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="orange"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Open scrollable dialog in bottom sheet
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Select Country</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 100px;">
            <v-radio-group
              v-model="dialogm1"
              column
            >
              <v-radio
                label="Bahamas, The"
                value="bahamas"
              ></v-radio>

              <v-radio
                label="Belarus"
                value="belarus"
              ></v-radio>
              <v-radio
                label="Belgium"
                value="belgium"
              ></v-radio>

              <v-radio
                label="Brazil"
                value="brazil"
              ></v-radio>

              <v-radio
                label="Bulgaria"
                value="bulgaria"
              ></v-radio>

            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              color="blue darken-1"
              text
              @click="sheet = !sheet"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="sheet = !sheet"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-bottom-sheet>
    </div>
  </v-app>
</div>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
  }),
};
</script>
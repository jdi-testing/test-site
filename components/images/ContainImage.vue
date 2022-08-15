<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-col cols="5">
        <div class="text-h6 mb-1">
          Default (cover)
        </div>
        <div class="subheading">
          Matching
        </div>
        <v-img
          src="/jdi-light/vuetify/pictures/autumn_forest_300.jpeg"
          aspect-ratio="1.7"
        ></v-img>
        <div class="subheading pt-4">
          Too high
        </div>
        <v-img
          src="/jdi-light/vuetify/pictures/black_band_300.jpeg"
          aspect-ratio="2"
        ></v-img>
        <div class="subheading pt-4">
          Too low
        </div>
        <v-img
          src="/jdi-light/vuetify/pictures/orange_medusa_300.jpeg"
          aspect-ratio="1.4"
        ></v-img>
      </v-col>

      <v-col cols="5">
        <div class="text-h6 mb-1">
          Contain
        </div>
        <div class="subheading">
          Matching
        </div>
        <v-img
          src="/jdi-light/vuetify/pictures/small_alley_300.jpeg"
          aspect-ratio="1.7"
          contain
        ></v-img>
        <div class="subheading pt-4">
          Too high
        </div>
        <v-img
          src="/jdi-light/vuetify/pictures/snow_mountains_300.jpeg"
          aspect-ratio="2"
          contain
        ></v-img>
        <div class="subheading pt-4">
          Too low
        </div>
        <v-img
          src="/jdi-light/vuetify/pictures/vase_balcony_300.jpeg"
          aspect-ratio="1.4"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

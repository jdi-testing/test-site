<template>
  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="/jdi-light/vuetify/pictures/empty_subway_165.jpeg"
              height="125"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              height
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="/jdi-light/vuetify/pictures/field_sunset.jpeg"
              height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              height with contain
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="/jdi-light/vuetify/pictures/snow_desert_165.jpeg"
              max-height="125"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              max-height
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="/jdi-light/vuetify/pictures/white_stairs_165.jpeg"
              max-height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              max-height with contain
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

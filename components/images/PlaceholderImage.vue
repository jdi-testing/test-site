<template>
  <v-row justify="center">
    <v-img
      src="https://bad.src/not/valid"
      lazy-src="/jdi-light/vuetify/pictures/placeholder_60.jpeg"
      max-width="500"
      max-height="300"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-row>
</template>

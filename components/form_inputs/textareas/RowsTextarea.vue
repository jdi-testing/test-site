<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-textarea
          label="One row"
          outlined
          rows="1"
          row-height="10"
        ></v-textarea>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-textarea
          filled
          label="Two rows"
          rows="2"
          row-height="20"
        ></v-textarea>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-textarea
          label="Three rows"
          outlined
          rows="3"
          row-height="25"
          shaped
        ></v-textarea>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-textarea
          filled
          label="Four rows"
          rows="4"
          row-height="30"
          shaped
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<template>
  <v-container>
    <v-row

      justify="space-between"
    >
      <v-col
        cols="12"
        md="4"
      >
        <v-form ref="form"
          readonly
        >
          <v-text-field
            v-model="model"
            label="First name"
          ></v-text-field>
        </v-form>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
      </v-col>
    </v-row>
  </v-container>
</template>

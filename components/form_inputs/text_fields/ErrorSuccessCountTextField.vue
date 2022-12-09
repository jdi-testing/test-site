<template>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              error
              :error-count="1"
              errorMessages="Single error"
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              error
              :error-count="2"
              :errorMessages="['Error 1', 'Error 2']"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              success
              :error-count="1"
              successMessages="Single success"
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              success
              :error-count="2"
              :successMessages="['Success 1', 'Success 2']"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
  
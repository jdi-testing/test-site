<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field label="Regular"></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Solo"
            solo
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Filled"
            filled
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Outlined"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style>
#BackgroundColoredTextField .v-input__slot {
  background-color: #e3f2fd !important;
}
</style>

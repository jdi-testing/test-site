<template>
  <div>
    <v-stepper 
      non-linear
      elevation="4"
      outlined
      tile
    >
      <v-stepper-header>
        <v-stepper-step
          editable
          step="1"
        >
          Select campaign settings
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="2"
          color="green"
        >
          Create an ad group
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
          color="yellow"
          complete
          editable
        >
          Create an ad
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>

    <v-stepper 
      class="mt-2"
      non-linear
      elevation="3"
      outlined
      shaped
      tile
    >
      <v-stepper-header>
        <v-stepper-step
          editable
          step="1"
        >
          Select campaign settings
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="2"
          color="red"
        >
          Create an ad group
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
          color="black"
          complete
          editable
        >
          Create an ad
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

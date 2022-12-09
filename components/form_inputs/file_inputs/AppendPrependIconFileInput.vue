<template>
  <v-card>
    <v-file-input
      label="Prepend-icon rounded file input"
      rounded
      filled
      prepend-icon="mdi-camera"
    ></v-file-input>

    <v-file-input
      label="Prepend-inner-icon single-line file input"
      single-line
      filled
      prepend-inner-icon="mdi-camera"
    ></v-file-input>

    <v-file-input
      label="Append-icon with suffix file input"
      suffix="Suffix"
      filled
      append-icon="mdi-camera"
    ></v-file-input>

    <v-file-input
      label="Append-outer with prefix file input"
      prefix="Prefix"
      filled
      append-outer-icon="mdi-camera"
    ></v-file-input>
  </v-card>
</template>

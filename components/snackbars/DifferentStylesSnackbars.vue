<template>
  <v-container>
    <h2>Different styles Snackbars</h2>
    <v-card
      height="300"
      flat
    >
      <v-snackbar
        :timeout="-1"
        :value="true"
        absolute
        left
        shaped
        top
      >
        snackbar with <strong>Shaped, Left, Top</strong> properties.
      </v-snackbar>

      <v-snackbar
        :timeout="-1"
        :value="true"
        color="blue-grey"
        absolute
        right
        rounded="pill"
        top
      >
        snackbar with <strong>Rounded, Right, Top</strong> properties.
      </v-snackbar>

      <v-snackbar
        :timeout="-1"
        :value="true"
        absolute
        centered
        left
        color="deep-purple accent-4"
        elevation="24"
      >
        snackbar with <strong>Centered, Left, Elevation</strong> properties.
      </v-snackbar>

      <v-snackbar
        :timeout="-1"
        :value="true"
        absolute
        centered
        right
        tile
        color="red accent-2"
      >
        snackbar with <strong>Centered, Right, Tile</strong> properties.
      </v-snackbar>

      <v-snackbar
        :timeout="-1"
        :value="true"
        absolute
        bottom
        color="primary"
        left
        text
      >
        snackbar with <strong>Bottom, Left, Text</strong> properties.
      </v-snackbar>

      <v-snackbar
        :timeout="-1"
        :value="true"
        absolute
        bottom
        color="success"
        outlined
        right
      >
        snackbar with <strong>Bottom, Outlined, Right</strong> properties.
      </v-snackbar>
    </v-card>
  </v-container>
</template>

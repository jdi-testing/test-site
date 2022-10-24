<template>
  <v-row justify="center">
    <v-expansion-panels id="FlatExpansionPanels" flat dark multiple max=2 mandatory>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header color="blue" ripple>Item</v-expansion-panel-header>
        <v-expansion-panel-content eager color="blue lighten-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>,

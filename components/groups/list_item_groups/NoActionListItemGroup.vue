<template>
  <v-card class="mx-auto" max-width="400">
    <v-list>
      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-title>Test</v-list-item-title>
        </template>
        <v-list-group color="indigo" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>Test2</v-list-item-content>
          </template>
          <v-list-item v-for="(item, i) in items" :key="i" link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-wifi',
        text: 'Wifi',
      },
      {
        icon: 'mdi-bluetooth',
        text: 'Bluetooth',
      },
      {
        icon: 'mdi-chart-donut',
        text: 'Data Usage',
      },
    ],
    model: 1,
  }),
};
</script>

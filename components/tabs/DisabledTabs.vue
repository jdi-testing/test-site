<template>
  <v-card>
    <v-tabs
      v-model="tab"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.item"
        :disabled="tab.disabled"
      >
        {{ tab.item }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        tab: null,
        tabs: [
          {item: 'One', disabled: false},
          {item: 'Two', disabled: true},
          {item: 'Three', disabled: false},
        ],
      }
    },
  }
</script>
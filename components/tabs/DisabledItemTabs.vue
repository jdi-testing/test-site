<template>
  <v-card>
    <v-tabs
      v-model="tab"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.item"
      >
        {{ tab.item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items
      v-model="tab"
      show-arrows
    >
      <v-tab-item
        v-for="tab in tabs"
        :key="tab.item"
        :disabled="tab.disabled"
      >
        <v-card flat>
          <v-card-text v-text="'Content'"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
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
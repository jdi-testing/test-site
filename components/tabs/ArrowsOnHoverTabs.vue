<template>
  <v-card>
    <v-tabs
      v-model="tab"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab"
      >
        {{ tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items
      v-model="tab"
      show-arrows
      show-arrows-on-hover
    >
      <v-tab-item
        v-for="tab in tabs"
        :key="tab"
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
          'One',
          'Two',
          'Three',
        ],
      }
    },
  }
</script>
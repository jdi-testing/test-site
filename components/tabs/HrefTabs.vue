<template>
  <v-card>
    <v-tabs
      v-model="tab"
      optional
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab"
        :href="getTabHref(tab)"
      >
        {{ tab }}
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
          'One',
          'Two',
          'Three',
        ],
      }
    },
    methods: {
      getTabHref (tab) {
        const tabId = tab.toLowerCase()
        const url = this.$router.resolve(`?tab=${tabId}`)
        return url.href
      },
    },
  }
</script>
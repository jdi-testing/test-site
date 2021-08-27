<template>
  <v-container class="tooltips">
    <v-col>
      <h1>Tooltips</h1>
      <p class="body-1 mt-2">
        The <code>v-tooltip</code> component is useful for conveying information when a user hovers over an element.
      </p>
    </v-col>
    <SimpleTooltip />
    <ProgrammaticTooltip />
  </v-container>
</template>

<script>
// @ is an alias to /src
import SimpleTooltip from '@/components/tooltips/SimpleTooltip.vue';
import ProgrammaticTooltip from '@/components/tooltips/ProgrammaticTooltip.vue';

export default {
  name: 'Tooltips',
  components: {
    SimpleTooltip,
    ProgrammaticTooltip,
  },
};
</script>

<style>
h1 {
  text-align: center;
}

h2 {
  margin-bottom: 15px;
}
</style>

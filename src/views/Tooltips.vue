<template>
  <div class="tooltips">
    <h1>Tooltips</h1>
    <SimpleTooltip />
    <ProgrammaticTooltip />
  </div>
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

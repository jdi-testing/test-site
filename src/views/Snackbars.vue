<template>
  <div class="snackbars">
    <h1>Snackbars</h1>
    <SimpleSnackbar />
    <MultiLineSnackbar />
    <TimeoutSnackbar />
    <DifferentStylesSnackbars />
    <VerticalSnackbar />
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleSnackbar from '@/components/snackbars/SimpleSnackbar.vue';
import MultiLineSnackbar from '@/components/snackbars/MultiLineSnackbar.vue';
import TimeoutSnackbar from '@/components/snackbars/TimeoutSnackbar.vue';
import DifferentStylesSnackbars from '@/components/snackbars/DifferentStylesSnackbars.vue';
import VerticalSnackbar from '@/components/snackbars/VerticalSnackbar.vue';

export default {
  name: 'Snackbars',
  components: {
    SimpleSnackbar,
    MultiLineSnackbar,
    TimeoutSnackbar,
    DifferentStylesSnackbars,
    VerticalSnackbar,
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

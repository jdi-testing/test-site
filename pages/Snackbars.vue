<template>
  <v-container class="snackbars">
    <v-col>
      <h1>Snackbars</h1>
      <p class="body-1 mt-2">
        The <code>v-snackbar</code> component is used to display a quick message to a user. 
        Snackbars support positioning, removal delay, and callbacks.
      </p>
    </v-col>
    <SimpleSnackbar />
    <MultiLineSnackbar />
    <TimeoutSnackbar />
    <DifferentStylesSnackbars />
    <VerticalSnackbar />
  </v-container>
</template>

<script>
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

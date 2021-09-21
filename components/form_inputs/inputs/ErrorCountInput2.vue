<template>
  <v-input
    :error-count="errors.length"
    :error-messages="errors"
    error
    disabled
  >
    {{errors.length}}
  </v-input>
</template>
<script>
export default {
  props: {
    errors: Array,
  }
}
</script>

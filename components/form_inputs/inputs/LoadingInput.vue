<template>
  <div>
    <v-btn
      @click="loading=!loading"
    >
        Toggle loading
    </v-btn>
    <v-text-field
      color="success"
      :loading="loading"
      :disabled="loading"
    ></v-text-field>
  </div>
</template>
<script>
export default {
  name: 'LoadingInput',
  data() {
    return {
      loading: true,
    }
  }
}
</script>

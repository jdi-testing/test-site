<template>
  <div class="ma-auto" style="max-width: 260px">
    <v-otp-input
      v-model="otp"
      type="password"
      length="7"
      disabled
    ></v-otp-input>
  </div>
</template>
<script>
  export default {
    data: () => ({
      otp: '',
    }),
  }
</script>
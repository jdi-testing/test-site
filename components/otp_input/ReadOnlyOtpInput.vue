<template>
  <div class="ma-auto" style="max-width: 260px">
    <v-otp-input
      v-model="otp"
      type="number"
      length="3"
      readonly
    ></v-otp-input>
  </div>
</template>
<script>
  export default {
    data: () => ({
      otp: '111',
    }),
  }
</script>
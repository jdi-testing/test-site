<template>
  <v-file-input
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    validate-on-blur
    label="Avatar"
  ></v-file-input>
</template>
<script>
export default {
  data: () => ({
    rules: [
      value => !value || value.size < "2000000B" || 'Avatar size should be less than 2 MB!',
    ],
  }),
};
</script>

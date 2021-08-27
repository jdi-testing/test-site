<template>
  <v-container class="buttons">
    <v-col>
      <h1>Buttons</h1>
      <p class="body-1 mt-2">
        The <code>v-btn</code> component replaces the standard html button with a material design theme and a multitude of options. 
        Any color helper class can be used to alter the background or text color.
      </p>
    </v-col>
    <CommonButton />
    <BlockButton />
    <DepressedButton />
    <IconButton />
    <LoaderButton />
    <TextButton />
    <PlainButton />
    <OutlinedButton />
    <RoundedButton />
    <TileButton />
  </v-container>
</template>

<script>
import BlockButton from '@/components/buttons/BlockButton.vue';
import DepressedButton from '@/components/buttons/DepressedButton.vue';
import CommonButton from '@/components/buttons/CommonButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import LoaderButton from '@/components/buttons/LoaderButton.vue';
import TextButton from '@/components/buttons/TextButton.vue';
import PlainButton from '@/components/buttons/PlainButton.vue';
import OutlinedButton from '@/components/buttons/OutlinedButton.vue';
import RoundedButton from '@/components/buttons/RoundedButton.vue';
import TileButton from '@/components/buttons/TileButton.vue';

export default {
  name: 'Buttons',
  components: {
    BlockButton,
    DepressedButton,
    CommonButton,
    IconButton,
    LoaderButton,
    TextButton,
    PlainButton,
    OutlinedButton,
    RoundedButton,
    TileButton,
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

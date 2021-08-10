<template>
  <div class="buttons">
    <h1>Buttons</h1>
    <CommonButton />
    <BlockButton />
    <DepressedButton />
    <IconButton />
    <Loader />
    <TextButton />
    <PlainButton />
    <OutlinedButton />
    <RoundedButton />
    <TileButton />
  </div>
</template>

<script>
// @ is an alias to /src
import BlockButton from '@/components/buttons/BlockButton.vue';
import DepressedButton from '@/components/buttons/DepressedButton.vue';
import CommonButton from '@/components/buttons/CommonButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';
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

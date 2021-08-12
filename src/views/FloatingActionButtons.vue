<template>
  <div class="floating-action-buttons">
    <h1>Floating Action Buttons</h1>
    <FloatingButton />
    <DisplayAnimation />
    <LateralScreens />
    <SmallVariant />
    <SpeedDial />
  </div>
</template>

<script>
// @ is an alias to /src
import FloatingButton from '@/components/floating_action_buttons/FloatingButton.vue';
import DisplayAnimation from '@/components/floating_action_buttons/DisplayAnimation.vue';
import LateralScreens from '@/components/floating_action_buttons/LateralScreens.vue';
import SmallVariant from '@/components/floating_action_buttons/SmallVariant.vue';
import SpeedDial from '@/components/floating_action_buttons/SpeedDial.vue';

export default {
  name: 'FloatingActionButtons',
  components: {
    FloatingButton,
    DisplayAnimation,
    LateralScreens,
    SmallVariant,
    SpeedDial,
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

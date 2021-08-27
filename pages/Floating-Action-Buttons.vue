<template>
  <v-container class="floating-action-buttons">
    <v-col>
      <h1>Floating Action Buttons</h1>
      <p class="body-1 mt-2">
        The <code>v-btn</code> component can be used as a floating action button. 
        This provides an application with a main point of action. Combined with the <code>v-speed-dial</code> component, 
        you can create a diverse set of functions available for your users.
      </p>
    </v-col>
    <FloatingButton />
    <DisplayAnimation />
    <LateralScreens />
    <SmallVariant />
    <SpeedDial />
  </v-container>
</template>

<script>
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

<template>
    <v-container>
        <v-col>
            <h1>Windows</h1>
            <p class="body-1 mt-2">
                The <code>v-window</code> component provides the baseline functionality for transitioning content 
                from 1 pane to another. Other components such as <code>v-tabs</code>, <code>v-carousel</code> and 
                <code>v-stepper</code> utilize this component at their core.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Reverse window
            </p>
            <ReverseWindow id="ReverseWindow" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Vertical window
            </p>
            <VerticalWindow id="VerticalWindow" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Customized arrows window
            </p>
            <CustomizedArrowsWindow id="CustomizedArrowsWindow" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Account creation window
            </p>
            <AccountCreationWindow id="AccountCreationWindow" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Onboarding window
            </p>
            <OnboardingWindow id="OnboardingWindow" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled window item(№2 is disabled)
            </p>
            <DisabledWindowItem id="DisabledWindowItem" />
        </v-col>

    </v-container>
</template>

<script>
import ReverseWindow from '@/components/groups/windows/ReverseWindow.vue';
import VerticalWindow from '@/components/groups/windows/VerticalWindow.vue';
import CustomizedArrowsWindow from '@/components/groups/windows/CustomizedArrowsWindow.vue';
import AccountCreationWindow from '@/components/groups/windows/AccountCreationWindow.vue';
import OnboardingWindow from '@/components/groups/windows/OnboardingWindow.vue';
import DisabledWindowItem from '@/components/groups/windows/DisabledWindowItem.vue';

export default {
  name: 'Windows',
  components: {
    ReverseWindow,
    VerticalWindow,
    CustomizedArrowsWindow,
    AccountCreationWindow,
    OnboardingWindow,
    DisabledWindowItem,
  },
};
</script>

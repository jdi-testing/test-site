<template>
    <v-container>
        <v-col>
            <h1>Windows</h1>
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

    </v-container>
</template>

<script>
import ReverseWindow from '@/components/windows/ReverseWindow.vue';
import VerticalWindow from '@/components/windows/VerticalWindow.vue';
import CustomizedArrowsWindow from '@/components/windows/CustomizedArrowsWindow.vue';
import AccountCreationWindow from '@/components/windows/AccountCreationWindow.vue';
import OnboardingWindow from '@/components/windows/OnboardingWindow.vue';

export default {
  name: 'Windows',
  components: {
    ReverseWindow,
    VerticalWindow,
    CustomizedArrowsWindow,
    AccountCreationWindow,
    OnboardingWindow,
  },
};
</script>

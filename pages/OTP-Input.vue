<template>
    <v-container>
        <v-col>
            <h1>OTP Input</h1>
            <p class="body-1 mt-2">
                The <code>OTP input</code> is used for MFA procedure of authenticating users by a one-time password.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Hidden input
            </p>
            <HiddenOtpInput id="HiddenOtpInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled input
            </p>
            <DisabledOtpInput id="DisabledOtpInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Plain input
            </p>
            <PlainOtpInput id="PlainOtpInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Read-only input
            </p>
            <ReadOnlyOtpInput id="ReadOnlyOtpInput" />
        </v-col>

    </v-container>
</template>

<script>

import HiddenOtpInput from '@/components/otp_input/HiddenOtpInput.vue';
import DisabledOtpInput from '@/components/otp_input/DisabledOtpInput.vue';
import PlainOtpInput from '@/components/otp_input/PlainOtpInput.vue';
import ReadOnlyOtpInput from '@/components/otp_input/ReadOnlyOtpInput.vue';

export default {
  name: 'OtpInput',
  components: {
    HiddenOtpInput,
    DisabledOtpInput,
    PlainOtpInput,
    ReadOnlyOtpInput,
  },
};
</script>

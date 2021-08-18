<template>
    <v-container>
        <v-col>
            <h1>Radio buttons</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Colors radio button
            </p>
            <ColorsRadioButton id="ColorsRadioButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Direction radio button
            </p>
            <DirectionRadioButton id="DirectionRadioButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Mandatory radio button
            </p>
            <MandatoryRadioButton id="MandatoryRadioButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Label radio button
            </p>
            <LabelRadioButton id="LabelRadioButton" />
        </v-col>

    </v-container>
</template>

<script>
import ColorsRadioButton from '@/components/radio_buttons/ColorsRadioButton.vue';
import DirectionRadioButton from '@/components/radio_buttons/DirectionRadioButton.vue';
import MandatoryRadioButton from '@/components/radio_buttons/MandatoryRadioButton.vue';
import LabelRadioButton from '@/components/radio_buttons/LabelRadioButton.vue';

export default {
  name: 'RadioButtons',
  components: {
    ColorsRadioButton,
    DirectionRadioButton,
    MandatoryRadioButton,
    LabelRadioButton,
  },
};
</script>

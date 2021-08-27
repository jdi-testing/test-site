<template>
    <v-container>
        <v-col>
            <h1>Hover</h1>
            <p class="body-1 mt-2">
                The <code>v-hover</code> component provides a clean interface for handling hover states for any component.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled hover
            </p>
            <DisabledHover id="DisabledHover" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Open and close delay hover
            </p>
            <OpenAndCloseDelayHover id="OpenAndCloseDelayHover" />
        </v-col>

        <v-col>
            <p class="text-h5">
                List hover
            </p>
            <ListHover id="ListHover" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Transition hover
            </p>
            <TransitionHover id="TransitionHover" />
        </v-col>
    </v-container>
</template>

<script>
import DisabledHover from '@/components/hovers/DisabledHover.vue';
import OpenAndCloseDelayHover from '@/components/hovers/OpenAndCloseDelayHover.vue';
import ListHover from '@/components/hovers/ListHover.vue';
import TransitionHover from '@/components/hovers/TransitionHover.vue';

export default {
  name: 'Hovers',
  components: {
    DisabledHover,
    OpenAndCloseDelayHover,
    ListHover,
    TransitionHover,
  },
};
</script>

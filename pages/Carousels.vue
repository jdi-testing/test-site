<template>
    <v-container>
        <v-col>
            <h1>Carousels</h1>
            <p class="body-1 mt-2">
                The <code>v-carousel</code> component is used to display large numbers of visual content on a rotating timer.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom delimiters carousel
            </p>
            <CustomDelimitersCarousel id="CustomDelimitersCarousel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom transition carousel
            </p>
            <CustomTransitionCarousel id="CustomTransitionCarousel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Cycle carousel
            </p>
            <CycleCarousel id="CycleCarousel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hide controls carousel
            </p>
            <HideControlsCarousel id="HideControlsCarousel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Customized arrows carousel
            </p>
            <CustomizedArrowsCarousel id="CustomizedArrowsCarousel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hide delimiters carousel
            </p>
            <HideDelimitersCarousel id="HideDelimitersCarousel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Model carousel
            </p>
            <ModelCarousel id="ModelCarousel" />
        </v-col>
    </v-container>
</template>

<script>
import CustomDelimitersCarousel from '@/components/carousels/CustomDelimitersCarousel.vue';
import CustomTransitionCarousel from '@/components/carousels/CustomTransitionCarousel.vue';
import CycleCarousel from '@/components/carousels/CycleCarousel.vue';
import HideControlsCarousel from '@/components/carousels/HideControlsCarousel.vue';
import CustomizedArrowsCarousel from '@/components/carousels/CustomizedArrowsCarousel.vue';
import HideDelimitersCarousel from '@/components/carousels/HideDelimitersCarousel.vue';
import ModelCarousel from '@/components/carousels/ModelCarousel.vue';

export default {
  name: 'Carousels',
  components: {
    CustomDelimitersCarousel,
    CustomTransitionCarousel,
    CycleCarousel,
    HideControlsCarousel,
    CustomizedArrowsCarousel,
    HideDelimitersCarousel,
    ModelCarousel,
  },
};
</script>

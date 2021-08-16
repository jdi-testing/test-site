<template>
    <v-container>
        <v-col>
            <h1>Slide groups</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Active class slide group
            </p>
            <ActiveClassSlideGroup id="ActiveClassSlideGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Center active slide group
            </p>
            <CenterActiveSlideGroup id="CenterActiveSlideGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom icons slide group
            </p>
            <CustomIconsSlideGroup id="CustomIconsSlideGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Multiple slide group
            </p>
            <MultipleSlideGroup id="MultipleSlideGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Pseudo Carousel slide group
            </p>
            <PseudoCarouselSlideGroup id="PseudoCarouselSlideGroup" />
        </v-col>

    </v-container>
</template>

<script>
import ActiveClassSlideGroup from '@/components/slide_groups/ActiveClassSlideGroup.vue';
import CenterActiveSlideGroup from '@/components/slide_groups/CenterActiveSlideGroup.vue';
import CustomIconsSlideGroup from '@/components/slide_groups/CustomIconsSlideGroup.vue';
import MultipleSlideGroup from '@/components/slide_groups/MultipleSlideGroup.vue';
import PseudoCarouselSlideGroup from '@/components/slide_groups/PseudoCarouselSlideGroup.vue';

export default {
  name: 'Slide groups',
  components: {
    ActiveClassSlideGroup,
    CenterActiveSlideGroup,
    CustomIconsSlideGroup,
    MultipleSlideGroup,
    PseudoCarouselSlideGroup,
  },
};
</script>

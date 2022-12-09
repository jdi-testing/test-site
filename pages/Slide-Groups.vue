<template>
    <v-container>
        <v-col>
            <h1>Slide groups</h1>
            <p class="body-1 mt-2">
                The <code>v-slide-group</code> component is used to display pseudo paginated information. 
                It uses v-item-group at its core and provides a baseline for components such as v-tabs and v-chip-group.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Active class slide group (mandatory slide)
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
                Multiple slide group (max 3 selections)
            </p>
            <MultipleSlideGroup id="MultipleSlideGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Pseudo Carousel slide group
            </p>
            <PseudoCarouselSlideGroup id="PseudoCarouselSlideGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Mandatory slide group
            </p>
            <MandatorySlideGroup id="MandatorySlideGroup" />
        </v-col>

    </v-container>
</template>

<script>
import ActiveClassSlideGroup from '@/components/groups/slide_groups/ActiveClassSlideGroup.vue';
import CenterActiveSlideGroup from '@/components/groups/slide_groups/CenterActiveSlideGroup.vue';
import CustomIconsSlideGroup from '@/components/groups/slide_groups/CustomIconsSlideGroup.vue';
import MultipleSlideGroup from '@/components/groups/slide_groups/MultipleSlideGroup.vue';
import PseudoCarouselSlideGroup from '@/components/groups/slide_groups/PseudoCarouselSlideGroup.vue';
import MandatorySlideGroup from '@/components/groups/slide_groups/MandatorySlideGroup.vue';

export default {
  name: 'SlideGroups',
  components: {
    ActiveClassSlideGroup,
    CenterActiveSlideGroup,
    CustomIconsSlideGroup,
    MultipleSlideGroup,
    PseudoCarouselSlideGroup,
    MandatorySlideGroup,
  },
};
</script>

<template>
    <v-container>
        <v-col>
            <h1>Ratings</h1>
            <p class="body-1 mt-2">
                The <code>v-rating</code> component is a specialized but crucial piece in building user widgets. 
                Collecting user feedback via ratings is a simple analytic that can provide a lot of feedback 
                to your product or application.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Color rating
            </p>
            <ColorRating id="ColorRating" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Length rating
            </p>
            <LengthRating id="LengthRating" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Incremented rating
            </p>
            <IncrementedRating id="IncrementedRating" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Size rating
            </p>
            <SizeRating id="SizeRating" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icon Label rating
            </p>
            <IconLabelRating id="IconLabelRating" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Item slot rating
            </p>
            <ItemSlotRating id="ItemSlotRating" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Advanced usage rating
            </p>
            <AdvancedUsageRating id="AdvancedUsageRating" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Card ratings rating
            </p>
            <CardRatingsRating id="CardRatingsRating" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Various attributes rating
            </p>
            <VariousAttributesRating id="VariousAttributesRating" />
        </v-col>

    </v-container>
</template>

<script>
import ColorRating from '@/components/ratings/ColorRating.vue';
import LengthRating from '@/components/ratings/LengthRating.vue';
import IncrementedRating from '@/components/ratings/IncrementedRating.vue';
import SizeRating from '@/components/ratings/SizeRating.vue';
import IconLabelRating from '@/components/ratings/IconLabelRating.vue';
import ItemSlotRating from '@/components/ratings/ItemSlotRating.vue';
import AdvancedUsageRating from '@/components/ratings/AdvancedUsageRating.vue';
import CardRatingsRating from '@/components/ratings/CardRatingsRating.vue';
import VariousAttributesRating from '@/components/ratings/VariousAttributesRating.vue';

export default {
  name: 'Ratings',
  components: {
    ColorRating,
    LengthRating,
    IncrementedRating,
    SizeRating,
    IconLabelRating,
    ItemSlotRating,
    AdvancedUsageRating,
    CardRatingsRating,
    VariousAttributesRating
  },
};
</script>

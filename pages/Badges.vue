<template>
    <v-container>
        <v-col>
            <h1>Badges</h1>
            <p class="body-1 mt-2">
                The <code>v-badge</code> component superscripts or subscripts an avatar-like icon or text onto 
                content to highlight information to a user or to just draw attention to a specific element. 
                Content within the badge usually contains numbers or icons.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Simple badge
            </p>
            <SimpleBadge id="simpleBadges" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom badge
            </p>
            <CustomBadge id="customBadges" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dynamic badge
            </p>
            <DynamicBadge id="dynamicBadge" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hover badge
            </p>
            <HoverBadge id="hoverBadge" />
        </v-col>
    </v-container>
</template>

<script>
import SimpleBadge from '@/components/badges/SimpleBadge.vue';
import CustomBadge from '@/components/badges/CustomBadge.vue';
import DynamicBadge from '@/components/badges/DynamicBadge.vue';
import HoverBadge from '@/components/badges/HoverBadge.vue';

export default {
  name: 'Badges',
  components: {
    SimpleBadge,
    CustomBadge,
    DynamicBadge,
    HoverBadge,
  },
};
</script>

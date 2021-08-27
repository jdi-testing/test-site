<template>
    <v-container>
        <v-col>
            <h1>Dividers</h1>
            <p class="body-1 mt-2">
                The <code>v-divider</code> component is used to separate sections of lists or layouts.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Inset divider
            </p>
            <InsetDivider id="InsetDivider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Vertical divider
            </p>
            <VerticalDivider id="VerticalDivider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Portrait view divider
            </p>
            <PortraitViewDivider id="PortraitViewDivider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Subheaders divider
            </p>
            <SubheadersDivider id="SubheadersDivider" />
        </v-col>
    </v-container>
</template>

<script>
import InsetDivider from '@/components/dividers/InsetDivider.vue';
import VerticalDivider from '@/components/dividers/VerticalDivider.vue';
import PortraitViewDivider from '@/components/dividers/PortraitViewDivider.vue';
import SubheadersDivider from '@/components/dividers/SubheadersDivider.vue';

export default {
  name: 'Dividers',
  components: {
    InsetDivider,
    VerticalDivider,
    PortraitViewDivider,
    SubheadersDivider,
  },
};
</script>

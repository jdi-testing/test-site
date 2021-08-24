<template>
    <v-container>
        <v-col>
            <h1>Subheader</h1>
            <p class="body-1 mt-2">
             The <code>v-subheader</code> component is used to separate sections of lists.
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Inset
            </p>
            <InsetSubheader id="InsetSubheader" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Grid
            </p>
            <GridSubheader id="GridSubheader" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Menu
            </p>
            <MenuSubheader id="MenuSubheader" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Social Media
            </p>
            <SocialMediaSubheader id="SocialMediaSubheader" />
        </v-col>

    </v-container>
</template>
<script>
import InsetSubheader from '@/components/subheaders/InsetSubheader.vue';
import GridSubheader from '@/components/subheaders/GridSubheader.vue';
import MenuSubheader from '@/components/subheaders/MenuSubheader.vue';
import SocialMediaSubheader from '@/components/subheaders/SocialMediaSubheader.vue';

export default {
  name: 'Subheaders',
  components: {
    InsetSubheader,
    GridSubheader,
    MenuSubheader,
    SocialMediaSubheader
  },
};
</script>

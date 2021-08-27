<template>
    <v-container>
        <v-col>
            <h1>Images</h1>
            <p class="body-1 mt-2">
                The <code>v-img</code> component is packed with features to support rich media. 
                Combined with the vuetify-loader, you can add dynamic progressive images to provide a better user experience.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Aspect ratio image
            </p>
            <AspectRatioImage id="AspectRatioImage" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Contain image
            </p>
            <ContainImage id="ContainImage" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Gradients image
            </p>
            <GradientsImage id="GradientsImage" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Height image
            </p>
            <HeightImage id="HeightImage" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Placeholder image
            </p>
            <PlaceholderImage id="PlaceholderImage" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Grid image
            </p>
            <GridImage id="GridImage" />
        </v-col>

    </v-container>
</template>

<script>
import AspectRatioImage from '@/components/images/AspectRatioImage.vue';
import ContainImage from '@/components/images/ContainImage.vue';
import GradientsImage from '@/components/images/GradientsImage.vue';
import HeightImage from '@/components/images/HeightImage.vue';
import PlaceholderImage from '@/components/images/PlaceholderImage.vue';
import GridImage from '@/components/images/GridImage.vue';

export default {
  name: 'Images',
  components: {
    AspectRatioImage,
    ContainImage,
    GradientsImage,
    HeightImage,
    PlaceholderImage,
    GridImage,
  },
};
</script>

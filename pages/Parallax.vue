<template>
    <v-container>
        <v-col>
            <h1>Parallax</h1>
            <p class="body-1 mt-2">
             The <code>v-parallax</code> component creates a 3d effect that makes an image appear to scroll slower than the window.            
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Content
            </p>
            <ContentParallax id="ContentParallax" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Custom height
            </p>
            <CustomHeightParallax id="CustomHeightParallax" />
        </v-col>

    </v-container>
</template>
<script>
import ContentParallax from '@/components/parallax/ContentParallax.vue';
import CustomHeightParallax from '@/components/parallax/CustomHeightParallax.vue';

export default {
  name: 'Parallax',
  components: {
    ContentParallax,
    CustomHeightParallax
  },
};
</script>

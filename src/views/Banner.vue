<template>
    <v-container>
        <v-col>
            <h1>Banner</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Banner and sticky banner
            </p>
            <banner id="BannerId" />
        </v-col>
    </v-container>
</template>

<script>
import Banner from '@/components/banners/Banner.vue';

export default {
  name: 'Banners',
  components: {
    Banner,
  },
};
</script>

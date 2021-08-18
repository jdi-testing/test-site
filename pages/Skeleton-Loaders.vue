<template>
    <v-container>
        <v-col>
            <h1>Skeleton loaders</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Boilerplate component skeleton loader
            </p>
            <BoilerplateComponentSkeletonLoader id="BoilerplateComponentSkeletonLoader" />
        </v-col>

    </v-container>
</template>

<script>
import BoilerplateComponentSkeletonLoader from '@/components/skeleton_loaders/BoilerplateComponentSkeletonLoader.vue';

export default {
  name: 'SkeletonLoaders',
  components: {
    BoilerplateComponentSkeletonLoader,
  },
};
</script>

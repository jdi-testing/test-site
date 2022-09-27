<template>
    <v-container>
        <v-col>
            <h1>Skeleton loaders</h1>
            <p class="body-1 mt-2">
                The <code>v-skeleton-loader</code> component is a versatile tool that can fill many roles within 
                a project. At its heart, the component provides an indication to the user that something is coming 
                but not yet available. There are over 30 pre-defined options available that can be combined to make custom examples.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Boilerplate component skeleton loader
            </p>
            <BoilerplateComponentSkeletonLoader id="BoilerplateComponentSkeletonLoader" />
        </v-col>

        <v-col>
            <DarkAnimationSkeletonLoader id="DarkAnimationSkeletonLoader" />
        </v-col>

    </v-container>
</template>

<script>
import BoilerplateComponentSkeletonLoader from '@/components/skeleton_loaders/BoilerplateComponentSkeletonLoader.vue';
import DarkAnimationSkeletonLoader from '@/components/skeleton_loaders/DarkAnimationSkeletonLoader.vue';

export default {
  name: 'SkeletonLoaders',
  components: {
    BoilerplateComponentSkeletonLoader,
    DarkAnimationSkeletonLoader,
  },
};
</script>

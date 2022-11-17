<template>
    <v-container>
        <v-col>
            <h1>Lazy</h1>
            <p class="body-1 mt-2">
                The <code>v-lazy</code> component by default will not render its contents until it has been intersected.
                 Scroll down and watch the element render as you go past it.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Lazy card
            </p>
            <LazyCard id="lazyCard" />
        </v-col>

    </v-container>
</template>

<script>
import LazyCard from '@/components/lazy/LazyCard.vue';

export default {
  name: 'Lazy',
  components: {
    LazyCard,
  },
};
</script>

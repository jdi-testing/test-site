<template>
    <v-container>
        <v-col>
            <h1>Banner</h1>
            <p class="body-1 mt-2">
                The <code>v-banner</code> component is used as middle-interruptive message to user with 1-2 actions.
                It comes in 2 variations single-line and multi-line (implicit).
                These can have icons which you can use with your message and actions.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
              Simple Banner
            </p>
            <SimpleBanner id="SimpleBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
              Rounded Banner
            </p>
            <RoundedBanner id="RoundedBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
              Tile Banner
            </p>
            <TileBanner id="TileBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Shaped Banner
            </p>
            <ShapedBanner id="ShapedBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
              Outlined Banner
            </p>
            <OutlinedBanner id="OutlinedBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
              Dark Banner
            </p>
            <DarkBanner id="DarkBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
              Elevated Banner
            </p>
            <ElevatedBanner id="ElevatedBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Events Banner (icon click)
            </p>
            <EventsBanner id="EventsBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Actions Banner
            </p>
            <ActionsBanner id="ActionsBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Icon Banner
            </p>
            <IconBanner id="IconBanner" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Two line Banner
            </p>
            <TwoLineBanner id="TwoLineBanner" />
        </v-col>
    </v-container>
</template>

<script>

import SimpleBanner from '@/components/banners/SimpleBanner.vue';
import RoundedBanner from '@/components/banners/RoundedBanner.vue';
import TileBanner from '@/components/banners/TileBanner.vue';
import ShapedBanner from '@/components/banners/ShapedBanner.vue';
import OutlinedBanner from '@/components/banners/OutlinedBanner.vue';
import DarkBanner from '@/components/banners/DarkBanner.vue';
import ElevatedBanner from '@/components/banners/ElevatedBanner.vue';
import SingleBanner from '@/components/banners/SingleBanner.vue';
import EventsBanner from '@/components/banners/EventsBanner.vue';
import ActionsBanner from '@/components/banners/ActionsBanner.vue';
import IconBanner from '@/components/banners/IconBanner.vue';
import TwoLineBanner from '@/components/banners/TwoLineBanner.vue';

export default {
  name: 'Banners',
  components: {
    SimpleBanner,
    RoundedBanner,
    TileBanner,
    ShapedBanner,
    OutlinedBanner,
    DarkBanner,
    ElevatedBanner,
    SingleBanner,
    EventsBanner,
    ActionsBanner,
    IconBanner,
    TwoLineBanner,
  },
};
</script>

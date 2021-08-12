<template>
    <v-container>
        <v-col>
            <h1>Icons</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Color icon
            </p>
            <ColorIcon id="ColorIcon" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Click icon
            </p>
            <ClickIcon id="ClickIcon" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Buttons icon
            </p>
            <ButtonsIcon id="ButtonsIcon" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Font Awesome icon
            </p>
            <FontAwesomeIcon id="FontAwesomeIcon" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Material Design icon
            </p>
            <MaterialDesignIcon id="MaterialDesignIcon" />
        </v-col>

        <v-col>
            <p class="text-h5">
                MDI SVG icon
            </p>
            <MDISvgIcon id="MDISvgIcon" />
        </v-col>

    </v-container>
</template>

<script>
import ColorIcon from '@/components/icons/ColorIcon.vue';
import ClickIcon from '@/components/icons/ClickIcon.vue';
import ButtonsIcon from '@/components/icons/ButtonsIcon.vue';
import FontAwesomeIcon from '@/components/icons/FontAwesomeIcon.vue';
import MaterialDesignIcon from '@/components/icons/MaterialDesignIcon.vue';
// import MDISvgIcon from '@/components/icons/MDISvgIcon.vue';

export default {
  name: 'Icons',
  components: {
    ColorIcon,
    ClickIcon,
    ButtonsIcon,
    FontAwesomeIcon,
    MaterialDesignIcon,
    // MDISvgIcon,
  },
};
</script>

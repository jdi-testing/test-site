<template>
    <v-container>
        <v-col>
            <h1>Navigation drawers</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Bottom drawer navigation drawer
            </p>
            <BottomDrawerNavigationDrawer id="BottomDrawerNavigationDrawer" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Expand on hover navigation drawer
            </p>
            <ExpandOnHoverNavigationDrawer id="ExpandOnHoverNavigationDrawer" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Images navigation drawer
            </p>
            <ImagesNavigationDrawer id="ImagesNavigationDrawer" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Mini variant navigation drawer
            </p>
            <MiniVariantNavigationDrawer id="MiniVariantNavigationDrawer" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Permanent and floating navigation drawer
            </p>
            <PermanentAndFloatingNavigationDrawer id="PermanentAndFloatingNavigationDrawer" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Right navigation drawer
            </p>
            <RightNavigationDrawer id="RightNavigationDrawer" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Temporary navigation drawer
            </p>
            <TemporaryNavigationDrawer id="TemporaryNavigationDrawer" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Colored drawer navigation drawer
            </p>
            <ColoredDrawerNavigationDrawer id="ColoredDrawerNavigationDrawer" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Combined drawer navigation drawer
            </p>
            <CombinedDrawerNavigationDrawer id="CombinedDrawerNavigationDrawer" />
        </v-col>

    </v-container>
</template>

<script>
import BottomDrawerNavigationDrawer from '@/components/navigation_drawers/BottomDrawerNavigationDrawer.vue';
import ExpandOnHoverNavigationDrawer from '@/components/navigation_drawers/ExpandOnHoverNavigationDrawer.vue';
import ImagesNavigationDrawer from '@/components/navigation_drawers/ImagesNavigationDrawer.vue';
import MiniVariantNavigationDrawer from '@/components/navigation_drawers/MiniVariantNavigationDrawer.vue';
import PermanentAndFloatingNavigationDrawer from '@/components/navigation_drawers/PermanentAndFloatingNavigationDrawer.vue';
import RightNavigationDrawer from '@/components/navigation_drawers/RightNavigationDrawer.vue';
import TemporaryNavigationDrawer from '@/components/navigation_drawers/TemporaryNavigationDrawer.vue';
import ColoredDrawerNavigationDrawer from '@/components/navigation_drawers/ColoredDrawerNavigationDrawer.vue';
import CombinedDrawerNavigationDrawer from '@/components/navigation_drawers/CombinedDrawerNavigationDrawer.vue';

export default {
  name: 'Navigation drawers',
  components: {
    BottomDrawerNavigationDrawer,
    ExpandOnHoverNavigationDrawer,
    ImagesNavigationDrawer,
    MiniVariantNavigationDrawer,
    PermanentAndFloatingNavigationDrawer,
    RightNavigationDrawer,
    TemporaryNavigationDrawer,
    ColoredDrawerNavigationDrawer,
    CombinedDrawerNavigationDrawer,
  },
};
</script>

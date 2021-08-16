<template>
    <v-container>
        <v-col>
            <h1>Menus</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Absolute menu
            </p>
            <AbsoluteMenu id="AbsoluteMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Absolute without activator menu
            </p>
            <AbsoluteWithoutActivatorMenu id="AbsoluteWithoutActivatorMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Close on click menu
            </p>
            <CloseOnClickMenu id="CloseOnClickMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Close on content click menu
            </p>
            <CloseOnContentClickMenu id="CloseOnContentClickMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled menu
            </p>
            <DisabledMenu id="DisabledMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Offset x menu
            </p>
            <OffsetXMenu id="OffsetXMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Offset y menu
            </p>
            <OffsetYMenu id="OffsetYMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Open on hover menu
            </p>
            <OpenOnHoverMenu id="OpenOnHoverMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Rounded menu
            </p>
            <RoundedMenu id="RoundedMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Activator and tooltip menu
            </p>
            <ActivatorAndTooltipMenu id="ActivatorAndTooltipMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom transitions menu
            </p>
            <CustomTransitionsMenu id="CustomTransitionsMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Popover menu menu
            </p>
            <PopoverMenuMenu id="PopoverMenuMenu" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Use In components menu
            </p>
            <UseInComponentsMenu id="UseInComponentsMenu" />
        </v-col>

    </v-container>
</template>

<script>
import AbsoluteMenu from '@/components/menus/AbsoluteMenu.vue';
import AbsoluteWithoutActivatorMenu from '@/components/menus/AbsoluteWithoutActivatorMenu.vue';
import CloseOnClickMenu from '@/components/menus/CloseOnClickMenu.vue';
import CloseOnContentClickMenu from '@/components/menus/CloseOnContentClickMenu.vue';
import DisabledMenu from '@/components/menus/DisabledMenu.vue';
import OffsetXMenu from '@/components/menus/OffsetXMenu.vue';
import OffsetYMenu from '@/components/menus/OffsetYMenu.vue';
import OpenOnHoverMenu from '@/components/menus/OpenOnHoverMenu.vue';
import RoundedMenu from '@/components/menus/RoundedMenu.vue';
import ActivatorAndTooltipMenu from '@/components/menus/ActivatorAndTooltipMenu.vue';
import CustomTransitionsMenu from '@/components/menus/CustomTransitionsMenu.vue';
import PopoverMenuMenu from '@/components/menus/PopoverMenuMenu.vue';
import UseInComponentsMenu from '@/components/menus/UseInComponentsMenu.vue';

export default {
  name: 'Menus',
  components: {
    AbsoluteMenu,
    AbsoluteWithoutActivatorMenu,
    CloseOnClickMenu,
    CloseOnContentClickMenu,
    DisabledMenu,
    OffsetXMenu,
    OffsetYMenu,
    OpenOnHoverMenu,
    RoundedMenu,
    ActivatorAndTooltipMenu,
    CustomTransitionsMenu,
    PopoverMenuMenu,
    UseInComponentsMenu,
  },
};
</script>

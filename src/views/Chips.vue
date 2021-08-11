<template>
    <v-container>
        <v-col>
            <h1>Chips</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Closable chip
            </p>
            <ClosableChip id="ClosableChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Colored chip
            </p>
            <ColoredChip id="ColoredChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Draggable chip
            </p>
            <DraggableChip id="DraggableChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Filter chip
            </p>
            <FilterChip id="FilterChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Label chip
            </p>
            <LabelChip id="LabelChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                No ripple chip
            </p>
            <NoRippleChip id="NoRippleChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Outlined chip
            </p>
            <OutlinedChip id="OutlinedChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Sizes chip
            </p>
            <SizesChip id="SizesChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Action chip
            </p>
            <ActionChip id="ActionChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icon chip
            </p>
            <IconChip id="IconChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom list chip
            </p>
            <CustomListChip id="CustomListChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Expandable chip
            </p>
            <ExpandableChip id="ExpandableChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Filtering chip
            </p>
            <FilteringChip id="FilteringChip" />
        </v-col>

        <v-col>
            <p class="text-h5">
                In selects chip
            </p>
            <InSelectsChip id="InSelectsChip" />
        </v-col>

    </v-container>
</template>

<script>
import ClosableChip from '@/components/chips/ClosableChip.vue';
import ColoredChip from '@/components/chips/ColoredChip.vue';
import DraggableChip from '@/components/chips/DraggableChip.vue';
import FilterChip from '@/components/chips/FilterChip.vue';
import LabelChip from '@/components/chips/LabelChip.vue';
import NoRippleChip from '@/components/chips/NoRippleChip.vue';
import OutlinedChip from '@/components/chips/OutlinedChip.vue';
import SizesChip from '@/components/chips/SizesChip.vue';
import ActionChip from '@/components/chips/ActionChip.vue';
import IconChip from '@/components/chips/IconChip.vue';
import CustomListChip from '@/components/chips/CustomListChip.vue';
import ExpandableChip from '@/components/chips/ExpandableChip.vue';
import FilteringChip from '@/components/chips/FilteringChip.vue';
import InSelectsChip from '@/components/chips/InSelectsChip.vue';

export default {
  name: 'Chips',
  components: {
    ClosableChip,
    ColoredChip,
    DraggableChip,
    FilterChip,
    LabelChip,
    NoRippleChip,
    OutlinedChip,
    SizesChip,
    ActionChip,
    IconChip,
    CustomListChip,
    ExpandableChip,
    FilteringChip,
    InSelectsChip,
  },
};
</script>

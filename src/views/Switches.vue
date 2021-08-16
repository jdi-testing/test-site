<template>
    <v-container>
        <v-col>
            <h1>Switches</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Colors switches
            </p>
            <ColorsSwitch id="ColorsSwitch"  />
        </v-col>

        <v-col>
            <p class="text-h5">
                Flat switches
            </p>
            <FlatSwitch id="FlatSwitch"  />
        </v-col>

        <v-col>
            <p class="text-h5">
                Inset switches
            </p>
            <InsetSwitch id="InsetSwitch"  />
        </v-col>

        <v-col>
            <p class="text-h5">
                Model as array switches
            </p>
            <ModelAsArraySwitch id="ModelAsArraySwitch"  />
        </v-col>

        <v-col>
            <p class="text-h5">
                Model as boolean switches
            </p>
            <ModelAsBooleanSwitch id="ModelAsBooleanSwitch"  />
        </v-col>

        <v-col>
            <p class="text-h5">
                States switches
            </p>
            <StatesSwitch id="StatesSwitch"  />
        </v-col>

        <v-col>
            <p class="text-h5">
                Label switches
            </p>
            <LabelSwitch id="LabelSwitch"  />
        </v-col>

    </v-container>
</template>

<script>
import ColorsSwitch from '@/components/switches/ColorsSwitch.vue';
import FlatSwitch from '@/components/switches/FlatSwitch.vue';
import InsetSwitch from '@/components/switches/InsetSwitch.vue';
import ModelAsArraySwitch from '@/components/switches/ModelAsArraySwitch.vue';
import ModelAsBooleanSwitch from '@/components/switches/ModelAsBooleanSwitch.vue';
import StatesSwitch from '@/components/switches/StatesSwitch.vue';
import LabelSwitch from '@/components/switches/LabelSwitch.vue';

export default {
  name: 'Switches',
  components: {
    ColorsSwitch,
    FlatSwitch,
    InsetSwitch,
    ModelAsArraySwitch,
    ModelAsBooleanSwitch,
    StatesSwitch,
    LabelSwitch,
  },
};
</script>

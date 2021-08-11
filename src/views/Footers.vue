<template>
    <v-container>
        <v-col>
            <h1>Footers</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Padless footer
            </p>
            <PadlessFooter id="PadlessFooter" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Company footer
            </p>
            <CompanyFooter id="CompanyFooter" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Indigo footer
            </p>
            <IndigoFooter id="IndigoFooter" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Teal footer
            </p>
            <TealFooter id="TealFooter" />
        </v-col>

    </v-container>
</template>

<script>
import PadlessFooter from '@/components/footers/PadlessFooter.vue';
import CompanyFooter from '@/components/footers/CompanyFooter.vue';
import IndigoFooter from '@/components/footers/IndigoFooter.vue';
import TealFooter from '@/components/footers/TealFooter.vue';

export default {
  name: 'Footers',
  components: {
    PadlessFooter,
    CompanyFooter,
    IndigoFooter,
    TealFooter,
  },
};
</script>

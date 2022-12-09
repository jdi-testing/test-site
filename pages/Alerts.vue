<template>
    <v-container>
        <v-col>
            <h1>Alerts</h1>
            <p class="body-1 mt-2">
                The <code>v-alert</code> component is used to convey important information to the user through the 
                use contextual types icons and color. These default types come in in 4 variations: success, info, warning, and error. 
                Default icons are assigned which help represent different actions each type portrays.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Basic alerts
            </p>
            <BasicAlert id="basicAlerts" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Alerts with props
            </p>
            <AlertWithProps id="alertsWithProps" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dense
            </p>
            <DenseAlert id="denseAlerts" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dismissible
            </p>
            <DismissibleAlert id="dismissibleAlert" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Alerts with icon
            </p>
            <IconAlert id="alertsWithIcon" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Outlined alerts
            </p>
            <OutlinedAlert id="outlinedAlerts" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Prominent alerts
            </p>
            <ProminentAlert id="prominentAlerts" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Text alerts
            </p>
            <TextAlert id="textAlerts" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Transition alert
            </p>
            <TransitionAlert id="transitionAlert" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Rounded alert
            </p>
            <RoundedAlert id="roundedAlert" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Tile alert
            </p>
            <TileAlert id="tileAlert" />
        </v-col>
    </v-container>
</template>

<script>

import BasicAlert from '@/components/alerts/BasicAlert.vue';
import AlertWithProps from '@/components/alerts/AlertProps.vue';
import DenseAlert from '@/components/alerts/DenseAlert.vue';
import DismissibleAlert from '@/components/alerts/DismissibleAlert.vue';
import IconAlert from '@/components/alerts/IconAlert.vue';
import OutlinedAlert from '@/components/alerts/OutlinedAlert.vue';
import ProminentAlert from '@/components/alerts/ProminentAlert.vue';
import TextAlert from '@/components/alerts/TextAlert.vue';
import TransitionAlert from '@/components/alerts/TransitionAlert.vue';
import RoundedAlert from '@/components/alerts/RoundedAlert.vue';
import TileAlert from '@/components/alerts/TileAlert.vue';

export default {
  name: 'Alerts',
  components: {
    BasicAlert,
    AlertWithProps,
    DenseAlert,
    DismissibleAlert,
    IconAlert,
    OutlinedAlert,
    ProminentAlert,
    TextAlert,
    TransitionAlert,
    RoundedAlert,
    TileAlert,
  },
};
</script>

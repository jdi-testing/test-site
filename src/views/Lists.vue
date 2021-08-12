<template>
    <v-container>
        <v-col>
            <h1>Lists</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Dense list
            </p>
            <DenseList id="DenseList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled list
            </p>
            <DisabledList id="DisabledList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Flat list
            </p>
            <FlatList id="FlatList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Nav list
            </p>
            <NavList id="NavList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Rounded list
            </p>
            <RoundedList id="RoundedList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Shaped list
            </p>
            <ShapedList id="ShapedList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Sub group list
            </p>
            <SubGroupList id="SubGroupList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Three line list
            </p>
            <ThreeLineList id="ThreeLineList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Two lines and subheader list
            </p>
            <TwoLinesAndSubheaderList id="TwoLinesAndSubheaderList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Expansion Lists list
            </p>
            <ExpansionListsList id="ExpansionListsList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Action and item groups list
            </p>
            <ActionAndItemGroupsList id="ActionAndItemGroupsList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Action stack list
            </p>
            <ActionStackList id="ActionStackList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Card list list
            </p>
            <CardListList id="CardListList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Simple avatar list list
            </p>
            <SimpleAvatarListList id="SimpleAvatarListList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Single line list list
            </p>
            <SingleLineListList id="SingleLineListList" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Subheadings and dividers list
            </p>
            <SubheadingsAndDividersList id="SubheadingsAndDividersList" />
        </v-col>

    </v-container>
</template>

<script>
import DenseList from '@/components/lists/DenseList.vue';
import DisabledList from '@/components/lists/DisabledList.vue';
import FlatList from '@/components/lists/FlatList.vue';
import NavList from '@/components/lists/NavList.vue';
import RoundedList from '@/components/lists/RoundedList.vue';
import ShapedList from '@/components/lists/ShapedList.vue';
import SubGroupList from '@/components/lists/SubGroupList.vue';
import ThreeLineList from '@/components/lists/ThreeLineList.vue';
import TwoLinesAndSubheaderList from '@/components/lists/TwoLinesAndSubheaderList.vue';
import ExpansionListsList from '@/components/lists/ExpansionListsList.vue';
import ActionAndItemGroupsList from '@/components/lists/ActionAndItemGroupsList.vue';
import ActionStackList from '@/components/lists/ActionStackList.vue';
import CardListList from '@/components/lists/CardListList.vue';
import SimpleAvatarListList from '@/components/lists/SimpleAvatarListList.vue';
import SingleLineListList from '@/components/lists/SingleLineListList.vue';
import SubheadingsAndDividersList from '@/components/lists/SubheadingsAndDividersList.vue';

export default {
  name: 'Lists',
  components: {
    DenseList,
    DisabledList,
    FlatList,
    NavList,
    RoundedList,
    ShapedList,
    SubGroupList,
    ThreeLineList,
    TwoLinesAndSubheaderList,
    ExpansionListsList,
    ActionAndItemGroupsList,
    ActionStackList,
    CardListList,
    SimpleAvatarListList,
    SingleLineListList,
    SubheadingsAndDividersList,
  },
};
</script>

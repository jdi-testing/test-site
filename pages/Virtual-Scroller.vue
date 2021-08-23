<template>
    <v-container>
        <v-col>
            <h1>Virtual Scroller</h1>
            <p class="body-1 mt-2">
            The <code>v-virtual-scroll</code> component displays a virtual, infinite list. It supports dynamic height and scrolling vertically.
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Bench
            </p>
            <p class="body-1 mt-2">
            By default the v-virtual-scroll does not pre-render additional items outside of the viewport. 
            Using the bench prop will have the scroller render additional items as padding. 
            It is recommended to keep this number as low as possible for the best possible performance.            
            </p>
            <BenchVirtualScroller id="BenchVirtualScroller" />
        </v-col>
        <v-col>
            <p class="text-h5">
                User directory
            </p>
            <p class="body-1 mt-2">
            The <code>v-virtual-scroll</code> component can render an unlimited amount of items by rendering only 
            what it needs to fill the scroller’s viewport.            
            </p>
            <UserDirectoryVirtualScroller id="UserDirectoryVirtualScroller" />
        </v-col>

    </v-container>
</template>
<script>
import BenchVirtualScroller from '@/components/virtual_scroller/BenchVirtualScroller.vue';
import UserDirectoryVirtualScroller from '@/components/virtual_scroller/UserDirectoryVirtualScroller.vue';

export default {
  name: 'VirtualScroller',
  components: {
    BenchVirtualScroller,
    UserDirectoryVirtualScroller
  },
};
</script>

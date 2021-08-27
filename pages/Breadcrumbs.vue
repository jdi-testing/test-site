<template>
  <v-container>
    <v-col>
      <h1>Breadcrumbs</h1>
      <p class="body-1 mt-2">
        The <code>v-breadcrumbs</code> component is a navigational helper for pages. 
        It can accept a Material Icons icon or text characters as a divider. 
        An array of objects can be passed to the items property of the component. 
        Additionally, slots exists for more control of the breadcrumbs, either utilizing <code>v-breadcrumbs-item</code> or other custom markup.
      </p>
    </v-col>

    <v-col>
      <p class="text-h5">
        Dividers
      </p>
      <DifferentDividersBreadcrumbs id="differentDividersBreadcrumbs"/>
    </v-col>

    <v-col>
      <p class="text-h5">
        Large breadcrumbs
      </p>
      <LargeBreadcrumbs id="largeBreadcrumbs"/>
    </v-col>

    <v-col>
      <p class="text-h5">
        Icon dividers
      </p>
      <CustomDividersBreadcrumbs id="customDividersBreadcrumbs"/>
    </v-col>
      <p class="text-h5">
        Item slot breadcrumbs
      </p>
      <ItemSlotBreadcrumbs id="itemSlotBreadcrumbs"/>
    
  </v-container>
  
</template>

<script>

import DifferentDividersBreadcrumbs from '@/components/breadcrumbs/DifferentDividersBreadcrumbs.vue';
import LargeBreadcrumbs from '@/components/breadcrumbs/LargeBreadcrumbs.vue';
import CustomDividersBreadcrumbs from '@/components/breadcrumbs/CustomDividersBreadcrumbs.vue';
import ItemSlotBreadcrumbs from '@/components/breadcrumbs/ItemSlotBreadcrumbs.vue';

export default {
  name: 'Breadcrumbs',
  components: {
    DifferentDividersBreadcrumbs,
    LargeBreadcrumbs,
    CustomDividersBreadcrumbs,
    ItemSlotBreadcrumbs,
  },
};
</script>

<template>
  <v-container>
    <v-col>
      <h1>Breadcrumbs</h1>
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

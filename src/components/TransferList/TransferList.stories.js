import EnhancedTransferList from "./EnhancedTransferList";
import SimpleTransferList from "./SimpleTransferList";
import React from "react";

export default {
    title: 'Material Ui/Inputs/TransferList',
    component: EnhancedTransferList, SimpleTransferList
};

export const EnhancedTransferListView = (args) => <EnhancedTransferList {...args}>Enhanced Transfer List </EnhancedTransferList>
export const SimpleTransferListView = (args) => <SimpleTransferList {...args}>Enhanced Transfer List </SimpleTransferList>
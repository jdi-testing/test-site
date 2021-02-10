import ListItemsDialog from './ListItemsDialog';
import AlertDialog from './AlertDialog';
import FormDialog from './FormDialog';
import ConfirmationDialog from './ConfirmationDialog';
import ScrollableDialog from './ScrollableDialog';

export default {
  title: 'Material Ui/Feedback/Dialog',
  component: ListItemsDialog,
};

export const DialogWithList = ListItemsDialog.bind({});
DialogWithList.args = {
  fullScreen: false,
};

export const DialogAlert = AlertDialog.bind({});

export const DialogForm = FormDialog.bind({});

export const DialogConfirm = ConfirmationDialog.bind({});

export const DialogScroll = ScrollableDialog.bind({});

export const DialogScrollBody = ScrollableDialog.bind({});
DialogScrollBody.args = {
  scroll: 'body',
};

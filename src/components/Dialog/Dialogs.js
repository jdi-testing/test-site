import React from 'react';
import AlertDialog from "./AlertDialog";
import SimpleDialogDemo from "./SimpleDialog";
import FormDialog from "./FormDialog";
import ScrollDialog from "./ScrollableDialog";
import ConfirmationDialog from "./ListItemsDialog";


export default function Dialogs(...args) {
  return (
    <div>
      <h1>Dialog</h1>
      <h2>Simple dialog</h2>
      <SimpleDialogDemo id={"simpleDialog"} />
      <h2>Alert</h2>
      <AlertDialog id={"alertDialog"}/>
      <h2>Form dialogs</h2>
      <FormDialog id={"formDialog"} />
      <h2>Confirmation dialog</h2>
      <ConfirmationDialog id={"listDialog"} />
      <h2>Scrollable dialog</h2>
      <ScrollDialog id={"scrollDialog"} />

    </div>
  );
}
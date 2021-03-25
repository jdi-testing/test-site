import React from 'react';
import Switch from '@material-ui/core/Switch';
import SwitchesGroup from "./GroupSwitches";

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <h1>Switch</h1>
      <h2>Basic switches</h2>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <h2>Switches with FormGroup</h2>
      <SwitchesGroup id={"groupSwitches"} />
    </div>
  );
}
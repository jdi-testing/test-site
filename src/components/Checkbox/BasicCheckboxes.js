import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function BasicCheckboxes() {
  const [checked, setChecked] = React.useState([true, true]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <div>
      <Checkbox
        checked={checked[0]}
        onChange={handleChange2}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Checkbox
        color="primary"
        checked={checked[1]}
        onChange={handleChange3}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
      <Checkbox
        checked={checked[0] && checked[1]}
        indeterminate={checked[0] !== checked[1]}
        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
        onChange={handleChange1}
      />
      <Checkbox
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <Checkbox
        defaultChecked
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
      />
    </div>
  );
}

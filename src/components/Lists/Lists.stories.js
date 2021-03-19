import React from 'react';

import Lists from './Lists';
import SimpleList from './SimpleList';
import CheckboxList from './CheckboxList';
import PinnedSubheaderList from './PinnedSubheaderList';

export default {
  title: 'Material Ui/Data Display/Lists',
  component: Lists,
};

const Template = args => <Lists {...args} />;

export const Default = Template.bind({});

export const Simple_List = (args) => <SimpleList {...args} onClick={() => console.log('Simple list item is selected')}>Simple List</SimpleList>;

export const Checkbox_List = (args) => <CheckboxList {...args} onClick={() => console.log('Checkbox list item is selected')}>Checkbox List</CheckboxList>;

export const Pinned_Subheader_List = (args) => <PinnedSubheaderList {...args} onClick={() => console.log('Pinned subheader list item is selected')}>Pinned Subheader List</PinnedSubheaderList>;

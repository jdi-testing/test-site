import React from 'react';
import ClickAwayListner from './ClickAwayListner';
import Portal from './Portal';

export default {
    title: 'Material Ui/ClickAwayListner',
    component: ClickAwayListner,
  };

  const Template = args => <ClickAwayListner {...args} />;
  const TemplatePortal = args => <Portal {...args} />;

  export const Default = Template.bind({});
  export const PortalExample = TemplatePortal.bind({});


import React from 'react';
import ClickAwayListener from './ClickAwayListener';
import Portal from './Portal';

export default {
    title: 'Material Ui/Utils/Click Away Listener',
    component: ClickAwayListener,
  };

  const Template = args => <ClickAwayListener {...args} />;
  const TemplatePortal = args => <Portal {...args} />;

  export const Default = Template.bind({});
  export const PortalExample = TemplatePortal.bind({});


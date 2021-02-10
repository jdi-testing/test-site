import React from 'react';
import TabPanel from './TabPanel';
import DisabledTab from './DisabledTab';
import ScrollableTab from './ScrollableTab';
import PreventScrollButtons from './PreventScrollButtons';
import VerticalTab from './VerticalTab';

export default {
  title: 'Material Ui/Navigation/Tabs',
  component: TabPanel,
};

const Template = args => <TabPanel {...args} />;
const TemplateDisabledTab = args => <DisabledTab {...args} />;
const TemplateScrollableTab = args => <ScrollableTab {...args} />;
const TemplatePreventScrollButtons = args => <PreventScrollButtons {...args} />;
const TemplateVerticalTab = args => <VerticalTab {...args} />;

export const Default = Template.bind({});
export const DisabledTabExample = TemplateDisabledTab.bind({});
export const ScrollableTabExample = TemplateScrollableTab.bind({});
export const PreventScrollButtonsExample = TemplatePreventScrollButtons.bind({});
export const VerticalTabExample = TemplateVerticalTab.bind({});

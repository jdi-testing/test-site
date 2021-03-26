import React from 'react';
import SimpleTabs from "./TabPanel";
import ScrollableTabsButtonAuto from "./ScrollableTab";
import ScrollableTabsButtonPrevent from "./PreventScrollButtons";
import VerticalTabs from "./VerticalTab";




export default function Tabs(...args) {
  return (
    <div>
      <h1>Tabs</h1>
      <h2>Simple tabs</h2>
      <SimpleTabs id={"simpleTabs"} />
      <h2>Scrollable tabs</h2>
      <ScrollableTabsButtonAuto id={"scrollableTabs"} />
      <h2>Prevent scroll buttons</h2>
      <ScrollableTabsButtonPrevent id={"preventScrollTabs"} />
      <h2>Vertical tab</h2>
      <VerticalTabs id={"verticalTabs"} />
    </div>
  );
}
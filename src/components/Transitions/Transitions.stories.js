import React from 'react';

import Transitions, {TRANSITIONS} from './Transitions';

export default {
    title: 'Material UI/Utils/Transitions',
    component: Transitions,
};

const TransitionsTemplate = (args) => (
    <Transitions {...args}/>
);

export const CollapseTransition = TransitionsTemplate.bind({});
CollapseTransition.args = {
    transition: TRANSITIONS.COLLAPSE
}

export const FadeTransition = TransitionsTemplate.bind({});
FadeTransition.args = {
    transition: TRANSITIONS.FADE
}

export const GrowTransition = TransitionsTemplate.bind({});
GrowTransition.args = {
    transition: TRANSITIONS.GROW
}

export const SlideTransition = TransitionsTemplate.bind({});
SlideTransition.args = {
    transition: TRANSITIONS.SLIDE
}

export const ZoomTransition = TransitionsTemplate.bind({});
ZoomTransition.args = {
    transition: TRANSITIONS.ZOOM
}

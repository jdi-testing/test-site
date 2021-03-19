import Chips from './Chips';
import Array from './ChipArray';
import Outlined from './OutlinedChips';
import SmallDefault from './SmallDefaultChip';
import SmallOutlined from './SmallOutlinedChip';
import SampleAvatar from './images/1.jpg';

export default {
  title: 'Material Ui/Data Display/Chips',
  component: Chips,
};
export const Default = Chips.bind({});


export const DefaultChip = Chips.bind({});
DefaultChip.args = {
  src: SampleAvatar,
};
export const OutlinedChip = Outlined.bind({});
OutlinedChip.args = {
  src: SampleAvatar,
};
export const ChipArray = Array.bind({});

export const SmallDefaultChip = SmallDefault.bind({});
SmallDefaultChip.args = {
  src: SampleAvatar,
};

export const SmallOutlinedChip = SmallOutlined.bind({});
SmallOutlinedChip.args = {
  src: SampleAvatar,
};

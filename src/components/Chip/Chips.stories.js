import Chips from './Chips';
import Array from './ChipArray';
import Outlined from './OutlinedChips';
import SmallDefault from './SmallDefaultChip';
import SmallOutlined from './SmallOutlinedChip';

export default {
  title: 'Material Ui/Chips',
  component: Chips,
};

export const DefaultChip = Chips.bind({});

export const OutlinedChip = Outlined.bind({});

export const ChipArray = Array.bind({});

export const SmallDefayltChip = SmallDefault.bind({});

export const SmallOutlinedChip = SmallOutlined.bind({});

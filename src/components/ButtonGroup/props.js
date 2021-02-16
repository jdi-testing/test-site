import Button from '../Button/Button'
import ButtonGroup from './ButtonGroup';

const Template = (args) =>
    <ButtonGroup {...args} onClick={() => console.log('ButtonGroup clicked')}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>;

export const ButtonGroupDefaultProps = {
    variant: 'contained',
    color: 'primary',
    children:  <ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button></ButtonGroup>
};


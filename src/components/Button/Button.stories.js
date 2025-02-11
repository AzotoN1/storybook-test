import Button from './Button.vue';
import { fn } from '@storybook/test';

const defaultArgs = {
  borderRadius: '2px',
  disabled: false,
};

const defaultArgTypes = {
  buttonText: { control: 'text' },
  buttonBackground: { control: 'color' },
  colorText: { control: 'color' },
  borderColor: { control: 'color' },
  borderRadius: {
    options: ['2px', '4px', '8px', '16px'],
    control: {
      type: 'select',
    },
  },
  disabled: { control: 'boolean' },
};

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
  args: {
    ...defaultArgs,
    onClick: fn(),
  },
  argTypes: defaultArgTypes,
  tags: ['autodocs']
};


//👇 Reusable render function
const createRenderFunction = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = {
  render: createRenderFunction,
  args: {
    buttonText: 'Primary Button',
    buttonBackground: '#0000FF',
  },
};

export const Secondary = {
  render: createRenderFunction,
  args: {
    buttonText: 'Secondary Button',
    buttonBackground: 'transparent',
    colorText: '#000',
    borderColor: '#000',
  },
};

export const Disabled = {
  render: createRenderFunction,
  args: {
    buttonText: 'Disabled Button',
    buttonBackground: '#3b3b3b',
    disabled: true,
  },
};

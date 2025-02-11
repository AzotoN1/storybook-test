import Header from './Header.vue';
import Button from '../Button/Button.vue';

import { Primary, Secondary } from '../Button/Button.stories';

const defaultArgs = {

};

const defaultArgTypes = {

};

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Header',
  component: Header,
  subcomponents: { Button },
  tags: ['autodocs']
};


//👇 Reusable render function
const createRenderFunction = (args) => ({
  components: { Header, Button },
  setup() {
    return { args };
  },
  template: `
  <Header v-bind="args">
     <Button :buttonText="'asdasdasd'" :buttonBackground="'#cc3333'"></Button>
  </Header>
  `,
});

export const Logged = {
  render: createRenderFunction,
  args: {
    isLogged: true
  },
};


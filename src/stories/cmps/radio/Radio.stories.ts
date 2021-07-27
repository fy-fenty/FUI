// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Radio from './radio.component';

export default {
  title: 'Example/Radio',
  component: Radio,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Radio> = (args: Radio) => ({
  props: args,
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Radio',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Radio',
};

// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Paginator from './paginator.component';

export default {
  title: 'Example/Paginator',
  component: Paginator,
} as Meta;

const Template: Story<Paginator> = (args: Paginator) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  rows: 10,
  data: [1,2,3,4,5,6,7,8,9,0]
};

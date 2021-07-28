// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import TooltipComponent from './tooltip.component';

export default {
  title: 'Example/Tooltip',
  component: TooltipComponent,
} as Meta;

const Template: Story<TooltipComponent> = (args: TooltipComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  msgTips: [{
    title: 'Test',
    message: 'Test tip'
  }],
};

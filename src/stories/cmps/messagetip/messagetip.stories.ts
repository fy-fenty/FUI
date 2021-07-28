// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import MessageTipComponent from './messagetip.component';

export default {
  title: 'Example/MessageTip',
  component: MessageTipComponent,
} as Meta;

const Template: Story<MessageTipComponent> = (args: MessageTipComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  message: "asdasd",
  visible: true,
  messageType: 'success',
};

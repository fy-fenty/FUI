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

export const Success = Template.bind({});
Success.args = {
  message: "success",
  visible: true,
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: "error",
  visible: true,
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: "warning",
  visible: true,
  type: 'warning',
};

export const Reminder = Template.bind({});
Reminder.args = {
  message: "reminder",
  visible: true,
  type: 'reminder',
};

export const ReminderWithTitle = Template.bind({});
ReminderWithTitle.args = {
  title: 'title',
  message: "reminder",
  visible: true,
  type: 'reminder',
};

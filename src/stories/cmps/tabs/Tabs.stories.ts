import { Story, Meta } from '@storybook/angular/types-6-0';

import TabsComponent from './tabs.component';

export default {
  title: 'Example/Tabs',
  component: TabsComponent
} as Meta;

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular'
import { CommonModule } from '@angular/common';
import { TabComponent } from '../../cmps/tabs/tabs.component';
import TabsComponent from '../../cmps/tabs/tabs.component';
import TabsScreen from './tabs.screen';

export default {
  component: TabsScreen,
  title: 'Demo/Tabs',
  decorators: [
    moduleMetadata({
      declarations: [TabsComponent, TabComponent],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story<TabsScreen> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

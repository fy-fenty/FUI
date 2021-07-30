import { Story, Meta } from '@storybook/angular/types-6-0';

import AccordionComponent from './accordion.component';

export default {
  title: 'Example/Accordion',
  component: AccordionComponent
} as Meta;

const Template: Story<AccordionComponent> = (args: AccordionComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  headerLabel: 'headerLabel',
  headerIcon: 'icon',
  expanded: true
};

export const DefaultWithTips = Template.bind({});
DefaultWithTips.args = {
  headerLabel: 'headerLabel',
  tips: 'tips',
  headerIcon: 'icon',
  expanded: true
};

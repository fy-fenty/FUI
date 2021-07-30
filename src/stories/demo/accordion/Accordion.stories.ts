// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular'
import { CommonModule } from '@angular/common';
import AccordionComponent from '../../cmps/accordion/accordion.component';
import AccordionScreen from './accordion.screen';

export default {
  component: AccordionScreen,
  title: 'Demo/Accordion',
  decorators: [
    moduleMetadata({
      declarations: [AccordionComponent],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story<AccordionScreen> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

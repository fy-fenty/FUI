// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular'
import { CommonModule } from '@angular/common';
import PaginatorComponent from '../../cmps/paginator/paginator.component';
import PaginatorScreen from './paginator.screen';

export default {
  component: PaginatorScreen,
  title: 'Demo/Paginator',
  decorators: [
    moduleMetadata({
      declarations: [PaginatorComponent],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story<PaginatorScreen> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

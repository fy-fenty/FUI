// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import PaginatorComponent from './paginator.component';
import ButtonComponent from '../button/button.component';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Example/Paginator',
  component: PaginatorComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<PaginatorComponent> = (args: PaginatorComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  rows: 10,
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3]
};

import { Story, Meta } from '@storybook/angular/types-6-0';

import CarouselComponent from './carousel.component';

export default {
  title: 'Example/Carousel',
  component: CarouselComponent
} as Meta;

const Template: Story<CarouselComponent> = (args: CarouselComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

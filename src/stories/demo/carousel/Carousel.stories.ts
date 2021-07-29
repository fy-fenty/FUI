// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular'
import { CommonModule } from '@angular/common';
import CarouselComponent from '../../cmps/carousel/carousel.component';
import CarouselScreen from './carousel.screen';

export default {
  component: CarouselScreen,
  title: 'Demo/Carousel',
  decorators: [
    moduleMetadata({
      declarations: [CarouselComponent],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story<CarouselScreen> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

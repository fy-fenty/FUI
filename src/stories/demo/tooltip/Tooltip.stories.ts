import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ButtonComponent from '../../cmps/button/button.component';
import TooltipComponent from '../../cmps/tooltip/tooltip.component';
import TooltipScreen from './tooltip.screen';
import MessageTipComponent from 'src/stories/cmps/messagetip/messagetip.component';

export default {
  title: 'Demo/Tooltip',
  component: TooltipScreen,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, TooltipComponent, MessageTipComponent],
      imports: [CommonModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<TooltipScreen> = (args: TooltipScreen) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

import {ComponentProps} from "react";

export type CtaGroupProps = ComponentProps<'div'> & {
  /**
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical',
}
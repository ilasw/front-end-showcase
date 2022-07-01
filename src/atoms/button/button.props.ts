import {ComponentProps} from "react";
import {CtaVariantKeys} from "@/constants/cta-classes";

export type ButtonProps = ComponentProps<'button'> & {
  /**
   * @default: 'black'
   */
  variant?: CtaVariantKeys
}
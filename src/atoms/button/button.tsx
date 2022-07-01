import {FCWithChildren} from "@/types/components-shared";
import classNames from "classnames";
import {CTA_COMMON_CLASSES, CTA_VARIANT_CLASSES} from "@/constants/cta-classes";
import {ButtonProps} from "@/atoms/button/button.props";

export const Button: FCWithChildren<ButtonProps> = (props) => {
  const {children, variant = 'dark', className, ...attrs} = props;

  return <button className={classNames(CTA_COMMON_CLASSES, CTA_VARIANT_CLASSES[variant] ?? '', className)}
                 {...attrs}
  >{children}</button>;
}
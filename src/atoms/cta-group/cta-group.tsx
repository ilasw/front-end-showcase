import {FCWithChildren} from "@/types/components-shared";
import {CtaGroupProps} from "@/atoms/cta-group/cta-group.props";
import classNames from "classnames";

export const CtaGroup: FCWithChildren<CtaGroupProps> = (props) => {
  const {children, className, direction = 'horizontal', ...attrs} = props;
  const flowClasses = direction === 'horizontal' ? 'grid-flow-col auto-cols-max' : 'grid-flow-row auto-rows-max';
  return <div className={classNames("grid gap-4 w-full", flowClasses, className)}
              {...attrs}
  >{children}</div>
}
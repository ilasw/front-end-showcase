import classNames from "classnames";
import {FCWithChildren} from "@/types/components-shared";
import {SiteFooterProps} from "@/components/site-footer/site-footer.props";

export const SiteFooter: FCWithChildren<SiteFooterProps> = (props) => {
  const {children, className, ...attrs} = props;
  return <footer className={classNames(className)}
                 {...attrs}
  >Footer</footer>

}
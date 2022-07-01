import {FCWithChildren} from "@/types/components-shared";
import {FeatureListProps} from "@/components/feature-list/feature-list.props";
import classNames from "classnames";
import {Fragment} from "react";
import {FEATURES_LIST} from "@/constants/contents";

export const FeatureList: FCWithChildren<FeatureListProps> = (props) => {
  const {className, ...attrs} = props;

  return <div className={classNames("py-12", className)}
              {...attrs}>
    <div className="container">
      <div className="text-center">
        <h3 className="mb-4 font-sans text-2xl font-bold tracking-tight">
          Join the vibrant Terra ecosystem
        </h3>
        <h2 className="mb-8 font-sans text-6xl font-black">
          And #LUNAtic<br className="text-6xl text-center box-border"/>community.
        </h2>
        <div className="text-lg tracking-tight leading-7 mx-auto md:max-w-[60%]">
          Terra’s ecosystem is booming. Join the creators, builders, and users of the
          Terra ecosystem to pioneer the future of DeFi &amp; online communities.
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-24 text-center  leading-6">
        {FEATURES_LIST.map((content, i) => <Fragment key={i}>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div
                className="flex-col flex-initial gap-4 p-6 rounded-xl border border-solid border-neutral-300 transition transition-all hover:bg-white hover:border-white hover:bg-white">
              <div
                  className="flex-wrap content-center mb-0 h-full text-base whitespace-pre-wrap"
              >{content.title}</div>
              <div className="flex-1 items-end mt-0 text-center">
                {content.icon}
              </div>
            </div>

          </div>
        </Fragment>)}
      </div>
    </div>
  </div>
}
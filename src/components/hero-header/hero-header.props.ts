import {ComponentProps, ReactElement} from "react";

export type HeroHeaderProps = ComponentProps<'header'>
    & Record<'heading' | 'copy' | 'kicker', string|ReactElement>
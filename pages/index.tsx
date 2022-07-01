import type {NextPage} from 'next'
import Head from 'next/head'
import {Button} from "@/atoms/button/button";
import {CtaGroup} from "@/atoms/cta-group/cta-group";
import {Fragment} from "react";
import {HeroHeader} from "@/components/hero-header/hero-header";
import {SiteFooter} from "@/components/site-footer/site-footer";
import {FeatureList} from "@/components/feature-list/feature-list";

const Home: NextPage = () => {
  return (
      <Fragment>
        <Head><title>Tech showcase 2022 | Catania Web Dev</title></Head>

        <HeroHeader
            heading="Web development technologies showcase"
            kicker="Scopri, impara e sviluppa sulle ultime tecnologie web."
            copy={<Fragment>
              <address className={'inline'}>Isola, Catania,</address>
              <time className={'inline'}>11 Giugno 2022</time>
            </Fragment>}
        >
          <CtaGroup>
            <Button>Scopri il programma</Button>
            <Button variant={'primary'}>Registrati</Button>
          </CtaGroup>
        </HeroHeader>

      </Fragment>
  )
}

export default Home

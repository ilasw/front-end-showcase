import type {NextPage} from 'next'
import Head from 'next/head'
import {Button} from "@/atoms/button/button";
import {CtaGroup} from "@/atoms/cta-group/cta-group";
import {Fragment} from "react";
import {HeroHeader} from "@/components/hero-header/hero-header";

const Home: NextPage = () => {
  return (
      <Fragment>
        <Head><title>Front-end showcase 2022 | Catania Web Dev</title></Head>

        <HeroHeader>
          <CtaGroup>
            <Button>Scopri il programma</Button>
            <Button variant={'primary'}>Registrati</Button>
          </CtaGroup>
        </HeroHeader>

      </Fragment>
  )
}

export default Home

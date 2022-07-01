import type {NextPage} from 'next'
import Head from 'next/head'
import {Fragment} from "react";
import {HeroHeader} from "@/components/hero-header/hero-header";

const Home: NextPage = () => {
  return (
      <Fragment>
        <Head><title>Front-end showcase 2022 | Catania Web Dev</title></Head>

        <HeroHeader />

      </Fragment>
  )
}

export default Home

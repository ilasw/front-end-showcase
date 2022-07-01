import classNames from "classnames";
import {FCWithChildren} from "@/types/components-shared";
import {HeroHeaderProps} from "@/components/hero-header/hero-header.props";

export const HeroHeader: FCWithChildren<HeroHeaderProps> = (props) => {
  const {children, className, ...attrs} = props;
  return <header
      className={classNames("relative flex items-center min-h-[100vh] py-16 leading-6 text-neutral-900", className)}
      {...attrs}
  >
    <div className="mx-auto leading-6 text-black lg:max-w-4xl px-4 lg:px-12">
      <dl className="grid grid-cols-2 gap-y-6 gap-x-10 mx-0 mt-10 mb-0 text-black lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center">
        <div className="text-left">
          <dt className="font-mono text-sm text-blue-600">Dove</dt>
          <dd className="mx-0 mt-px mb-0 text-2xl font-semibold tracking-tight leading-10 text-blue-900"
          >Catania
          </dd>
        </div>
        <div className="text-left">
          <dt className="font-mono text-sm text-blue-600">Quando</dt>
          <dd className="mx-0 mt-px mb-0 text-2xl font-semibold tracking-tight leading-10 text-blue-900">
            1-2 Ott 2022
          </dd>
        </div>
      </dl>
      <h1
          className="m-0 mt-8 font-sans text-5xl font-bold tracking-tighter text-blue-600 sm:text-6xl sm:leading-none"
      >
    <span className="text-6xl border-gray-200 border-solid sr-only box-border"
    >Tech showcase 2022 - </span
    >Una conferenza per lo sviluppo front-end fatta da chi sviluppa.
      </h1>
      <div className="mt-6 font-sans text-xl tracking-tight leading-10 text-blue-900">
        <p className="m-0 text-2xl leading-10">
          Front-end Showcase vuole essere la conferenza che mette insieme le aziende migliori del territorio
          per portare sul palco le più innovative tecnologie in uso.
        </p>
        <p className="mx-0 mt-6 mb-0 leading-10"><strong className={'text-2xl font-semibold'}>📅 Format</strong><br/>
          <strong>Mattina:</strong> uno speaker per azienda tratterà una tecnologia
          di punta del suo team.<br/>
          <strong>Pomeriggio:</strong> si metterà in pratica quanto spiegato in un workshop pratico.
        </p>
        <p className="mx-0 mt-6 mb-0 leading-10"><strong className={'text-2xl font-semibold'}>🙋‍ A chi è
          rivolta</strong><br/>
          Studenti, lavoratori ed appassionati del front-end sul web
        </p>
        <p className="mx-0 mt-6 mb-0 leading-10"><strong className={'text-2xl font-semibold'}>🎯 Obiettivi</strong><br/>
          <ul className={'list-disc pl-5'}>
            <li>Far conoscere nuove tecnologie ed approcci pratici imparando da chi ci lavora davvero;</li>
            <li>Conoscere realtà nel territorio e fare networking;</li>
            <li>Fare da ponte tra appassionati e laureandi con le aziende.</li>
          </ul>
        </p>
      </div>
      <a className="inline-flex hover:bg-blue-900 transition-colors justify-center p-4 mt-10 text-base font-semibold text-white bg-blue-600 rounded-2xl cursor-pointer"
         href="https://forms.gle/MgZc476DzPHBh6Fs5">{'> Sono una azienda interessata'}</a>
    </div>
  </header>
}
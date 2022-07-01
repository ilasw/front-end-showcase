export const CTA_COMMON_CLASSES = `flex-inline justify-center items-center py-6 px-12 max-w-full font-sans text-lg
font-medium leading-6 text-center text-white rounded-xl cursor-pointer transition-all shadow-sm hover:shadow-lg hover:shadow-neutral-500/50`;

export const CTA_VARIANT_CLASSES = {
  dark: `text-white bg-neutral-900 hover:text-yellow-200 hover:opacity-100`,
  primary: `text-white bg-blue-700 hover:opacity-100`
} as const;

export type CtaVariantKeys = keyof typeof CTA_VARIANT_CLASSES;
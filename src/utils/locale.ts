export const getLocaleFromAstro = (Astro: { url: URL }): 'es' | 'en' => {
  const base = import.meta.env.BASE_URL
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const pathname = Astro.url.pathname
  const isEnglish = pathname.startsWith(`${normalizedBase}en`)

  return isEnglish ? 'en' : 'es'
}

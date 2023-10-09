import day from 'dayjs'

const BASE_URL = "https://www.primarycalculator.com"
const pages = [
  '',
  'about/',
  'contact/',
  'blog/',
  'privacy-policy/',
  'terms-conditions/',
  'cookies-policy/',
  'disclaimer/',
  'calculator/addition/',
  'calculator/substraction/',
  'calculator/multiplication/',
  'calculator/division/',
  'calculator/fraction/',
  'calculator/percentage/',
  'calculator/binary/',
  'calculator/advanced/'
]

const render = (pages) => {
  return `
  <?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${pages.map(page => `
      <url>
        <loc>${BASE_URL}/${page}</loc>
        <lastmod>${day().format('YYYY-MM-DD')}</lastmod>
        <priority>${page.length === 0 ? '1.00' : '0.85'}</priority>
      </url>
    `).join("\n")}
  </urlset>
  `
}

export function get(req, res, next) {
  res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`)
  res.setHeader('Content-Type', 'application/rss+xml');

  const sitemap = render(pages)

  res.end(sitemap)
}
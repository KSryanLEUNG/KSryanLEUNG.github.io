// ── Travel data ──────────────────────────────────────────────────────────────
// Each entry = one city you've visited.
//
//  • country  : MUST match the map's country name so the country gets highlighted.
//               Names used here: "China", "Japan", "South Korea", "United Kingdom", "Indonesia".
//               (See public/data/countries-110m.json -> properties.name)
//  • lat/lon  : decimal degrees. Look up on Google Maps (right-click → copy coords).
//  • cover    : the thumbnail shown on hover. Put images in public/travel/<id>/.
//  • photos   : gallery shown in the detail popup when you click the dot.
//  • home     : optional; set true for your home city (shown with a gold marker).
//  • blurb    : optional { en, zh } intro shown under the city; omit to show none.
//
// Order here = display order. Home is pinned first; the rest run newest → oldest.
//
// To add real photos: drop image files into public/travel/<id>/ and update the
// `cover` and `photos` paths below. The .svg files there now are placeholders.
export interface Place {
  id: string;
  city: { en: string; zh: string };
  country: string; // map name (for country highlight)
  countryLabel: { en: string; zh: string };
  lat: number;
  lon: number;
  date: { en: string; zh: string };
  blurb?: { en: string; zh: string }; // optional short intro; shown only when set
  cover: string;
  photos: string[];
  home?: boolean;
}

const ph = (id: string, n = 1) => ({
  cover: `/travel/${id}/cover.svg`,
  photos: Array.from({ length: n }, (_, i) => (i === 0 ? `/travel/${id}/cover.svg` : `/travel/${id}/${i}.svg`)),
});

export const places: Place[] = [
  {
    id: 'hong-kong',
    city: { en: 'Hong Kong', zh: '香港' },
    country: 'China',
    countryLabel: { en: 'Hong Kong, China', zh: '中國香港' },
    lat: 22.3193,
    lon: 114.1694,
    date: { en: 'Home', zh: '家鄉' },
    ...ph('hong-kong', 2),
    home: true,
  },
  {
    id: 'seoul',
    city: { en: 'Seoul', zh: '首爾' },
    country: 'South Korea',
    countryLabel: { en: 'South Korea', zh: '韓國' },
    lat: 37.5665,
    lon: 126.978,
    date: { en: 'Oct 2026', zh: '2026年10月' },
    ...ph('seoul', 2),
  },
  {
    id: 'xinjiang',
    city: { en: 'Xinjiang', zh: '新疆' },
    country: 'China',
    countryLabel: { en: 'China', zh: '中國' },
    // Marker placed at Ürümqi, the regional capital.
    lat: 43.8256,
    lon: 87.6168,
    date: { en: 'Jul 2026', zh: '2026年7月' },
    ...ph('xinjiang', 2),
  },
  {
    id: 'tokyo',
    city: { en: 'Tokyo', zh: '東京' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 35.6762,
    lon: 139.6503,
    date: { en: 'Mar 2026', zh: '2026年3月' },
    ...ph('tokyo', 2),
  },
  {
    id: 'izu',
    city: { en: 'Izu', zh: '伊豆' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 34.9755,
    lon: 138.9466,
    date: { en: 'Mar 2026', zh: '2026年3月' },
    ...ph('izu', 2),
  },
  {
    id: 'hakone',
    city: { en: 'Hakone', zh: '箱根' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 35.2324,
    lon: 139.1069,
    date: { en: 'Mar 2026', zh: '2026年3月' },
    ...ph('hakone', 2),
  },
  {
    id: 'osaka',
    city: { en: 'Osaka', zh: '大阪' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 34.6937,
    lon: 135.5023,
    date: { en: 'Dec 2025', zh: '2025年12月' },
    ...ph('osaka', 2),
  },
  {
    id: 'kyoto',
    city: { en: 'Kyoto', zh: '京都' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 35.0116,
    lon: 135.7681,
    date: { en: 'Dec 2025', zh: '2025年12月' },
    ...ph('kyoto', 2),
  },
  {
    id: 'beijing',
    city: { en: 'Beijing', zh: '北京' },
    country: 'China',
    countryLabel: { en: 'China', zh: '中國' },
    lat: 39.9042,
    lon: 116.4074,
    date: { en: 'Jun 2025', zh: '2025年6月' },
    ...ph('beijing', 2),
  },
  {
    id: 'shanghai',
    city: { en: 'Shanghai', zh: '上海' },
    country: 'China',
    countryLabel: { en: 'China', zh: '中國' },
    lat: 31.2304,
    lon: 121.4737,
    date: { en: 'Jun 2025', zh: '2025年6月' },
    ...ph('shanghai', 2),
  },
  {
    id: 'london',
    city: { en: 'London', zh: '倫敦' },
    country: 'United Kingdom',
    countryLabel: { en: 'England, UK', zh: '英國英格蘭' },
    lat: 51.5074,
    lon: -0.1278,
    date: { en: 'May 2025', zh: '2025年5月' },
    ...ph('london', 2),
  },
  {
    id: 'edinburgh',
    city: { en: 'Edinburgh', zh: '愛丁堡' },
    country: 'United Kingdom',
    countryLabel: { en: 'Scotland, UK', zh: '英國蘇格蘭' },
    lat: 55.9533,
    lon: -3.1883,
    date: { en: 'May 2025', zh: '2025年5月' },
    ...ph('edinburgh', 2),
  },
  {
    id: 'scottish-highlands',
    city: { en: 'Scottish Highlands', zh: '蘇格蘭高地' },
    country: 'United Kingdom',
    countryLabel: { en: 'Scotland, UK', zh: '英國蘇格蘭' },
    lat: 57.12,
    lon: -4.71,
    date: { en: 'May 2025', zh: '2025年5月' },
    ...ph('scottish-highlands', 2),
  },
  {
    id: 'guangzhou',
    city: { en: 'Guangzhou', zh: '廣州' },
    country: 'China',
    countryLabel: { en: 'China', zh: '中國' },
    lat: 23.1291,
    lon: 113.2644,
    date: { en: 'Apr 2025', zh: '2025年4月' },
    ...ph('guangzhou', 2),
  },
  {
    id: 'hokkaido',
    city: { en: 'Hokkaido', zh: '北海道' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 43.0618,
    lon: 141.3545,
    date: { en: 'Jan 2025', zh: '2025年1月' },
    ...ph('hokkaido', 2),
  },
  {
    id: 'bali',
    city: { en: 'Bali', zh: '峇里島' },
    country: 'Indonesia',
    countryLabel: { en: 'Indonesia', zh: '印尼' },
    lat: -8.6705,
    lon: 115.2126,
    date: { en: 'Aug & Sep 2024', zh: '2024年8、9月' },
    ...ph('bali', 2),
  },
  {
    id: 'shikoku',
    city: { en: 'Shikoku', zh: '四國' },
    country: 'Japan',
    countryLabel: { en: 'Shikoku, Japan', zh: '日本四國' },
    lat: 33.75,
    lon: 133.5,
    date: { en: 'Sep 2024', zh: '2024年9月' },
    ...ph('shikoku', 2),
  },
  {
    id: 'xining',
    city: { en: 'Xining', zh: '西寧' },
    country: 'China',
    countryLabel: { en: 'China', zh: '中國' },
    lat: 36.6171,
    lon: 101.7782,
    date: { en: 'Apr 2024', zh: '2024年4月' },
    ...ph('xining', 2),
  },
];

export const travelCopy = {
  title: { en: 'Travel', zh: '旅遊足跡' },
  subtitle: {
    en: 'Places I have been. Spin the globe, pick a destination, and scroll to read more.',
    zh: '我去過的地方。轉動地球、選一個地點，再向下滾動閱讀更多。',
  },
  stats: {
    countries: { en: 'Countries', zh: '國家／地區' },
    cities: { en: 'Cities', zh: '城市' },
  },
  back: { en: '← Back to home', zh: '← 返回首頁' },
  listTitle: { en: 'All destinations', zh: '所有地區' },
  hint: {
    en: 'Drag to spin · Ctrl/⌘ + scroll or pinch to zoom · click a point or destination to fly there.',
    zh: '拖曳旋轉 · Ctrl/⌘ + 滾輪或雙指縮放 · 點擊地點或清單即可前往。',
  },
  scrollHint: { en: 'Scroll to explore', zh: '向下滾動探索' },
  empty: { en: 'No photos yet.', zh: '尚未有照片。' },
};

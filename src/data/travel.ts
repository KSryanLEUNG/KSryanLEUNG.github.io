// ── Travel data ──────────────────────────────────────────────────────────────
// Each entry = one city you've visited.
//
//  • country  : MUST match the map's country name so the country gets highlighted.
//               Names used here: "China", "Japan", "United Kingdom", "Indonesia".
//               (See public/data/countries-110m.json -> properties.name)
//  • lat/lon  : decimal degrees. Look up on Google Maps (right-click → copy coords).
//  • cover    : the thumbnail shown on hover. Put images in public/travel/<id>/.
//  • photos   : gallery shown in the detail popup when you click the dot.
//  • home     : optional; set true for your home city (shown with a gold marker).
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
  blurb: { en: string; zh: string };
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
    blurb: { en: 'Home base — where it all started.', zh: '我的家，一切的起點。' },
    ...ph('hong-kong', 2),
    home: true,
  },
  {
    id: 'beijing',
    city: { en: 'Beijing', zh: '北京' },
    country: 'China',
    countryLabel: { en: 'China', zh: '中國' },
    lat: 39.9042,
    lon: 116.4074,
    date: { en: '', zh: '' },
    blurb: { en: 'The capital — history at every turn.', zh: '首都，處處是歷史。' },
    ...ph('beijing', 2),
  },
  {
    id: 'yongzhou',
    city: { en: 'Yongzhou, Hunan', zh: '湖南永州' },
    country: 'China',
    countryLabel: { en: 'China', zh: '中國' },
    lat: 26.42,
    lon: 111.608,
    date: { en: '', zh: '' },
    blurb: { en: 'Riverside town in southern Hunan.', zh: '湖南南部的江畔小城。' },
    ...ph('yongzhou', 2),
  },
  {
    id: 'shanghai',
    city: { en: 'Shanghai', zh: '上海' },
    country: 'China',
    countryLabel: { en: 'China', zh: '中國' },
    lat: 31.2304,
    lon: 121.4737,
    date: { en: '', zh: '' },
    blurb: { en: 'Skyline by the Huangpu.', zh: '黃浦江畔的都市天際線。' },
    ...ph('shanghai', 2),
  },
  {
    id: 'xining',
    city: { en: 'Xining', zh: '西寧' },
    country: 'China',
    countryLabel: { en: 'China', zh: '中國' },
    lat: 36.6171,
    lon: 101.7782,
    date: { en: '', zh: '' },
    blurb: { en: 'Gateway to the Tibetan plateau.', zh: '通往青藏高原的門戶。' },
    ...ph('xining', 2),
  },
  {
    id: 'tokyo',
    city: { en: 'Tokyo', zh: '東京' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 35.6762,
    lon: 139.6503,
    date: { en: '', zh: '' },
    blurb: { en: 'Neon, ramen, and endless streets.', zh: '霓虹、拉麵，與走不完的街道。' },
    ...ph('tokyo', 2),
  },
  {
    id: 'osaka',
    city: { en: 'Osaka', zh: '大阪' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 34.6937,
    lon: 135.5023,
    date: { en: '', zh: '' },
    blurb: { en: 'The kitchen of Japan.', zh: '日本的廚房。' },
    ...ph('osaka', 2),
  },
  {
    id: 'kyoto',
    city: { en: 'Kyoto', zh: '京都' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 35.0116,
    lon: 135.7681,
    date: { en: '', zh: '' },
    blurb: { en: 'Temples, shrines, and old streets.', zh: '寺廟、神社與古老街道。' },
    ...ph('kyoto', 2),
  },
  {
    id: 'izu',
    city: { en: 'Izu', zh: '伊豆' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 34.9755,
    lon: 138.9466,
    date: { en: '', zh: '' },
    blurb: { en: 'Coastal hot springs and sea views.', zh: '海岸溫泉與海景。' },
    ...ph('izu', 2),
  },
  {
    id: 'hakone',
    city: { en: 'Hakone', zh: '箱根' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 35.2324,
    lon: 139.1069,
    date: { en: '', zh: '' },
    blurb: { en: 'Onsen town with views of Mt. Fuji.', zh: '能望見富士山的溫泉鄉。' },
    ...ph('hakone', 2),
  },
  {
    id: 'hokkaido',
    city: { en: 'Hokkaido', zh: '北海道' },
    country: 'Japan',
    countryLabel: { en: 'Japan', zh: '日本' },
    lat: 43.0618,
    lon: 141.3545,
    date: { en: '', zh: '' },
    blurb: { en: 'Snow, seafood, and wide open land.', zh: '雪景、海鮮與遼闊大地。' },
    ...ph('hokkaido', 2),
  },
  {
    id: 'london',
    city: { en: 'London', zh: '倫敦' },
    country: 'United Kingdom',
    countryLabel: { en: 'United Kingdom', zh: '英國' },
    lat: 51.5074,
    lon: -0.1278,
    date: { en: '', zh: '' },
    blurb: { en: 'The river, the bridges, the rain.', zh: '泰晤士河、橋樑與細雨。' },
    ...ph('london', 2),
  },
  {
    id: 'scottish-highlands',
    city: { en: 'Scottish Highlands', zh: '蘇格蘭高地' },
    country: 'United Kingdom',
    countryLabel: { en: 'United Kingdom', zh: '英國' },
    lat: 57.12,
    lon: -4.71,
    date: { en: '', zh: '' },
    blurb: { en: 'Lochs, glens, and dramatic skies.', zh: '湖泊、峽谷與壯麗天空。' },
    ...ph('scottish-highlands', 2),
  },
  {
    id: 'edinburgh',
    city: { en: 'Edinburgh', zh: '愛丁堡' },
    country: 'United Kingdom',
    countryLabel: { en: 'United Kingdom', zh: '英國' },
    lat: 55.9533,
    lon: -3.1883,
    date: { en: '', zh: '' },
    blurb: { en: 'Castle on the hill, old-town charm.', zh: '山丘上的城堡，舊城的魅力。' },
    ...ph('edinburgh', 2),
  },
  {
    id: 'bali',
    city: { en: 'Bali', zh: '峇里島' },
    country: 'Indonesia',
    countryLabel: { en: 'Indonesia', zh: '印尼' },
    lat: -8.6705,
    lon: 115.2126,
    date: { en: '', zh: '' },
    blurb: { en: 'Beaches, rice terraces, and sunsets.', zh: '海灘、梯田與日落。' },
    ...ph('bali', 2),
  },
];

export const travelCopy = {
  title: { en: 'Travel', zh: '旅遊足跡' },
  subtitle: {
    en: 'Places I have been. Hover a dot for a preview, click to see more.',
    zh: '我去過的地方。將滑鼠移到綠點上預覽，點擊查看更多。',
  },
  stats: {
    countries: { en: 'Countries', zh: '國家／地區' },
    cities: { en: 'Cities', zh: '城市' },
  },
  back: { en: '← Back to home', zh: '← 返回首頁' },
  hint: {
    en: 'Tip: scroll to zoom, drag to pan.',
    zh: '提示：滾輪縮放，拖曳平移。',
  },
  empty: { en: 'No photos yet.', zh: '尚未有照片。' },
};

import { getCollection, type CollectionEntry } from 'astro:content';
import { nav } from '../data/content';

export type Post = CollectionEntry<'blog'>;

// Newest first. Drafts only appear in `npm run dev`.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Latin text is counted in words, CJK text in characters (~200 words or
// ~400 characters per minute).
export function readingMinutes(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~\-\[\]()!|]/g, ' ');
  const cjk = (text.match(/[㐀-鿿豈-﫿]/g) || []).length;
  const words = (text.replace(/[㐀-鿿豈-﫿]/g, ' ').match(/[A-Za-z0-9]+/g) || []).length;
  return Math.max(1, Math.round(words / 200 + cjk / 400));
}

export function formatDate(date: Date) {
  // Dates are calendar dates from frontmatter; format in UTC so they never shift.
  return {
    en: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }),
    zh: `${date.getUTCFullYear()}年${date.getUTCMonth() + 1}月${date.getUTCDate()}日`,
  };
}

export const blogCopy = {
  title: nav.blog,
  subtitle: {
    en: 'Notes on agentic AI, LLM applications, and what I learn building them.',
    zh: '關於代理式 AI、LLM 應用，以及開發過程中所學的筆記。',
  },
  empty: { en: 'The first post is on its way.', zh: '第一篇文章即將推出。' },
  latest: { en: 'Latest writing', zh: '最新文章' },
  all: { en: 'All posts →', zh: '所有文章 →' },
  back: { en: '← All posts', zh: '← 所有文章' },
  minRead: { en: 'min read', zh: '分鐘閱讀' },
  updated: { en: 'Updated', zh: '更新於' },
  // The language a post is written in, labelled in the reader's UI language.
  langName: {
    en: { en: 'English', zh: '英文' },
    zh: { en: 'Chinese', zh: '中文' },
  },
  tagged: { en: 'Tagged', zh: '標籤' },
  rss: { en: 'RSS feed', zh: 'RSS 訂閱' },
};

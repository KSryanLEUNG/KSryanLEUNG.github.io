import rss from '@astrojs/rss';
import { getPosts, blogCopy } from '../lib/blog';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Ka Sing (Ryan) Leung — Blog',
    description: blogCopy.subtitle.en,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/blog/${post.slug}/`,
    })),
  });
}

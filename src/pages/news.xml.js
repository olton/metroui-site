import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const news = await getCollection('news');
    return rss({
        title: 'Metro UI’s News',
        description: 'Metro UI - Impressive components library for Web',
        site: context.site,
        items: news.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/news/`,
        })),
    });
}
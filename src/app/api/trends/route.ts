import { connectDB } from '@/lib/db';
import { fetchTrendingTopics, fetchRelatedMedia, generateBlogPost } from '@/lib/backendBot';
import { Blog } from '@/models/Blog';
import slugify from 'slugify';

export async function GET() {
  await connectDB();
  const topics = await fetchTrendingTopics();

  for (const topic of topics.slice(0, 3)) {
    const media = await fetchRelatedMedia(topic);
    const content = await generateBlogPost(topic, media);
    const meta = content && typeof content === 'string'
      ? content.match(/<meta name="description" content="([^"]+)"/)?.[1] || ''
      : '';

    await Blog.create({
      title: topic,
      slug: slugify(topic.toLowerCase()),
      meta,
      media,
      content,
    });
  }

  return Response.json({ status: 'success' });
}

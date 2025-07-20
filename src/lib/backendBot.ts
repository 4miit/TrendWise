import googleTrends from 'google-trends-api';
import axios from 'axios';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function fetchTrendingTopics(): Promise<string[]> {
  const results = await googleTrends.dailyTrends({
    geo: 'US',
  });
  const parsed = JSON.parse(results);
  const trends = parsed.default.trendingSearchesDays[0].trendingSearches;
  return trends.map((t: any) => t.title.query);
}

export async function fetchRelatedMedia(topic: string) {
  const res = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
    params: {
      key: process.env.GOOGLE_SEARCH_API_KEY,
      cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
      q: topic,
    },
  });

  const images = res.data.items
    .filter((item: any) => item.pagemap?.cse_image)
    .map((item: any) => item.pagemap.cse_image[0].src);

  return images.slice(0, 3); // limit to top 3
}

export async function generateBlogPost(topic: string, media: string[]) {
  const messages: import("openai/resources/chat/completions").ChatCompletionMessageParam[] = [
    { role: 'system', content: 'You are a professional SEO writer.' },
    {
      role: 'user',
      content: `Write an SEO-optimized blog post about "${topic}" with HTML tags, H1-H3, a meta description, and references to the following images:\n${media.join('\n')}`,
    },
  ];

  const result = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
  });

  return result.choices[0].message.content;
}

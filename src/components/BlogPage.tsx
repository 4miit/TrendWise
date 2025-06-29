// components/BlogPage.tsx
import Image from "next/image";

const sampleArticles = [
  {
    id: 1,
    title: "AI Takes Over Search: How Gemini and ChatGPT are Redefining SEO",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    description: "Discover how AI-driven content is reshaping SEO and dominating Google's SERPs."
  },
  {
    id: 2,
    title: "10 Tips to Boost Your Productivity with ChatGPT",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    description: "Learn how to use AI tools to automate tasks and boost your daily efficiency."
  },
  {
    id: 3,
    title: "Top 5 JavaScript Frameworks to Watch in 2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
    description: "Stay ahead of the curve by learning the most in-demand JS frameworks in the coming year."
  },
  {
    id: 4,
    title: "Google Trends vs Twitter: Where Should You Look for Viral Topics?",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    description: "We compare Google Trends and Twitter for finding real-time content ideas."
  },
  {
    id: 5,
    title: "How to Train Your Own AI Writer Using OpenAI APIs",
    category: "AI Tools",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    description: "Build a custom article generator and power your own AI blog platform."
  },
  {
    id: 6,
    title: "UX Secrets: What Makes a Blog Homepage Truly Engaging?",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    description: "Design principles and layout tips to keep readers scrolling and exploring."
  }
];

export function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-black font-[cursive]">
      <header className="bg-white/90 border-b border-gray-200 p-6 shadow-sm sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">TrendWise</h1>
          <nav className="space-x-6">
            <a href="#" className="text-blue-700 font-bold hover:underline">Home</a>
            <a href="#" className="text-blue-700 font-bold hover:underline">Blog</a>
            <a href="#" className="text-blue-700 font-bold hover:underline">About</a>
            <a href="#" className="text-blue-700 font-bold hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-4 text-blue-900">🔥 Trending Articles</h2>
          <p className="text-gray-600 mb-12 max-w-2xl text-lg">
            Dive into AI-generated insights curated from the latest trends on the web.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {sampleArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-500 uppercase font-semibold tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2 text-blue-900">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 p-6 mt-16">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          © 2025 TrendWise. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

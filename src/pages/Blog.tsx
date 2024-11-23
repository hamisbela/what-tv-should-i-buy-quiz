import React from 'react';
import { Calendar } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'How to Choose the Perfect TV Size for Your Room',
      excerpt: 'Learn the optimal viewing distance and TV size calculations for any room size...',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'OLED vs QLED: Which Technology is Right for You?',
      excerpt: 'A detailed comparison of the two leading TV display technologies...',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Gaming on 4K TVs: What You Need to Know',
      excerpt: 'Essential features and settings for the ultimate gaming experience...',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">TV Guide Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay up to date with the latest TV technology, reviews, and buying guides.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
                <a href="#">{post.title}</a>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
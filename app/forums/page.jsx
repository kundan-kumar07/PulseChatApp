"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

const forumTopics = [
  {
    title: "Python",
    description: "Let's discuss everything about Python — from automation to AI.",
    image: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png",
    slug: "/forum/python",
  },
  {
    title: "JavaScript",
    description: "Explore JS tricks, frameworks, and all things web development.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    slug: "/forum/javascript",
  },
  {
    title: "C++",
    description: "Get help on STL, DSA, and competitive programming with C++.",
    image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    slug: "/forum/cpp",
  },
  {
    title: "AI & ML",
    description: "Dive into machine learning, neural nets, and research topics.",
    image: "https://cdn-icons-png.flaticon.com/512/7398/7398675.png",
    slug: "/forum/ai-ml",
  },
];

export default function ForumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          🗣️ Welcome to the Forum
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Join discussions, share knowledge, and connect with developers like you.
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {forumTopics.map((topic) => (
          <Link key={topic.slug} href={topic.slug}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 cursor-pointer flex flex-col items-center text-center">
              <Image
                src={topic.image}
                alt={topic.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {topic.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{topic.description}</p>
              <Button className={'mt-4'}>Discuss Now</Button>
            
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

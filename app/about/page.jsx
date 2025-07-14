export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">👋 About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-8">
          Welcome to our community-driven forum where students and developers
          collaborate, learn, and grow. Whether you're into C++, Python, JavaScript,
          or diving deep into AI & ML — we’ve built a space for you to thrive.
        </p>

        <p className="text-md text-gray-600 dark:text-gray-400 text-center">
          Built with passion, powered by Next.js, Clerk, Stream Chat, and good ol’ chai ☕.
        </p>

        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ and chai in India 🇮🇳
        </footer>
      </div>
    </main>
  );
}

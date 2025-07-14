import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 h-screen flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side: Hero & Plans */}
        <div className="flex-1 flex flex-col justify-center gap-10 text-center md:text-left">
          {/* Hero */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Welcome to <span className="text-blue-600 dark:text-blue-400">PulseChat </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              Connect, share, and create with amazing people. Spark creativity with every conversation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/get-started">
                <Button className="px-6 py-3 text-lg shadow-md hover:shadow-lg transition">
                  Join Now
                </Button>
              </Link>
              <Link href="/forums">
                <Button variant="outline" className="px-6 py-3 text-lg border-gray-300 dark:border-gray-600">
                  Explore Forum
                </Button>
              </Link>
            </div>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up">
            <Card className="cursor-pointer hover:ring-2 ring-blue-400 transition shadow-md hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-lg text-gray-900 dark:text-white">
                  Free
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 font-bold text-2xl mb-2">$0</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>✅ Basic Access</li>
                  <li>✅ Public Forums</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:ring-2 ring-blue-500 border-blue-600 border-2 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 transition transform hover:scale-105 shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-lg text-gray-900 dark:text-white">
                  Pro
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-800 dark:text-white font-bold text-2xl mb-2">$9</p>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>✅ Private Groups</li>
                  <li>✅ AI Chat Tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:ring-2 ring-blue-400 transition shadow-md hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-lg text-gray-900 dark:text-white">
                  Premium
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 font-bold text-2xl mb-2">$19</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>✅ Team Collaboration</li>
                  <li>✅ Custom Branding</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Side: GIF */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
            alt="Boy Chatting GIF"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </div>
      </section>
    </main>
  );
}

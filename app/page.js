import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Hero & Plans */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10 text-center lg:text-left">
          
          {/* Hero Section */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Welcome to <span className="text-blue-600 dark:text-blue-400">PulseChat</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
              Connect, share, and create with amazing people. Spark creativity with every conversation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/get-started">
                <Button className="px-6 py-3 text-base sm:text-lg shadow-md hover:shadow-lg transition">
                  Join Now
                </Button>
              </Link>
              <Link href="/forums">
                <Button variant="outline" className="px-6 py-3 text-base sm:text-lg border-gray-300 dark:border-gray-600">
                  Explore Forum
                </Button>
              </Link>
            </div>
          </div>

          {/* Plans Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Free",
                price: "$0",
                features: ["✅ Basic Access", "✅ Public Forums"],
              },
              {
                title: "Pro",
                price: "$9",
                features: ["✅ Private Groups", "✅ AI Chat Tools"],
                highlight: true,
              },
              {
                title: "Premium",
                price: "$19",
                features: ["✅ Team Collaboration", "✅ Custom Branding"],
              },
            ].map(({ title, price, features, highlight }) => (
              <Card
                key={title}
                className={`cursor-pointer ${
                  highlight
                    ? "border-blue-600 border-2 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 shadow-xl transform hover:scale-105"
                    : "shadow-md"
                } hover:ring-2 ring-blue-400 transition`}
              >
                <CardHeader>
                  <CardTitle className="text-center text-lg text-gray-900 dark:text-white">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className={`font-bold text-2xl mb-2 ${highlight ? "text-blue-800 dark:text-white" : "text-blue-600"}`}>{price}</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Side: GIF */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
            alt="Boy Chatting GIF"
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-full max-w-md rounded-xl shadow-xl"
          />
        </div>
      </section>
    </main>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  Window,
  Thread,
  TypingIndicator,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/v2/index.css";

const forumTopics = {
  python: {
    title: "Python",
    description: "Welcome to the Python forum. Ask, answer, and share ideas!",
  },
  javascript: {
    title: "JavaScript",
    description: "JavaScript lovers gather here!",
  },
  cpp: {
    title: "C++",
    description: "All about STL, CP, and DSA.",
  },
  "ai-ml": {
    title: "AI & ML",
    description: "Dive into AI, ML projects, and deep learning.",
  },
};

export default function ForumTopicPage() {
  const { slug } = useParams();
  const topic = forumTopics[slug];
  const { user } = useUser();
  const router = useRouter();

  const [hasMessages, setHasMessages] = useState(false);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [onlineCount, setOnlineCount] = useState(0); // 👈 new state

  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

  useEffect(() => {
    let client;
    let ch;

    const initChat = async () => {
      if (!user || !apiKey) return;

      const response = await fetch("/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          name: user.fullName || "Anonymous",
        }),
      });

      const data = await response.json();
      client = StreamChat.getInstance(apiKey);

      await client.connectUser(
        {
          id: user.id,
          name: user.fullName || "Anonymous",
        },
        data.token
      );

      ch = client.channel("messaging", `forum-${slug}`, {
        name: `${topic.title} Forum`,
        members: [user.id],
      });

      await ch.watch();

      const messageResponse = await ch.query({ messages: { limit: 1 } });
      setHasMessages(messageResponse.messages.length > 0);
      setChatClient(client);
      setChannel(ch);
      setOnlineCount(ch.state.watcher_count || 0);

      // 👇 Watcher event listeners
      ch.on("user.watching.start", () => {
        setOnlineCount(ch.state.watcher_count || 0);
      });
      ch.on("user.watching.stop", () => {
        setOnlineCount(ch.state.watcher_count || 0);
      });
    };

    initChat();

    return () => {
      if (client) client.disconnectUser();
      if (ch) ch.off("user.watching.start");
      if (ch) ch.off("user.watching.stop");
    };
  }, [user, slug]);

  if (!topic) return notFound();

  if (!chatClient || !channel) {
    return (
      <main className="min-h-screen py-16 px-6 bg-white dark:bg-gray-900">
        <p className="text-center text-muted-foreground text-lg">
          🔄 Setting up chat client...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4 md:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            ← Back
          </Button>
          <Button variant="outline" onClick={() => router.forward()}>
            Forward →
          </Button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            💬 {topic.title} Forum
          </h1>
          <p className="text-muted-foreground text-lg">{topic.description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            🟢 {onlineCount} user{onlineCount !== 1 ? "s" : ""} online
          </p>
        </div>

        {hasMessages && (
          <div className="flex justify-center">
            <Button
              variant="destructive"
              onClick={async () => {
                try {
                  await channel.truncate({
                    message: {
                      text: `🧹 ${
                        user.fullName || "Anonymous"
                      } cleared the chat.`,
                    },
                  });
                  setHasMessages(false);
                } catch (err) {
                  console.error("Failed to truncate:", err);
                  alert("❌ You are not allowed to clear the chat.");
                }
              }}
            >
              Clear Chat
            </Button>
          </div>
        )}

        <div className="rounded-lg shadow border dark:border-gray-800 overflow-hidden">
          <Chat client={chatClient} theme="messaging light">
            <Channel channel={channel}>
              <Window>
                <MessageList
                  reactions
                  showPinnedMessages
                  TypingIndicator={() => <TypingIndicator />}
                />
                <MessageInput />
                <Thread />
              </Window>
            </Channel>
          </Chat>
        </div>
      </div>
    </main>
  );
}

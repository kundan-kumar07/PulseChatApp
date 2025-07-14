import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: "Kundan from ChatApp <onboarding@resend.dev>",

    to: "dubeykundan350@gmail.com",
    subject: "New Contact Form Message",
    text: `From: ${name} (${email})\n\nMessage:\n${message}`,
  });

  return new Response("Message sent", { status: 200 });
}

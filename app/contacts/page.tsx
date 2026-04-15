"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent 🚀");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Let’s Work Together 🚀
          </h1>

          <p className="text-gray-400 mt-4 max-w-md">
            Got a project idea or need help with development? Feel free to reach
            out — I’d love to collaborate.
          </p>

          <div className="mt-8 space-y-3 text-gray-300">
            <a
              href="mailto:abhiskvrm5@gmail.com"
              className="block hover:text-white transition"
            >
              📧 abhiskvrm5@gmail.com
            </a>

            <a
              href="https://github.com/abhishekverma051"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white transition"
            >
              💻 github.com/abhishekverma051
            </a>

            <a
              href="https://linkedin.com/in/abhishek-verma-632ba71ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white transition"
            >
              🔗 linkedin.com/in/abhishek-verma
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-lg"
        >
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none focus:border-white"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none focus:border-white"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none focus:border-white"
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

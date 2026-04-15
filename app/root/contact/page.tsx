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

                {/* LEFT SIDE */}
                <div>
                    <h1 className="text-4xl font-bold">Let’s Talk 👋</h1>
                    <p className="text-gray-400 mt-4">
                        Have a project or just want to say hi? Feel free to reach out.
                    </p>

                    <div className="mt-8 space-y-4">
                        <p>📧 tanmay@example.com</p>
                        <p>🔗 LinkedIn</p>
                        <p>💻 GitHub</p>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#111] p-6 rounded-xl border border-gray-800"
                >
                    <div className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:opacity-80 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
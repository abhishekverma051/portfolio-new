import Link from "next/link";

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 text-center px-6  space-y-6">
      <Link
        href="/contacts"
        className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-lg"
      >
        Contact Me
      </Link>
      <a
        href="mailto:abhiskvrm5@gmail.com"
        className="block hover:text-white transition"
      >
        📧 abhiskvrm5@gmail.com
      </a>
      {/* CONTACT */}
      <div className="mt-16 text-center text-gray-400">
        <p>📍 Mohali, Punjab</p>
        <p>📞 +91 80917-68971</p>
        <p>📧 abhiskvrm5@gmail.com</p>
      </div>
    </section>
  );
}

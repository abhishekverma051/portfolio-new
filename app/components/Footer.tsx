import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full bottom-[-120px] left-[-100px]" />
      <div className="absolute w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full top-[-100px] right-[-100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Name */}
          <h2 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Abhi.dev
            </span>
          </h2>

          {/* Nav Links */}
          <div className="flex gap-6 text-gray-400 text-sm">
            <Link href="#about" className="hover:text-white transition">
              About
            </Link>
            <Link href="#projects" className="hover:text-white transition">
              Projects
            </Link>
            <Link href="/contacts" className="hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* Socials */}
          <div className="flex gap-4 text-gray-400 text-sm">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-800" />

        {/* Bottom */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Abhishek Verma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

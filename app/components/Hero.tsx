export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      <div className="relative z-10 max-w-4xl">
        {/* Tag */}
        <p className="inline-block px-5 py-2 text-base border border-gray-700 rounded-full text-gray-400 mb-6">
          🚀 Available for Freelance
        </p>

        {/* Heading (BIGGER) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Abhi
          </span>{" "}
          👋
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
          React Native Developer building fast, scalable & high-performance
          mobile apps with modern UI and real-time features.
        </p>

        {/* Tech stack */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {["React Native", "Next.js", "Firebase", "Redux", "API"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm border border-gray-700 rounded-full"
              >
                {tech}
              </span>
            ),
          )}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">10+</h3>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">2+</h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">5+</h3>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex gap-5 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-4 text-lg bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/contacts"
            className="px-8 py-4 text-lg border border-gray-600 rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full bottom-[-80px] right-[-80px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* Intro */}
        <p className="mt-6 text-gray-400 text-lg text-center max-w-3xl mx-auto">
          <span className="font-semibold text-white">Abhishek Verma</span> —
          React Native Developer crafting seamless mobile experiences with
          performance, precision, and purpose.
        </p>

        {/* EXPERIENCE */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold">Experience</h3>

          <div className="mt-6 p-6 border border-gray-800 rounded-xl">
            <p className="font-semibold">
              DevStory, Chandigarh — React Native Developer
            </p>
            <p className="text-gray-400 text-sm mt-1">June 2024 - Present</p>

            <ul className="mt-4 text-gray-400 space-y-2 list-disc pl-5">
              <li>
                Worked on 3 live React Native projects from scratch to
                production.
              </li>
              <li>
                Integrated Firebase Auth (Google, Apple, Facebook) and
                AsyncStorage.
              </li>
              <li>
                Implemented Stripe, RevenueCat (IAP), Notifications (Notifee),
                Sentry.
              </li>
              <li>Used Redux Toolkit for scalable state management.</li>
              <li>Fixed and stabilized 3 incomplete & buggy projects.</li>
            </ul>
          </div>
        </div>

        {/* PROJECTS */}

        {/* SKILLS */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center">Skills</h3>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "React Native",
              "Firebase",
              "Redux Toolkit",
              "TypeScript",
              "Xcode",
              "Android Studio",
              "C++",
              "DSA",
              "CI/CD",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold">Education</h3>

          <p className="mt-4 text-gray-400">
            Chandigarh University — BE CSE (2020 - 2024) • 7.9 CGPA
          </p>
        </div>

        {/* CONTACT */}
      </div>
    </section>
  );
}

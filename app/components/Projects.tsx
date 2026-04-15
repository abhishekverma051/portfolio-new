import Link from "next/link";

const projects = [
  {
    slug: "looklook",
    title: "LookLook App",
    desc: "Weather-based social media app...",
    details: "Full weather-based posting system",
    tech: ["React Native", "Redux"],
  },
  {
    slug: "meds15",
    title: "Meds15",
    desc: "Medicine delivery app...",
    details: "Upload prescriptions and track delivery",
    tech: ["React Native", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.slice(0, 2).map((p, i) => (
            <Link href={`/projects/${p.slug}`} key={i}>
              <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition cursor-pointer">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 mt-2">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* SEE ALL BUTTON */}
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
          >
            See All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

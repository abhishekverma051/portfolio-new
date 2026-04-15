import Link from "next/link";
import { projects } from "../lib/data";

export default function AllProjects() {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center">All Projects</h1>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {projects.map((p, i) => (
          <Link href={`/projects/${p.slug}`} key={i}>
            <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition cursor-pointer">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

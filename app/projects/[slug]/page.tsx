"use client";

import { useParams } from "next/navigation";

const projects = [
  {
    slug: "looklook",
    title: "LookLook App",
    details: "Full weather-based posting system",
    tech: ["React Native", "Redux"],
  },
  {
    slug: "meds15",
    title: "Meds15",
    details: "Upload prescriptions and track delivery",
    tech: ["React Native", "Firebase"],
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-center mt-20">Project not found ❌</div>;
  }

  return (
    <div className="px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">{project.title}</h1>

      <p className="text-gray-400 mt-4">{project.details}</p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

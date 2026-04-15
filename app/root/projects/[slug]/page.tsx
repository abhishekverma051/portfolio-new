import { notFound } from "next/navigation";

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

export default function Page({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <div className="px-6 py-20 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">{project.title}</h1>

            <p className="text-gray-400 mt-4">{project.details}</p>

            <div className="flex gap-2 mt-6 flex-wrap">
                {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
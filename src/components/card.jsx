export default function ProjectCard({ name, description, html_url }) {
    return (
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex flex-col justify-between"
      >
        <div>
          <h2 className="text-xl font-semibold text-red-200 mb-2">{name}</h2>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        <span className="mt-4 text-sm text-blue-400 hover:underline">View on GitHub →</span>
      </a>
    );
  }
  
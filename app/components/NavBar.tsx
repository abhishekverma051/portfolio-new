export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">Abhi.dev</h1>

      <div className="space-x-6 hidden md:flex">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contacts">Contact</a>
      </div>
    </nav>
  );
}

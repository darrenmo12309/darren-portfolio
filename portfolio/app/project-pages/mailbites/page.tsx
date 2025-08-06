'use client';

export default function ProjectDetailsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">My Project</h1>
      <p className="text-gray-700 mb-4">
        This project is a modern, responsive developer portfolio built with Next.js, TailwindCSS, and deployed using Vercel. It features...
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Custom animated hero section</li>
        <li>Project showcase with filtering</li>
        <li>Dark/light mode toggle</li>
        <li>Optimized image loading and SEO</li>
      </ul>
    </main>
  );
}
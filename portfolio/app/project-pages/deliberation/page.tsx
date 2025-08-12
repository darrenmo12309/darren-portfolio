'use client';

import ProjectLayout from '../../components/ProjectPageLayout';

export default function ProjectDetailsPage() {
  return (
    <ProjectLayout
      title="Deliberation Lab Experiment Development Tools VS Code Extension"
      subtitle="Streamlined and guided development of Deliberation Lab experiments"
      period="2025"
      tags={['VSCode Extension']}
      description="A VS Code extension to streamline the development of Deliberation Lab's virtual experiments."
      image="/dl.png"
      github="https://github.com/Watts-Lab/deliberation-lab-tools"
      tech={['TypeScript', 'Mocha', 'React']}
      projectDescription={[
        `In order to create virtual experiments, Deliberation Lab requires an open source tool called deliberation-empirica`,
        `Deliberation-empirica takes manifest files and generates virtual experiments`,
        `These manifest files require a highly specific structure and syntax, each property having its own set of requirements`,
        `The Deliberation Lab Tools VS Code extension provides a guided development experience for these manifest files, ensuring that all requirements are met and that the files are valid`,
      ]}
      features={[
        `Leveraged VS Code event listeners, custom text parsers, and Zod validation to verify files.`,
        `Implemented live diagnostics that update in real time based on formatting and schema validation.`,
        `Added experiment component previewing directly within the editor for faster iteration.`,
        `Integrated a GitHub Actions CI/CD pipeline to automate release and testing workflows.`,
        `Published to the VS Code Extension Marketplace in June 2025.`,
      ]}
      preview={[{ type: 'image', src: '/dlpreview.png' }]}
    />
  );
}
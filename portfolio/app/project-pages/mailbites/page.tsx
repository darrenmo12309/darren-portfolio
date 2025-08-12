'use client';

import ProjectLayout from '../../components/ProjectPageLayout';

export default function ProjectDetailsPage() {
  return (
    <ProjectLayout
      title="MailBites"
      subtitle="Final Project for CIS 3500, Introduction to Software Engineering"
      period="2025"
      tags={['Google Chrome Extension']}
      description="A simple solution to a crowded email inbox"
      github="https://github.com/darrenmo12309/mailbites"
      tech={['React', 'JavaScript']}
      projectDescription={[
        `In a team of four, I helped developed MailBites as a final project for CIS 3500, an email agent to help users manage their inboxes more efficiently.`,
        `MailBites uses the Gmail API to access the HTML of the user's inbox content.`,
        `Leverages Gemini AI to increase the precision of the extension's four main features.`,
        `Entirely frontend based, with a React and JavaScript codebase using manifest v3.`,
      ]}
      features={[
        `Summary creation of all unread emails in the inbox from the past 24 hours`,
        `Generation of a to-do list based on the unread emails' contents`,
        `Creation of a priority list of emails based importance and time sensitivity`,
        `Auto-generation of a template of a unique reply to each email upon a click of a button`,
      ]}
      preview={[{ type: 'image', src: '/mailbitesDisplay.png' }]}
    />
  );
}
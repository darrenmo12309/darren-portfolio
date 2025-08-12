'use client';

import ProjectLayout from '../../components/ProjectPageLayout';

export default function ProjectDetailsPage() {
  return (
    <ProjectLayout
      title="InstaLite"
      subtitle="Final Project for NETS 2120, Scalable and Cloud Computing"
      period="2025"
      tags={['Full Stack Application']}
      description="Social media platform for Penn students to connect and share experiences"
      github="https://github.com/darrenmo12309/instalite"
      tech={['React', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'ChromaDB', 'Kafka', 'Apache Spark', `AWS`]}
      projectDescription={[
        `For my final project in NETS 2120, I worked in a team with two others to develop a social media platform for Penn students.`,
        `We used React and JavaScript for the frontend, Node.JS and Express for the backend, and MySQL for our database.`,
        `We hosted our frontend and backend on Amazon EC2 nodes, and used Amazon RDS for our MySQL database.`,
        `Apache Spark was used for user feed generation, ChromaDB for image embedding and similarity search, and Kafka for streaming from other social media sites.`,
        `Spark and ChromaDB were hosted on the cloud as well, on an Amazon EMR cluster and an Amazon EC2 node respectively.`,

      ]}
      features={[
        'User Signup and Login with salted and hashed passwords',
        'Profile Page with Actor matches and hashtags',
        'Main feed with Adsorption logic and posts that have comment threads and like/comment features',
        'Kafka streaming from Federated Posts and Bluesky topics into our feed',
        'Writing into Federated Posts topic with post creation feature',
        'Friend recommendations and ability to add/delete friends',
        'Messaging system with groupchatting and direct messaging',
      ]}
      preview={[{ type: 'image', src: '/instalite.png' }]}
    />
  );
}
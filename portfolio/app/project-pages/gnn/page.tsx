'use client';

import ProjectLayout from '../../components/ProjectPageLayout';

export default function ProjectDetailsPage() {
  return (
    <ProjectLayout
      title="Energy Efficient Vehicle Routing"
      subtitle="STAT 4830 Project, Mathematical Optimizations for Machine Learning and Data Science"
      period="2025"
      tags={['Graph Neural Networks', 'Reinforcement Learning', 'Transformer Models']}
      description="Three vehicle routing algorithms to minimize energy consumption for vehicles"
      github="https://github.com/darrenmo12309/STAT-4830-project-base"
      tech={['Python', 'Pandas', 'NumPy', 'PyTorch', 'Jupyter']}
      projectDescription={[
        `In a team of three, I worked to develop three vehicle routing algorithms that optimize on travel time and energy consumption.`,
        `Used a dataset of 300+ vehicles and their respective routes marked by GPS coordinates.`,
        `Trained all of our models in Jupyter notebooks using PyTorch library on Pandas dataframes`,
      ]}
      features={[
        `Designed and implemented Graph Neural Network, BERT-based transformer, and Deep Q-network models to predict optimal vehicle routing`,
        `Implemented a custom loss function that penalizes for longer routes and higher energy consumption.`,
        `Considered geographical features such as elevation and road features such as speed limits and congestion`,
        `Used AdamW optimizer for training.`,
      ]}
      preview={[{ type: 'image', src: '/GNN.png' }]}
    />
  );
}
'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { ProjectCard } from '@/components/ProjectCard'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const projects = [
    {
      name: 'AI-Based DeepFake Face Detection',
      description:
        'As part of a 6-member team, built a deepfake detection system that classifies real vs. AI-generated human faces. The system achieved 99.7% test accuracy and a ROC-AUC of 0.999, trained on the Kaggle 140k Real and Fake Faces dataset using Xception and Swin Transformer v2 architectures.',
      role: 'Full Stack Developer',
      achievements: [
        'Built full Flask web application (HTML, CSS, JavaScript) for real-time face classification predictions',
        'Implemented Swin Transformer v2 with custom classification head using PyTorch and TIMM',
        'Designed complete training pipeline with AdamW optimizer, differential learning rates, and early stopping',
        'Test Accuracy: 99.7% | Validation Accuracy: 99.81% | ROC-AUC: 0.999',
        'Dataset: 140,000 images (70k real, 70k fake)',
      ],
      tags: ['Python', 'PyTorch', 'Flask', 'Deep Learning', 'Computer Vision'],
      stats: ['99.7% Accuracy', 'ROC-AUC: 0.999', '140k Dataset', 'Flask'],
      category: 'AI/ML',
      github: 'https://github.com/ahmed-shamh/AI-Based-Real-vs-Fake-Face-Classification',
      status: 'Completed',
    },
    {
      name: 'Cloud-Native Telecom Management Platform',
      description:
        'Team project built as part of Digital Egypt Pioneers Initiative (DEPI) under Ministry of Communications. Microservices-based platform simulating telecom operator services including account management, subscriptions, balance recharge, usage monitoring, and billing.',
      role: 'Team Leader & CI/CD Engineer',
      achievements: [
        'Designed and implemented comprehensive Jenkins CI/CD pipeline',
        'Automated testing, Docker image building, registry push, and Kubernetes deployment',
        'Implemented health checks and rollback mechanisms for production reliability',
        'Managed GitHub workflow and coordinated 6-member team across infrastructure, deployment, and testing',
      ],
      team: [
        { name: 'Mohamed Elhadad', role: 'Team Leader / CI-CD Engineer' },
        { name: 'Fathy Ibrahim', role: 'AWS Cloud Infrastructure Engineer' },
        { name: 'Yossif Farahat', role: 'AWS Deployment & Kubernetes Engineer' },
        { name: 'Abdallah Elsayed', role: 'Automation & Ansible Engineer' },
        { name: 'Mohamed Hatem', role: 'Monitoring & Logging Engineer' },
        { name: 'Moamen Osama', role: 'Testing & Documentation' },
      ],
      tags: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Microservices', 'Automation'],
      stats: ['Jenkins Pipeline', 'Kubernetes', 'Docker Registry', 'AWS'],
      category: 'DevOps',
      status: 'In Progress',
    },
    {
      name: 'MiniCloud Deployment System',
      description:
        'Self-hosted deployment automation system that listens for GitHub webhook events and triggers full deployment pipeline on AWS EC2 instance. Automatically builds Docker images, restarts containers, and logs deployment results.',
      role: 'Sole Developer',
      achievements: [
        'Built FastAPI webhook server for GitHub event handling',
        'Created Docker automation scripts for container lifecycle management',
        'Configured Nginx reverse proxy and AWS EC2 environment',
        'Learned webhook-driven deployment systems and production server hardening',
      ],
      tags: ['FastAPI', 'Docker', 'AWS', 'Nginx', 'Python', 'GitHub Webhooks'],
      stats: ['FastAPI', 'Docker Automation', 'AWS EC2', 'Nginx'],
      category: 'DevOps',
      status: 'In Progress',
    },
  ]

  const categories = ['All', 'AI/ML', 'DevOps']

  const filteredProjects = selectedCategory === 'All' || !selectedCategory
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          command="elhadad@portfolio:~$ projects"
          description="My work across DevOps, Cloud, AI, and Web Development"
        />

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 text-sm border transition-all duration-200 ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category</p>
          </div>
        )}
      </div>
    </div>
  )
}

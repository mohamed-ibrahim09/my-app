import { Metadata } from 'next'
import { Calendar, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experience - Mohamed Elhadad',
  description: 'My professional experience, certifications, and internships',
}

export default function Experience() {
  const experiences = [
    {
      type: 'certification',
      title: 'CCNA Certification',
      organization: 'National Telecommunication Institute (NTI)',
      period: '2026',
      location: 'Egypt',
      description:
        'Cisco Certified Network Associate certification. Comprehensive training in networking fundamentals, routing, switching, and network security. Essential credential for career advancement in network engineering and infrastructure management.',
      skills: ['Networking', 'Routing', 'Switching', 'Network Security', 'Cisco Devices'],
      status: 'Completed',
    },
    {
      type: 'internship',
      title: 'DevOps Internship',
      organization: 'Digital Egypt Pioneers Initiative — Ministry of Communications',
      period: '2026',
      location: 'Egypt',
      description:
        'Hands-on DevOps internship focused on implementing CI/CD pipelines, containerized workloads, and cloud-native automation. Built deployment workflows and infrastructure tasks using Jenkins, Docker, Kubernetes, AWS EC2, GitHub Actions, and Ansible.',
      skills: ['Jenkins', 'Docker', 'Kubernetes', 'AWS EC2', 'GitHub Actions', 'Ansible'],
      status: 'Current',
    },
    {
      type: 'program',
      title: 'GCI World 2026 — AI & Data Science Program',
      organization: 'Matsuo-Iwasawa Laboratory, University of Tokyo',
      period: 'Apr 2026 – Jul 2026',
      location: 'Tokyo, Japan (Remote/Hybrid)',
      description:
        'Accepted into a 14-week global AI and Data Science program focused on applied machine learning, research collaboration, and practical model development under the University of Tokyo ecosystem.',
      skills: ['Machine Learning', 'Data Science', 'AI Research', 'Python'],
      status: 'Current',
    },
  ]

  const certifications = [
    {
      title: 'AI Fluency Framework & Foundations',
      issuer: 'Anthropic',
      period: '2026',
      description: 'Comprehensive training in AI fundamentals and practical application of Claude AI framework. Understanding LLM capabilities, limitations, and best practices.',
      icon: '🤖',
    },
    {
      title: 'AWS Cloud Fundamentals',
      issuer: 'Amazon Web Services',
      period: 'In Progress',
      description: 'Building expertise in AWS services, cloud architecture, and infrastructure as code.',
      icon: '☁️',
    },
  ]

  const timeline = [
    {
      year: '2023',
      event: 'Started Bachelor of Artificial Intelligence at Menofia University',
      icon: '🎓',
    },
    {
      year: '2026',
      event: 'CCNA Certification - National Telecommunication Institute',
      icon: '📚',
    },
    {
      year: '2026',
      event: 'DevOps Internship - Digital Egypt Pioneers Initiative',
      icon: '💼',
    },
    {
      year: '2026',
      event: 'AI Fluency Framework & Foundations - Anthropic',
      icon: '🧠',
    },
    {
      year: '2026',
      event: 'GCI World 2026 - Matsuo-Iwasawa Laboratory, University of Tokyo',
      icon: '🌏',
    },
    {
      year: '2027',
      event: 'Expected Graduation with AI specialization in Cybersecurity',
      icon: '🚀',
    },
  ]

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 space-y-6 animate-[slideInUp_0.6s_ease-out]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Experience & Certifications
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            My professional journey showcasing internships, certifications, and ongoing professional development.
          </p>
        </div>

        {/* Current Experiences */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Active Experiences</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-card border border-border hover:border-primary transition-all duration-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        exp.status === 'Current'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exp.status}
                      </span>
                    </div>
                    <p className="text-primary font-semibold mb-2">{exp.organization}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground mb-6 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Key Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                    <p className="text-xs text-muted-foreground font-mono">{cert.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-12">Career Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="mt-1">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2.5"></div>
                  <p className="text-sm font-bold text-primary mb-2">{item.year}</p>
                  <p className="text-lg font-semibold text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

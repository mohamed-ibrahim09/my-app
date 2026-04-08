import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Mohamed Elhadad',
  description: 'Learn more about Mohamed Elhadad, DevOps Engineer and AI Enthusiast based in Cairo, Egypt',
}

export default function About() {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Bash', 'SQL'],
    },
    {
      category: 'Proficient',
      items: ['Python', 'Docker', 'Linux', 'Bash', 'Next.js', 'Tailwind CSS', 'Jenkins', 'Nginx', 'FastAPI'],
    },
    {
      category: 'Learning / Familiar',
      items: ['Kubernetes', 'AWS', 'GCP'],
    },
    {
      category: 'Security',
      items: ['Authentication', 'HTTPS/SSL', 'IAM', 'Cybersecurity Principles', 'Data Privacy'],
    },
  ]

  const education = [
    {
      title: 'Bachelor of Artificial Intelligence',
      institution: 'Menofia University',
      period: '2023 – 2027 (Expected)',
      description: 'Specialization in Cybersecurity. Focusing on AI fundamentals, machine learning, and secure system design.',
      highlight: true,
    },
    {
      title: 'CCNA Certification',
      institution: 'National Telecommunication Institute (NTI)',
      period: '2026',
      description: 'Cisco Certified Network Associate - Comprehensive networking and infrastructure knowledge.',
    },
    {
      title: 'DevOps Internship',
      institution: 'Digital Egypt Pioneers Initiative — Ministry of Communications',
      period: '2026',
      description: 'Hands-on experience with DevOps practices, cloud deployment, and infrastructure automation.',
    },
  ]

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20 space-y-6 animate-[slideInUp_0.6s_ease-out]">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              I&apos;m a <span className="font-semibold text-primary">DevOps</span>-focused software engineer and <span className="font-semibold text-primary">AI</span> developer based in Cairo, Egypt, passionate about building scalable systems and intelligent applications. I specialize in combining backend development, cloud infrastructure, and machine learning to deliver production-ready solutions. With hands-on experience in <span className="font-semibold text-primary">CI/CD</span>, Docker, Kubernetes, and <span className="font-semibold text-primary">Cloud</span> infrastructure, I focus on turning complex ideas into efficient, real-world systems.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'Projects Completed', value: '3' },
            { label: 'Self-Study & Projects', value: '2+ Years' },
            { label: 'Technologies', value: '20+' },
            { label: 'Currently Learning', value: 'AI/ML' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-lg bg-card border border-border">
              <p className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Education & Certifications</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg border transition-all duration-200 ${
                  edu.highlight
                    ? 'bg-primary/5 border-primary shadow-lg'
                    : 'bg-card border-border hover:border-primary'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-foreground leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-200">
                <h3 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
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

        {/* About Text */}
        <section className="max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">My Journey</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              My journey in technology began with a curiosity about how systems work. Starting with web development, 
              I discovered my passion for building end-to-end solutions that solve real problems. Every project has taught me 
              something valuable about clean code, system design, and user experience.
            </p>
            <p>
              Currently, I&apos;m deeply interested in artificial intelligence and its applications. The intersection of AI with 
              web development fascinates me—from integrating language models into applications to building intelligent systems 
              that enhance user experiences. I believe AI will shape the future of software development, and I&apos;m committed to 
              staying at the forefront of this evolution.
            </p>
            <p>
              Beyond coding, I believe in continuous learning. Whether it&apos;s through formal education, online courses, or 
              hands-on projects, I&apos;m always exploring new technologies and methodologies. I&apos;m particularly focused on 
              cybersecurity and secure coding practices to build applications that are not just powerful but also safe.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new tech trends,
              or diving into AI research papers. I&apos;m always open to collaborations, mentorship, and opportunities to 
              make a meaningful impact through technology.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

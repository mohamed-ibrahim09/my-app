'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

// ── Data ──────────────────────────────────────────────────────────────────────

const SKILLS = [
  {
    category: 'Cloud',
    icon: '☁',
    items: ['AWS EC2', 'S3', 'IAM', 'VPC', 'Security Groups', 'Load Balancing', 'Auto Scaling'],
  },
  {
    category: 'Containers & Orchestration',
    icon: '⬡',
    items: ['Docker', 'Docker Compose', 'Kubernetes', 'Pods', 'Deployments', 'Services'],
  },
  {
    category: 'CI/CD',
    icon: '⟳',
    items: ['GitHub Actions', 'Jenkins', 'Git', 'Git Workflows', 'Webhook Automation'],
  },
  {
    category: 'Infrastructure & Automation',
    icon: '⚙',
    items: ['Ansible', 'Terraform', 'Bash Scripting'],
  },
  {
    category: 'Monitoring & Logging',
    icon: '◈',
    items: ['Prometheus', 'Grafana', 'Log Analysis'],
  },
  {
    category: 'Networking & Systems',
    icon: '⬡',
    items: ['Linux (Ubuntu Server)', 'Nginx', 'TCP/IP', 'Firewall', 'Security Groups'],
  },
];

const PROJECTS = [
  {
    title: 'MiniCloud Deployment',
    description:
      'Built a GitHub webhook-based automated deployment system with automatic deployment on push, Docker image build & container restart, and deployment logs tracking.',
    tech: ['FastAPI', 'Docker', 'GitHub Webhooks', 'AWS EC2', 'Nginx'],
    tag: 'Cloud / Automation',
  },
  {
    title: 'CI/CD Pipeline Automation',
    description:
      'Designed a complete CI/CD workflow using GitHub Actions with automated build and testing, Docker image creation, deployment to AWS EC2, and continuous deployment workflow.',
    tech: ['GitHub Actions', 'Docker', 'AWS EC2'],
    tag: 'DevOps',
  },
  {
    title: 'Deepfake Detection System',
    description:
      'Developed a deep learning–based web application to detect AI-manipulated media. Trained a CNN model on Kaggle datasets with a real-time prediction system for uploaded media.',
    tech: ['PyTorch', 'CNN', 'Python', 'HTML', 'CSS', 'JavaScript'],
    tag: 'AI / ML',
  },
];

const SERVICES = [
  {
    title: 'CI/CD Pipeline Setup',
    description:
      'Automating software delivery through robust CI/CD pipelines using GitHub Actions and Jenkins for efficient and reliable deployments.',
    icon: '⟳',
  },
  {
    title: 'Dockerizing Applications',
    description:
      'Packaging applications and their dependencies into portable Docker containers, ensuring consistent environments across development and production.',
    icon: '⬡',
  },
  {
    title: 'AWS EC2 Deployment',
    description:
      'Deploying and configuring applications on Amazon EC2 instances, including security group setup, instance type selection, and basic scaling strategies.',
    icon: '☁',
  },
  {
    title: 'Linux Server Management',
    description:
      'Setting up, securing, and optimizing Linux servers for performance and reliability, covering user management, system updates, and troubleshooting.',
    icon: '⬛',
  },
  {
    title: 'Infrastructure Automation',
    description:
      'Automating infrastructure provisioning, configuration management, and application deployment using Ansible for increased efficiency.',
    icon: '⚙',
  },
  {
    title: 'Nginx Proxy & Configuration',
    description:
      'Configuring Nginx as a reverse proxy, load balancer, and web server, enhancing application security, performance, and traffic distribution.',
    icon: '◈',
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Artificial Intelligence',
    field: 'Cybersecurity Specialization',
    institution: 'Menofia University',
    period: '2023 – 2027 (Expected)',
    areas: ['Cloud Computing', 'Cybersecurity Fundamentals', 'Networking & System Security', 'Machine Learning & AI'],
  },
];

const CERTIFICATIONS = [
  { title: 'CCNA Certification', issuer: 'National Telecommunication Institute (NTI)' },
  { title: 'DevOps Internship', issuer: 'Digital Egypt Pioneers Initiative — Ministry of Communications' },
];

// ── Scroll Reveal Hook ────────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Section Wrapper ───────────────────────────────────────────────────────────

function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 px-6 ${className}`}>
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-2 h-2 rounded-full bg-[#7C3AED] pulse-dot" />
      <span className="font-mono text-xs tracking-widest uppercase text-[rgba(226,232,240,0.4)]">{children}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
      {children}
    </h2>
  );
}

// ── Terminal Log Animation ────────────────────────────────────────────────────

const TERMINAL_LINES = [
  { text: '$ whoami', delay: 0, color: 'text-[#C4B5FD]' },
  { text: 'Mohamed Ibrahim', delay: 400, color: 'text-white' },
  { text: '$ cat role.txt', delay: 900, color: 'text-[#C4B5FD]' },
  { text: 'Junior DevOps & Cloud Engineer', delay: 1300, color: 'text-[#86EFAC]' },
  { text: '$ cat focus.txt', delay: 1800, color: 'text-[#C4B5FD]' },
  { text: 'Automation · Cloud · Containers · Security', delay: 2200, color: 'text-[rgba(226,232,240,0.7)]' },
  { text: '$ status', delay: 2700, color: 'text-[#C4B5FD]' },
  { text: '✓ Available for opportunities', delay: 3100, color: 'text-[#86EFAC]' },
];

function TerminalBlock() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => setVisibleCount(i + 1), line.delay);
    });
  }, []);

  return (
    <div className="glass-panel rounded-lg overflow-hidden violet-glow w-full max-w-xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(124,58,237,0.15)] bg-[rgba(9,9,11,0.6)]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        <span className="ml-3 font-mono text-xs text-[rgba(226,232,240,0.3)]">portfolio.sh</span>
      </div>
      <div className="p-5 font-mono text-sm space-y-1.5 min-h-[220px] bg-[rgba(9,9,11,0.3)]">
        {TERMINAL_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={`${line.color} transition-all duration-300`}>
            {line.text}
          </div>
        ))}
        {visibleCount < TERMINAL_LINES.length && (
          <span className="text-[#7C3AED] animate-[blink_1s_step-end_infinite]">▋</span>
        )}
      </div>
    </div>
  );
}

// ── Contact Form ──────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hp, setHp] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (hp.trim().length > 0) {
        setSent(true);
        return;
      }
      const res = await fetch('https://formspree.io/f/xqeywzaq', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...form, website: hp }),
      });

      if (!res.ok) {
        throw new Error('Form submission failed');
      }

      setSent(true);
    } catch {
      setError('Failed to send. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  }

  return sent ? (
    <div className="glass-panel rounded-lg p-8 text-center">
      <div className="w-12 h-12 rounded-full bg-[rgba(124,58,237,0.2)] flex items-center justify-center mx-auto mb-4">
        <span className="text-[#86EFAC] text-xl">✓</span>
      </div>
      <p className="font-mono text-[#86EFAC] text-sm">Message transmitted successfully.</p>
      <p className="font-mono text-[rgba(226,232,240,0.4)] text-xs mt-2">I&apos;ll get back to you soon.</p>
      <button
        type="button"
        className="btn-ghost mt-6 px-5 py-2.5 rounded-sm font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2"
        onClick={() => {
          setSent(false);
          setError(null);
          setHp('');
          setForm({ name: '', email: '', message: '' });
        }}
      >
        Send another
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <label className="block font-mono text-xs text-[rgba(226,232,240,0.4)] mb-1.5 tracking-widest uppercase">
          Website
        </label>
        <input
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          className="w-full"
        />
      </div>
      {[
        { id: 'name', label: 'name', type: 'text', placeholder: 'Your name' },
        { id: 'email', label: 'email', type: 'email', placeholder: 'your@email.com' },
      ].map((field) => (
        <div key={field.id}>
          <label className="block font-mono text-xs text-[rgba(226,232,240,0.4)] mb-1.5 tracking-widest uppercase">
            {field.label}
          </label>
          <input
            type={field.type}
            required
            placeholder={field.placeholder}
            value={form[field.id as 'name' | 'email']}
            onChange={(e) => setForm((p) => ({ ...p, [field.id]: e.target.value }))}
            className="w-full glass-panel rounded-sm px-4 py-3 font-mono text-sm text-white placeholder-[rgba(226,232,240,0.2)] focus:outline-none focus:border-[rgba(124,58,237,0.5)] transition-colors"
          />
        </div>
      ))}
      <div>
        <label className="block font-mono text-xs text-[rgba(226,232,240,0.4)] mb-1.5 tracking-widest uppercase">
          message
        </label>
        <textarea
          required
          rows={4}
          placeholder="What would you like to discuss?"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="w-full glass-panel rounded-sm px-4 py-3 font-mono text-sm text-white placeholder-[rgba(226,232,240,0.2)] focus:outline-none focus:border-[rgba(124,58,237,0.5)] transition-colors resize-none"
        />
      </div>
      {error && <p className="font-mono text-xs text-[#FCA5A5]">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="btn-solid w-full py-3 rounded-sm font-mono text-sm tracking-widest uppercase disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  useReveal();

  return (
    <div id="top" className="bg-void min-h-screen noise-overlay">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-[rgba(124,58,237,0.15)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <AppLogo size={24} iconName="CommandLineIcon" text="Mohamed Ibrahim" className="text-white" />
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
            {[
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Services', href: '#services' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[rgba(226,232,240,0.5)] hover:text-[#C4B5FD] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="btn-ghost font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm hidden md:flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] pulse-dot" />
            Hire Me
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <Section className="min-h-screen flex flex-col items-center justify-center pt-24">
          <div className="absolute inset-0 bg-radial-violet pointer-events-none" />
          <div className="absolute inset-0 grid-lines pointer-events-none opacity-40" />

          <div className="relative z-10 w-full max-w-5xl mx-auto">
            {/* Terminal badge */}
            <div className="flex justify-center mb-10">
              <div className="glass-panel px-4 py-2 rounded-sm flex items-center gap-3 font-mono text-xs text-[rgba(226,232,240,0.5)]">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] pulse-dot" />
                <span>portfolio ~ </span>
                <span className="text-[#C4B5FD]">./init_profile.sh</span>
                <span className="text-[#7C3AED] animate-[blink_1s_step-end_infinite]">▋</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <p className="font-mono text-xs tracking-widest uppercase text-[rgba(226,232,240,0.4)] mb-4">
                  Junior DevOps &amp; Cloud Engineer
                </p>
                <h1 className="font-mono text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                  Mohamed{' '}
                  <span className="text-[#C4B5FD] text-glow">Elhadad</span>
                </h1>
                <p className="font-sans text-[rgba(226,232,240,0.6)] text-lg leading-relaxed max-w-lg mb-8">
                  Passionate about cloud infrastructure, automation, and containerized deployments.
                  Building scalable, secure, and efficient systems using modern DevOps practices.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="#contact"
                    className="btn-solid px-6 py-3 rounded-sm font-mono text-sm tracking-widest uppercase"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#projects"
                    className="btn-ghost px-6 py-3 rounded-sm font-mono text-sm tracking-widest uppercase"
                  >
                    View Projects
                  </a>
                </div>
                {/* Quick info */}
                <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start font-mono text-xs text-[rgba(226,232,240,0.4)]">
                  <span className="flex items-center gap-2">
                    <span className="text-[#7C3AED]">◈</span> Tanta, Egypt
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-[#7C3AED]">◈</span> AI Student @ Menofia University
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-[#86EFAC]">●</span> Open to opportunities
                  </span>
                </div>
              </div>

              {/* Terminal block */}
              <div className="flex-shrink-0">
                <TerminalBlock />
              </div>
            </div>
          </div>
        </Section>

        {/* ── Skills ── */}
        <Section id="skills">
          <div className="max-w-6xl mx-auto">
            <div className="reveal">
              <SectionLabel>Technical Skills</SectionLabel>
              <SectionTitle>
                Tools &amp; <span className="text-[#C4B5FD]">Technologies</span>
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SKILLS.map((skill, i) => (
                <div
                  key={skill.category}
                  className={`reveal glass-panel glass-panel-hover rounded-lg p-6 delay-${Math.min((i + 1) * 100, 500)}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-sm bg-[rgba(124,58,237,0.15)] flex items-center justify-center text-[#C4B5FD] text-base">
                      {skill.icon}
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1 rounded-sm bg-[rgba(124,58,237,0.1)] text-[rgba(196,181,253,0.8)] border border-[rgba(124,58,237,0.15)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Experience / Projects ── */}
        <Section id="projects" className="bg-[rgba(26,26,46,0.2)]">
          <div className="absolute inset-0 bg-radial-violet-bottom pointer-events-none opacity-50" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="reveal">
              <SectionLabel>Projects &amp; Experience</SectionLabel>
              <SectionTitle>
                What I&apos;ve <span className="text-[#C4B5FD]">Built</span>
              </SectionTitle>
            </div>
            <div className="space-y-6">
              {PROJECTS.map((project, i) => (
                <div
                  key={project.title}
                  className={`reveal glass-panel glass-panel-hover rounded-lg p-7 delay-${Math.min((i + 1) * 100, 300)}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-[10px] px-2.5 py-1 rounded-sm bg-[rgba(124,58,237,0.15)] text-[#C4B5FD] border border-[rgba(124,58,237,0.2)] tracking-widest uppercase">
                          {project.tag}
                        </span>
                      </div>
                      <h3 className="font-mono text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="font-sans text-[rgba(226,232,240,0.6)] text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs px-2.5 py-1 rounded-sm bg-[rgba(9,9,11,0.6)] text-[rgba(226,232,240,0.5)] border border-[rgba(124,58,237,0.1)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center">
                      <span className="text-[#C4B5FD] font-mono text-lg font-bold">{i + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Education ── */}
        <Section id="education">
          <div className="max-w-6xl mx-auto">
            <div className="reveal">
              <SectionLabel>Education &amp; Certifications</SectionLabel>
              <SectionTitle>
                Academic <span className="text-[#C4B5FD]">Background</span>
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Education */}
              {EDUCATION.map((edu) => (
                <div key={edu.institution} className="reveal glass-panel rounded-lg p-7">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-sm bg-[rgba(124,58,237,0.15)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C4B5FD] text-lg">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-mono text-base font-bold text-white">{edu.degree}</h3>
                      <p className="font-mono text-xs text-[#C4B5FD] mt-0.5">{edu.field}</p>
                      <p className="font-mono text-xs text-[rgba(226,232,240,0.4)] mt-1">{edu.institution}</p>
                      <span className="inline-block mt-2 font-mono text-[10px] px-2.5 py-1 rounded-sm bg-[rgba(124,58,237,0.1)] text-[rgba(196,181,253,0.7)] border border-[rgba(124,58,237,0.15)]">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-[rgba(124,58,237,0.1)] pt-4">
                    <p className="font-mono text-xs text-[rgba(226,232,240,0.4)] mb-3 tracking-widest uppercase">
                      Relevant Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.areas.map((area) => (
                        <span
                          key={area}
                          className="font-mono text-xs px-2.5 py-1 rounded-sm bg-[rgba(9,9,11,0.6)] text-[rgba(226,232,240,0.5)] border border-[rgba(124,58,237,0.1)]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Certifications */}
              <div className="reveal delay-100 space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="glass-panel glass-panel-hover rounded-lg p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[rgba(124,58,237,0.15)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C4B5FD] text-base">🏅</span>
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold text-white">{cert.title}</h4>
                      <p className="font-mono text-xs text-[rgba(226,232,240,0.4)] mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── Services ── */}
        <Section id="services" className="bg-[rgba(26,26,46,0.2)]">
          <div className="max-w-6xl mx-auto">
            <div className="reveal">
              <SectionLabel>What I Offer</SectionLabel>
              <SectionTitle>
                My <span className="text-[#C4B5FD]">Services</span>
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((service, i) => (
                <div
                  key={service.title}
                  className={`reveal glass-panel glass-panel-hover rounded-lg p-6 delay-${Math.min((i + 1) * 100, 500)}`}
                >
                  <div className="w-10 h-10 rounded-sm bg-[rgba(124,58,237,0.15)] flex items-center justify-center mb-4 text-[#C4B5FD] text-xl">
                    {service.icon}
                  </div>
                  <h3 className="font-mono text-sm font-bold text-white mb-3">{service.title}</h3>
                  <p className="font-sans text-[rgba(226,232,240,0.5)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Contact ── */}
        <Section id="contact">
          <div className="absolute inset-0 bg-radial-violet pointer-events-none opacity-60" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="reveal text-center mb-14">
              <SectionLabel>Get In Touch</SectionLabel>
              <SectionTitle>
                Let&apos;s <span className="text-[#C4B5FD]">Connect</span>
              </SectionTitle>
              <p className="font-sans text-[rgba(226,232,240,0.5)] max-w-lg mx-auto">
                Open to new opportunities, collaborations, and interesting projects. Drop a message or reach out directly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact info */}
              <div className="reveal space-y-4">
                {[
                  { label: 'Email', value: 'mohammed.i.elhadad@gmail.com', href: 'mailto:mohammed.i.elhadad@gmail.com', icon: '✉' },
                  { label: 'Phone', value: '+20 1020884588', href: 'tel:+201020884588', icon: '☎' },
                  { label: 'LinkedIn', value: 'linkedin.com/in/mohamed-ibrahim-b2663a331', href: 'https://linkedin.com/in/mohamed-ibrahim-b2663a331', icon: '⬡' },
                  { label: 'GitHub', value: 'github.com/mohamed-ibrahim09', href: 'https://github.com/mohamed-ibrahim09', icon: '⬛' },
                  { label: 'Location', value: 'Tanta, Egypt', href: null, icon: '◈' },
                ].map((item) => (
                  <div key={item.label} className="glass-panel glass-panel-hover rounded-lg p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[rgba(124,58,237,0.15)] flex items-center justify-center flex-shrink-0 text-[#C4B5FD]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-[rgba(226,232,240,0.4)] tracking-widest uppercase mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="font-mono text-sm text-[#C4B5FD] hover:text-white transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-mono text-sm text-[rgba(226,232,240,0.7)]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="reveal delay-200">
                <div className="glass-panel rounded-lg p-7">
                  <p className="font-mono text-xs text-[rgba(226,232,240,0.4)] mb-6 tracking-widest uppercase">
                    Send a message
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[rgba(124,58,237,0.1)] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[rgba(226,232,240,0.3)]">
            © 2024 Mohamed Ibrahim · Junior DevOps &amp; Cloud Engineer
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-[rgba(226,232,240,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] pulse-dot" />
            <span>Built with Next.js &amp; Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

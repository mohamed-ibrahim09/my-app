import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/SectionHeader'
import ProjectsPage from './projects/page'
import ExperiencePage from './experience/page'
import BlogPage from './blog/page'
import ContactPage from './contact/page'

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="min-h-screen py-24 sm:py-32 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            command="elhadad@portfolio:~$ cat about.txt"
            description="DevOps-focused engineer and AI developer based in Cairo, Egypt"
          />

          <div className="space-y-8 font-mono">
            <p className="text-[#e2e8f0] leading-relaxed max-w-4xl">
              I&apos;m a DevOps-focused engineer and AI developer based in Cairo, Egypt, passionate about building scalable systems and intelligent applications. I specialize in combining backend development, cloud infrastructure, and machine learning to deliver production-ready solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Projects Completed', value: '3' },
                { label: 'Years Experience', value: '2+ (Self-Study & Projects)' },
                { label: 'Technologies', value: '20+' },
                { label: 'Currently Learning', value: 'AI/ML' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-card border border-border">
                  <p className="text-[#00ff41] font-bold text-lg">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-[#00ff41] text-xl font-bold">Education & Certifications</h3>
              <ul className="space-y-2 text-[#e2e8f0]">
                <li>• Bachelor of Artificial Intelligence — Menofia University (2023–2027), Cybersecurity specialization</li>
                <li>• CCNA — National Telecommunication Institute (2026)</li>
                <li>• DevOps Internship — DEPI / Ministry of Communications (2026)</li>
                <li>• GCI World 2026 — Matsuo-Iwasawa Lab, University of Tokyo (April–July 2026)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#00ff41] text-xl font-bold mb-4">Skills Grid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Bash', 'SQL'] },
                  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
                  { category: 'Backend & DevOps', items: ['Node.js', 'Docker', 'Linux', 'Jenkins', 'Nginx', 'FastAPI'] },
                  { category: 'AI/ML', items: ['Deep Learning', 'PyTorch', 'LLM Integration', 'RAG Systems'] },
                  { category: 'Cloud & Infrastructure', items: ['AWS', 'GCP', 'Vercel', 'GitHub Actions', 'CI/CD'] },
                  { category: 'Security', items: ['IAM', 'HTTPS/SSL', 'Cybersecurity Principles', 'Data Privacy'] },
                ].map((group) => (
                  <div key={group.category} className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-[#00ff41] font-semibold mb-2">{group.category}</p>
                    <p className="text-sm text-[#e2e8f0]">{group.items.join(' • ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#00ff41] text-xl font-bold">My Journey</h3>
              <p className="text-[#e2e8f0] leading-relaxed">
                My journey in technology began with curiosity about how systems work. Through building full-stack apps, DevOps pipelines, and AI projects, I developed a practical mindset focused on reliability, performance, and real-world value. I continue learning and applying modern cloud and machine learning practices to build secure, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen border-t border-primary/10">
        <ProjectsPage />
      </section>

      <section id="experience" className="min-h-screen border-t border-primary/10">
        <ExperiencePage />
      </section>

      <section id="blog" className="min-h-screen border-t border-primary/10">
        <BlogPage />
      </section>

      <section id="contact" className="min-h-screen border-t border-primary/10">
        <ContactPage />
      </section>
    </>
  )
}

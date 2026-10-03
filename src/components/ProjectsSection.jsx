import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="YourRoute"
          description="A room finder for CIT-U students. Search a room and it shows you where it is, and it still works offline."
          tech="Astro · React · Svelte"
          link="https://github.com/silidev2025/YourRoute"
        />
        <ProjectCard
          year="2026"
          title="Authenticator"
          description="My own version of Google Authenticator. It generates 2FA codes and already runs on my Android phone."
          tech="React Native · Expo"
          link="https://github.com/silidev2025/Authenticator"
        />
        <ProjectCard
          year="2026"
          title="S.I.R.E.N."
          description="An ESP32 earthquake alarm with a companion app, built for a senior high research team. It won their research competition."
          tech="ESP32 · Kotlin Multiplatform · Firebase"
          link="https://github.com/silidev2025/SIREN"
        />
        <ProjectCard
          year="2026"
          title="CITChat"
          description="A chat app for CIT students that I built as a school project."
          tech="Next.js"
          link="https://github.com/silidev2025"
        />
      </div>
    </section>
  )
}

export default ProjectsSection

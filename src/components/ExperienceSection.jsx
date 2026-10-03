import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web and mobile development, databases, and data analytics."
        />
        <TimelineItem
          period="2024"
          title="Barista"
          place="Garaje Cafe"
          description="Made drinks and handled orders behind the bar."
        />
        <TimelineItem
          period="2023"
          title="Barista"
          place="Kape Plus"
          description="My first job, making coffee and serving customers."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection

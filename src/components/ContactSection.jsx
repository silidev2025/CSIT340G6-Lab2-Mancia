import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:francismancia334@gmail.com" text="francismancia334@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/silidev2025" text="github.com/silidev2025" />
        <ContactLink label="LinkedIn" href="https://www.linkedin.com/in/francis-dave-mancia-281556413/" text="linkedin.com/in/francis-dave-mancia" />
      </ul>
    </section>
  )
}

export default ContactSection

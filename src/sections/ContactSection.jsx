import { motion, useReducedMotion } from 'framer-motion'
import SectionContainer from '../components/layout/SectionContainer'
import ContactForm from '../components/ui/ContactForm'
import ContactInfoCard from '../components/ui/ContactInfoCard'
import SectionHeading from '../components/ui/SectionHeading'
import { CONTACT_HEADER, CONTACT_INFO } from '../data/contact'

const EASE_OUT = [0.22, 1, 0.36, 1]

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion()

  const revealProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.18 },
          transition: { duration: 0.5, delay, ease: EASE_OUT },
        }

  return (
    <SectionContainer id="contact" surface="primary" className="relative overflow-hidden">
      {/* Subtle Decorative Lavender Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[-10%] h-80 w-80 rounded-full bg-bg-secondary blur-3xl"
      />

      <motion.div {...revealProps(0.04)} className="relative z-10">
        <SectionHeading
          eyebrow={CONTACT_HEADER.eyebrow}
          title={CONTACT_HEADER.title}
          description={CONTACT_HEADER.description}
          titleId="contact-heading"
        />
      </motion.div>

      <div className="relative z-10 mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* LEFT COLUMN: Contact Info & Availability */}
        <div className="space-y-6 lg:col-span-5">
          <motion.div {...revealProps(0.1)}>
            <h3 className="font-heading text-2xl font-bold text-text-primary">
              {CONTACT_INFO.heading}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-text-secondary sm:text-base">
              {CONTACT_INFO.description}
            </p>
          </motion.div>

          <div className="space-y-3.5">
            {CONTACT_INFO.channels.map((channel, index) => (
              <motion.div key={channel.id} {...revealProps(0.14 + index * 0.06)}>
                <ContactInfoCard channel={channel} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.div {...revealProps(0.18)} className="lg:col-span-7">
          <ContactForm />
        </motion.div>
      </div>
    </SectionContainer>
  )
}


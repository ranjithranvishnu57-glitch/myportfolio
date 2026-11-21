import { AlertCircle, CheckCircle2, Info, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { CONTACT_INFO } from '../../data/contact'
import Button from './Button'
import GlassCard from './GlassCard'

const INITIAL_VALUES = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateForm(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please enter a subject.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}

const INPUT_BASE_CLASSES =
  'w-full rounded-xl border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/70 transition-all duration-200 focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-accent-primary/25'

/**
 * Validated, accessible Contact Form with configurable submission endpoint.
 * Never simulates a fake success when no submission backend is configured.
 */
export default function ContactForm({ onSubmit }) {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }

    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validateForm(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus({
        type: 'error',
        message: 'Please fix the highlighted fields before submitting.',
      })
      return
    }

    setErrors({})
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      if (typeof onSubmit === 'function') {
        await onSubmit(values)
        setStatus({
          type: 'success',
          message: 'Your message has been sent successfully.',
        })
        setValues(INITIAL_VALUES)
        return
      }

      if (!CONTACT_INFO.formEndpoint) {
        setStatus({
          type: 'unconfigured',
          message:
            'Form validation passed, but no submission service is configured yet. Connect a real endpoint in src/data/contact.js (formEndpoint) to receive messages.',
        })
        return
      }

      const response = await fetch(CONTACT_INFO.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`)
      }

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully. Thank you for reaching out!',
      })
      setValues(INITIAL_VALUES)
    } catch {
      setStatus({
        type: 'error',
        message:
          'Unable to send your message right now. Please try again later or reach out directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass = (fieldName) =>
    [
      INPUT_BASE_CLASSES,
      errors[fieldName]
        ? 'border-red-400 focus:border-red-500'
        : 'border-border focus:border-accent-primary',
    ].join(' ')

  return (
    <GlassCard padding="lg" className="bg-surface-card">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-fullName"
              className="mb-1.5 block text-sm font-medium text-text-primary"
            >
              Full Name
            </label>
            <input
              id="contact-fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              disabled={isSubmitting}
              value={values.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined}
              className={fieldClass('fullName')}
            />
            {errors.fullName && (
              <p
                id="contact-fullName-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-600"
              >
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-sm font-medium text-text-primary"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={isSubmitting}
              value={values.email}
              onChange={handleChange}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className={fieldClass('email')}
            />
            {errors.email && (
              <p
                id="contact-email-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-600"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="mb-1.5 block text-sm font-medium text-text-primary"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            disabled={isSubmitting}
            value={values.subject}
            onChange={handleChange}
            placeholder="Project inquiry, internship, or collaboration"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
            className={fieldClass('subject')}
          />
          {errors.subject && (
            <p
              id="contact-subject-error"
              role="alert"
              className="mt-1.5 text-xs font-medium text-red-600"
            >
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-text-primary"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            disabled={isSubmitting}
            value={values.message}
            onChange={handleChange}
            placeholder="Tell me a little about your idea or opportunity..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={`${fieldClass('message')} resize-y`}
          />
          {errors.message && (
            <p
              id="contact-message-error"
              role="alert"
              className="mt-1.5 text-xs font-medium text-red-600"
            >
              {errors.message}
            </p>
          )}
        </div>

        {status.type !== 'idle' && (
          <div
            role="status"
            aria-live="polite"
            className={[
              'flex items-start gap-2.5 rounded-xl border p-3.5 text-xs leading-relaxed sm:text-sm',
              status.type === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                : status.type === 'error'
                  ? 'border-red-200 bg-red-50 text-red-700'
                  : 'border-accent-secondary bg-bg-secondary text-text-primary',
            ].join(' ')}
          >
            {status.type === 'success' && (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
            )}
            {status.type === 'error' && (
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
            )}
            {status.type === 'unconfigured' && (
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary" aria-hidden="true" />
            )}
            <span>{status.message}</span>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          icon={isSubmitting ? Loader2 : Send}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </GlassCard>
  )
}


'use client'

import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { Building2, CheckCircle2, Mail, Send, UserRound } from 'lucide-react'

const CONTACT_EMAIL = 'njsugcontact@gmail.com'
const MAILING_LIST_SUBJECT = 'Join NJSUG Mailing List'

type MailingListFormValues = {
  name: string
  email: string
  organization: string
  interests: string
  consent: boolean
}

type FormStatus =
  | {
      type: 'idle'
      message: ''
    }
  | {
      type: 'error' | 'success'
      message: string
    }

const initialValues: MailingListFormValues = {
  name: '',
  email: '',
  organization: '',
  interests: '',
  consent: false,
}

function buildMailtoUrl(values: MailingListFormValues) {
  const bodyLines = [
    'Hello NJSUG team,',
    '',
    'Please add me to the NJSUG mailing list.',
    '',
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.organization.trim()
      ? `Organization: ${values.organization.trim()}`
      : 'Organization:',
    values.interests.trim() ? `Interests: ${values.interests.trim()}` : 'Interests:',
    '',
    'Thank you.',
  ]

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    MAILING_LIST_SUBJECT,
  )}&body=${encodeURIComponent(bodyLines.join('\n'))}`
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function JoinMailingListForm() {
  const [values, setValues] = useState<MailingListFormValues>(initialValues)
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })

  const mailtoUrl = useMemo(() => buildMailtoUrl(values), [values])

  function updateValue<K extends keyof MailingListFormValues>(
    key: K,
    value: MailingListFormValues[K],
  ) {
    setValues((currentValues) => ({
      ...currentValues,
      [key]: value,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!values.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' })
      return
    }

    if (!isValidEmail(values.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    if (!values.consent) {
      setStatus({
        type: 'error',
        message: 'Please confirm that NJSUG may contact you about events.',
      })
      return
    }

    setStatus({
      type: 'success',
      message: 'Your mailing list request is ready in your email app.',
    })
    window.location.href = mailtoUrl
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-emerald-50">Name</span>
          <span className="mt-2 flex min-h-12 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 text-white transition focus-within:border-emerald-200/60 focus-within:bg-white/15">
            <UserRound className="h-5 w-5 shrink-0 text-emerald-100/70" aria-hidden="true" />
            <input
              value={values.name}
              onChange={(event) => updateValue('name', event.target.value)}
              className="w-full bg-transparent py-3 text-base text-white outline-none placeholder:text-emerald-50/45"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-emerald-50">Email</span>
          <span className="mt-2 flex min-h-12 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 text-white transition focus-within:border-emerald-200/60 focus-within:bg-white/15">
            <Mail className="h-5 w-5 shrink-0 text-emerald-100/70" aria-hidden="true" />
            <input
              type="email"
              value={values.email}
              onChange={(event) => updateValue('email', event.target.value)}
              className="w-full bg-transparent py-3 text-base text-white outline-none placeholder:text-emerald-50/45"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </span>
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-emerald-50">
          Organization or affiliation
        </span>
        <span className="mt-2 flex min-h-12 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 text-white transition focus-within:border-emerald-200/60 focus-within:bg-white/15">
          <Building2 className="h-5 w-5 shrink-0 text-emerald-100/70" aria-hidden="true" />
          <input
            value={values.organization}
            onChange={(event) => updateValue('organization', event.target.value)}
            className="w-full bg-transparent py-3 text-base text-white outline-none placeholder:text-emerald-50/45"
            placeholder="Optional"
            autoComplete="organization"
          />
        </span>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-emerald-50">Topics of interest</span>
        <textarea
          value={values.interests}
          onChange={(event) => updateValue('interests', event.target.value)}
          className="mt-2 min-h-28 w-full resize-y rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white outline-none transition placeholder:text-emerald-50/45 focus:border-emerald-200/60 focus:bg-white/15"
          placeholder="Optional"
        />
      </label>

      <label className="flex gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 text-sm leading-6 text-emerald-50/90">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(event) => updateValue('consent', event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 accent-emerald-200"
          required
        />
        <span>
          I agree to be contacted by NJSUG about meetings, webinars, and community
          announcements.
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Join NJSUG Mailing List
        </button>

        {status.type !== 'idle' ? (
          <p
            className={`flex items-center gap-2 text-sm ${
              status.type === 'error' ? 'text-yellow-200' : 'text-emerald-50'
            }`}
            role={status.type === 'error' ? 'alert' : 'status'}
          >
            {status.type === 'success' ? (
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            ) : null}
            <span>{status.message}</span>
            {status.type === 'success' ? (
              <a className="font-semibold underline underline-offset-4" href={mailtoUrl}>
                Open again
              </a>
            ) : null}
          </p>
        ) : null}
      </div>
    </form>
  )
}

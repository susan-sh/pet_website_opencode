'use client';

import { useId, useMemo, useState } from "react";
import Button from "@/components/ui/Button";

const CONTACT_EMAIL = "adopt@purrfectmatch.com";

type FormState = {
  name: string;
  email: string;
  subject: "general" | "adoption" | "volunteer";
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function buildMailtoHref(state: FormState) {
  const subjectPrefix =
    state.subject === "adoption"
      ? "Adoption"
      : state.subject === "volunteer"
        ? "Volunteer"
        : "General";

  const subject = `${subjectPrefix}: ${state.name || "(no name)"}`;

  const lines = [
    `Name: ${state.name || ""}`,
    `Email: ${state.email || ""}`,
    `Topic: ${subjectPrefix}`,
    "",
    state.message || "",
  ];

  const body = lines.join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};

  if (state.name.trim().length === 0) {
    errors.name = "Please enter your name.";
  }

  if (state.email.trim().length > 0) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim());
    if (!ok) errors.email = "Please enter a valid email (or leave it blank).";
  }

  if (state.message.trim().length === 0) {
    errors.message = "Please enter a message.";
  }

  return errors;
}

export default function ContactClient({ petName }: { petName?: string }) {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    subject: petName ? "adoption" : "general",
    message: petName ? `I'm interested in adopting ${petName}...` : "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const mailtoHref = useMemo(() => buildMailtoHref(state), [state]);

  async function handleCopyEmail() {
    try {
      if (!navigator.clipboard) {
        setStatus("Clipboard not available in this browser.");
        return;
      }
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setStatus("Email copied.");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus("Failed to copy. You can select and copy the email manually.");
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(state);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please fix the highlighted fields.");
      return;
    }

    setStatus("Opening your email app with a draft...");
    window.location.href = mailtoHref;
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="animate-[reveal_0.8s_ease-out_forwards]">
          <span className="text-coral font-bold tracking-wider uppercase text-sm mb-2 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8 text-balance">
            Ready to meet your new best friend?
          </h1>
          <p className="text-navy/60 text-lg mb-12 leading-relaxed">
            No backend yet: we can open your email app with a ready-to-send draft, or you can
            copy our address.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm text-coral shrink-0">
                Loc
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">Visit Us</h3>
                <p className="text-navy/60">
                  123 Whisker Way
                  <br />
                  Pawtown, CA 90210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm text-coral shrink-0">
                @
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">Email Us</h3>
                <div className="flex flex-col sm:flex-row gap-3 mt-1">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-navy/60 hover:text-coral underline decoration-coral/30 hover:decoration-coral transition-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="text-xs font-bold uppercase tracking-wide px-3 py-1 bg-navy/5 hover:bg-navy/10 rounded-md transition-colors text-navy/50"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <p className="text-xs text-navy/40 mt-2">We usually reply within 1-2 business days.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm text-coral shrink-0">
                Tel
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">Call Us</h3>
                <p className="text-navy/60">(555) 123-4567</p>
                <p className="text-xs text-navy/40 mt-1">Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-navy/5 border border-navy/5 animate-[reveal_0.8s_ease-out_0.2s_forwards] opacity-0 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal/10 rounded-full blur-2xl -z-10" />

          <div aria-live="polite" className="sr-only">
            {status}
          </div>

          <form className="space-y-6" onSubmit={onSubmit}>
            {petName && (
              <div className="bg-teal-light text-teal p-4 rounded-xl text-sm font-medium mb-6 flex items-center gap-2">
                <span>Pet:</span>
                <strong className="underline">{petName}</strong>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor={nameId} className="text-sm font-bold text-navy ml-1">
                  Name
                </label>
                <input
                  type="text"
                  id={nameId}
                  value={state.name}
                  onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                  className={`w-full px-4 py-3 bg-cream rounded-xl border outline-none transition-all font-medium text-navy placeholder:text-navy/30 focus:bg-white focus:border-coral focus:ring-4 focus:ring-coral/10 ${
                    errors.name ? "border-red-400" : "border-transparent"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor={emailId} className="text-sm font-bold text-navy ml-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id={emailId}
                  value={state.email}
                  onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                  className={`w-full px-4 py-3 bg-cream rounded-xl border outline-none transition-all font-medium text-navy placeholder:text-navy/30 focus:bg-white focus:border-coral focus:ring-4 focus:ring-coral/10 ${
                    errors.email ? "border-red-400" : "border-transparent"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor={subjectId} className="text-sm font-bold text-navy ml-1">
                Topic
              </label>
              <select
                id={subjectId}
                value={state.subject}
                onChange={(e) =>
                  setState((s) => ({ ...s, subject: e.target.value as FormState["subject"] }))
                }
                className="w-full px-4 py-3 bg-cream rounded-xl border-transparent focus:bg-white focus:border-coral focus:ring-4 focus:ring-coral/10 outline-none transition-all font-medium text-navy cursor-pointer appearance-none"
              >
                <option value="general">General Inquiry</option>
                <option value="adoption">Adoption</option>
                <option value="volunteer">Volunteering</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor={messageId} className="text-sm font-bold text-navy ml-1">
                Message
              </label>
              <textarea
                id={messageId}
                rows={4}
                value={state.message}
                onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                className={`w-full px-4 py-3 bg-cream rounded-xl border outline-none transition-all font-medium text-navy placeholder:text-navy/30 resize-none focus:bg-white focus:border-coral focus:ring-4 focus:ring-coral/10 ${
                  errors.message ? "border-red-400" : "border-transparent"
                }`}
                placeholder="How can we help you?"
              />
              {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full mt-4">
              Open Email Draft
            </Button>

            <a href={mailtoHref} className="block text-center text-xs text-navy/50 underline">
              Or click here to compose
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

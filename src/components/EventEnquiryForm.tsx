"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function EventEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name") as string,
      phone: form.get("phone") as string,
      email: form.get("email") as string,
      inquiryType: "event" as const,
      eventDate: form.get("eventDate") as string,
      eventType: form.get("eventType") as string,
      guests: form.get("guests") as string,
      message: form.get("message") as string,
    };

    try {
      const res = await fetch("/api/booking-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Couldn't reach the server. Please try again, or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-pine/5 border border-pine/20 rounded-md p-8 text-center">
        <CheckCircle2 className="w-8 h-8 text-pine mx-auto" />
        <p className="mt-3 text-ink font-medium">Enquiry sent</p>
        <p className="mt-1 text-sm text-ink-soft">
          The events team will call you back shortly to discuss your date.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Your name"
          className="border border-ink/15 rounded-sm px-4 py-3 text-sm bg-white focus:border-brass outline-none"
        />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone number"
          className="border border-ink/15 rounded-sm px-4 py-3 text-sm bg-white focus:border-brass outline-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="eventDate"
          type="date"
          className="border border-ink/15 rounded-sm px-4 py-3 text-sm bg-white focus:border-brass outline-none"
        />
        <select
          name="eventType"
          className="border border-ink/15 rounded-sm px-4 py-3 text-sm bg-white focus:border-brass outline-none"
        >
          <option value="">Event type</option>
          <option>Wedding</option>
          <option>Reception</option>
          <option>Birthday</option>
          <option>Corporate Event</option>
          <option>Other</option>
        </select>
      </div>

      <input
        name="guests"
        placeholder="Approximate guest count"
        className="w-full border border-ink/15 rounded-sm px-4 py-3 text-sm bg-white focus:border-brass outline-none"
      />

      <textarea
        name="message"
        rows={3}
        placeholder="Anything else we should know?"
        className="w-full border border-ink/15 rounded-sm px-4 py-3 text-sm bg-white focus:border-brass outline-none resize-none"
      />

      {status === "error" && (
        <p className="text-sm text-clay-dark">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto bg-clay hover:bg-clay-dark disabled:opacity-60 text-cream font-medium px-7 py-3 rounded-sm text-sm flex items-center justify-center gap-2 transition-colors"
      >
        {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
        Send enquiry
      </button>
    </form>
  );
}

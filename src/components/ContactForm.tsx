"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      trackEvent("form_submit", { form: "contact" });
      trackEvent("quote_request", { form: "contact" });
      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-3xl bg-mist/70 p-7 sm:p-9">
        <h2 className="font-heading text-3xl font-medium text-moss">
          Thanks — we&apos;ve got your enquiry
        </h2>
        <p className="mt-3 text-ink/65">
          Most quotes are turned around within 24 hours. If it&apos;s urgent,
          give us a call or drop us a WhatsApp.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex h-11 items-center rounded-full border border-ink/15 px-5 text-sm font-medium"
          onClick={() => setState("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-3xl border border-ink/8 bg-linen p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" className="h-11 rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="h-11 rounded-xl"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-11 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="postcode">Postcode</Label>
          <Input
            id="postcode"
            name="postcode"
            required
            autoComplete="postal-code"
            className="h-11 rounded-xl"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us a bit about your kitchen — doors, worktops, or a full wrap."
          className="rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="photo">Photo of your kitchen (optional)</Label>
        <Input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="cursor-pointer rounded-xl pt-1.5 file:mr-3"
        />
        <p className="text-xs text-ink/50">
          A quick snap helps us quote more accurately. Max 5MB.
        </p>
      </div>

      {state === "error" ? (
        <p className="rounded-xl bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-moss px-7 text-sm font-medium text-linen transition hover:bg-moss/90 disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? "Sending…" : "Get a Free Quote"}
      </button>
    </form>
  );
}

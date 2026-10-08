import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Droplets,
  Cog,
  Factory,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";
import { VeroxChatbot } from "@/components/VeroxChatbot";

import oilHero from "@/assets/oil-hero.jpg";
import oilGears from "@/assets/oil-gears.jpg";
import verox5w30 from "@/assets/verox-5w30-bg.jpg";
import verox10w40 from "@/assets/verox-10w40-bg.jpg";
import verox20w50 from "@/assets/verox-20w50-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verox Lubricants — Engineered for the Extreme" },
      {
        name: "description",
        content:
          "Verox premium engine oils and industrial lubricants with MaxPower Technology. 50% more wear protection, German engineering, API certified.",
      },
      { property: "og:title", content: "Verox Lubricants — Engineered for the Extreme" },
      {
        property: "og:description",
        content:
          "Premium engine oils and industrial lubricants with MaxPower Technology. 50% more wear protection vs. industry standards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    img: verox5w30,
    name: "Verox 5W-30",
    spec: "SAE 5W-30 · API SP",
    tag: "Full Synthetic",
    desc: "MaxPower Technology for modern gasoline engines. Prevents breakdown in extreme conditions.",
    accent: "text-brandred",
  },
  {
    img: verox10w40,
    name: "Verox 10W-40",
    spec: "SAE 10W-40 · API SN",
    tag: "Semi Synthetic",
    desc: "Balanced protection for daily drivers and high-mileage engines, with premium seal conditioners.",
    accent: "text-brandblue",
  },
  {
    img: verox20w50,
    name: "Verox 20W-50",
    spec: "SAE 20W-50 · API SN",
    tag: "Heavy Duty",
    desc: "High-viscosity film strength for hot climates, towing, and hard-working engines.",
    accent: "text-oil",
  },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/veroxlubricants" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/veroxlubricants" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/veroxlubricants" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/veroxlubricants" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@veroxlubricants" },
  { icon: Mail, label: "Email", href: "mailto:quote@verox.com" },
];

const industries = [
  { icon: Cog, label: "Automotive & Fleet" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Droplets, label: "Marine" },
  { icon: ShieldCheck, label: "Power Generation" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <span className="font-display text-2xl font-semibold tracking-[0.18em]">
            VEROX<span className="text-oil">.</span>
          </span>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#products" className="transition-colors hover:text-foreground">Products</a>
            <a href="#technology" className="transition-colors hover:text-foreground">Technology</a>
            <a href="#industries" className="transition-colors hover:text-foreground">Industries</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero with looping oil animation */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={oilHero}
            alt="Golden Verox lubricant oil in motion"
            width={1920}
            height={1088}
            className="animate-oil-drift h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          <div className="light-streak" aria-hidden />
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {[
              [12, 0], [28, 1.6], [45, 0.8], [62, 2.4], [74, 0.3], [86, 1.9], [94, 3.1], [55, 3.4],
            ].map(([left, delay], i) => (
              <span
                key={i}
                className="oil-drop"
                style={{ left: `${left}%`, animationDelay: `${delay}s`, animationDuration: `${3.5 + (i % 3)}s` }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-24">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.35em] text-oil">
            German-engineered lubricants
          </p>
          <h1
            className="animate-rise mt-5 font-display text-6xl font-semibold uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            Precision
            <br />
            in every
            <br />
            <span className="text-oil-sheen">drop.</span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Verox MaxPower Technology delivers 50% more wear protection than
            industry standards — keeping engines alive under extreme heat,
            load, and time.
          </p>
          <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#products"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore the range <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-md border border-border bg-card/60 px-6 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-card"
            >
              Request a quote
            </a>
          </div>

          <div className="animate-rise mt-14 grid max-w-lg grid-cols-3 gap-6" style={{ animationDelay: "320ms" }}>
            {[
              ["50%", "More wear protection"],
              ["-40°", "Cold-flow start"],
              ["4L", "German-pack format"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-semibold text-oil">{stat}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oil">The range</p>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              MaxPower engine oils
            </h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">
            03 grades
          </span>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="sheen-card group overflow-hidden rounded-xl border border-border"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={`${p.name} bottle`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${p.accent}`}>
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold uppercase">{p.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {p.spec}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={oilGears}
              alt="Golden oil film coating precision-machined gear teeth"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oil">
              MaxPower Technology
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-tight tracking-tight sm:text-5xl">
              A film that never lets go
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Every Verox blend is engineered to hold its protective film under
              extreme pressure and temperature — so metal never meets metal,
              even when the gauge says it should.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "50% more wear protection vs. industry standards",
                "Premium seal conditioners treat and prevent leaks",
                "Certified to API SP / SN and German TÜV standards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-oil" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oil">Industries served</p>
        <h2 className="mt-3 font-display text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
          Built for the floor
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {industries.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="sheen-card flex flex-col gap-4 rounded-xl border border-border p-6"
            >
              <Icon className="size-6 text-oil" />
              <span className="font-display text-lg font-semibold uppercase tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oil">
            Talk to a Verox engineer
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold uppercase leading-tight tracking-tight sm:text-5xl">
            Get a matched grade & quote
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Send your application and load profile — we return a matched Verox
            grade within one business day.
          </p>
          <a
            href="mailto:quote@verox.com"
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-8 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a quote <ArrowRight className="size-4" />
          </a>
          <p className="mt-5 text-sm text-muted-foreground">quote@verox.com</p>

          <div className="mt-10 flex items-center justify-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verox on ${label}`}
                className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-oil hover:text-oil"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
          <span className="font-display text-base font-semibold tracking-[0.18em] text-foreground">
            VEROX<span className="text-oil">.</span>
          </span>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verox on ${label}`}
                className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-oil"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <span>© 2026 Verox Lubricants · Engineered films</span>
        </div>
      </footer>

      <VeroxChatbot />
    </div>
  );
}

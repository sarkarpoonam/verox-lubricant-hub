import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { VeroxChatbot } from "@/components/VeroxChatbot";

const veroxMark = "/images/verox-bottle-mark.png";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) {
      return { meta: [{ title: "Product — Verox Lubricants" }] };
    }
    return {
      meta: [
        { title: `${p.name} — Verox Lubricants` },
        { name: "description", content: p.desc },
        { property: "og:title", content: `${p.name} — Verox Lubricants` },
        { property: "og:description", content: p.desc },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const others = products.filter((o) => o.slug !== p.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={veroxMark} alt="Verox logo" className="h-9 w-9 object-contain" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-black uppercase tracking-[0.04em] sm:text-2xl">
                Verox
              </span>
              <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.42em] text-foreground/80 sm:text-xs">
                Lubricants
              </span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <span className={`text-[11px] font-bold uppercase tracking-[0.25em] ${p.accent}`}>
          {p.tag}
        </span>
        <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
          {p.name}
        </h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {p.spec}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {p.hero}
        </p>
      </section>

      {/* Image */}
      <section className="mx-auto max-w-6xl px-5">
        <div className="sheen-card overflow-hidden rounded-2xl border border-border">
          <img
            src={p.img}
            alt={`${p.name} application`}
            width={1024}
            height={768}
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            Key benefits
          </h2>
          <ul className="mt-5 space-y-3">
            {p.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-oil" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            Applications
          </h2>
          <ul className="mt-5 space-y-3">
            {p.applications.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-oil" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Grades */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-display text-xl font-bold uppercase tracking-wide">
          Available grades
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {p.grades.map((g) => (
            <span
              key={g}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-wider"
            >
              {g}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase">
              Need {p.name.toLowerCase()} for your business?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us your volumes and application — we'll send a tailored quote.
            </p>
          </div>
          <a
            href="mailto:quote@verox.com"
            className="inline-flex items-center gap-2 rounded-lg bg-oil px-6 py-3 text-sm font-bold uppercase tracking-wider text-background transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" />
            Request a quote
          </a>
        </div>
      </section>

      {/* Other products */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-xl font-bold uppercase tracking-wide">
          Explore the rest of the range
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/products/$slug"
              params={{ slug: o.slug }}
              className="sheen-card group overflow-hidden rounded-xl border border-border transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={o.img}
                  alt={`${o.name} application`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold uppercase">{o.name}</h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-oil">
                  View range
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <VeroxChatbot />
    </div>
  );
}

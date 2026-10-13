import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: p.slug }}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-oil rounded-xl"
    >
      <article className="sheen-card group relative overflow-hidden rounded-xl border border-border transition-transform duration-500 hover:-translate-y-1.5">
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={p.img}
            alt={`${p.name} application`}
            width={1024}
            height={768}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-oil">
            View range
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}

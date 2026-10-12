import type { CSSProperties } from "react";

export type Product = {
  img: string;
  name: string;
  spec: string;
  tag: string;
  desc: string;
  accent: string;
  glow: string;
  delay: string;
};

export function ProductCard({ p }: { p: Product }) {
  const glowVar = { "--glow": p.glow } as CSSProperties;

  return (
    <article className="sheen-card group relative overflow-hidden rounded-xl border border-border transition-transform duration-500 hover:-translate-y-1.5">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <div
          className="animate-bottle-float h-full w-full"
          style={{ animationDelay: p.delay }}
        >
          <img
            src={p.img}
            alt={`${p.name} application`}
            width={1024}
            height={768}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <span className="product-glow" style={glowVar} aria-hidden />
        <span className="bottle-glint" style={{ animationDelay: p.delay }} aria-hidden />
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
  );
}

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import veroxMark from "@/assets/verox-bottle-mark.png";

type Msg = { from: "bot" | "user"; text: string };

const answers: { keys: string[]; reply: string }[] = [
  {
    keys: ["5w-30", "5w30", "5w 30"],
    reply:
      "Verox 5W-30 is our full-synthetic grade with MaxPower Technology — ideal for modern gasoline engines. It's API SP certified and prevents breakdown in extreme conditions.",
  },
  {
    keys: ["10w-40", "10w40", "10w 40"],
    reply:
      "Verox 10W-40 is a semi-synthetic oil for daily drivers and high-mileage engines, with premium seal conditioners that treat and prevent leaks.",
  },
  {
    keys: ["20w-50", "20w50", "20w 50"],
    reply:
      "Verox 20W-50 is our heavy-duty grade — high-viscosity film strength for hot climates, towing, and hard-working engines.",
  },
  {
    keys: ["price", "cost", "quote", "buy", "order", "distributor"],
    reply:
      "For pricing and orders, email quote@verox.com with your application and quantity — a Verox engineer returns a matched grade and quote within one business day.",
  },
  {
    keys: ["wear", "protection", "technology", "maxpower"],
    reply:
      "MaxPower Technology delivers 50% more wear protection than industry standards. The protective film holds under extreme pressure and temperature, so metal never meets metal.",
  },
  {
    keys: ["certif", "api", "tuv", "standard"],
    reply:
      "All Verox oils are certified to API SP / SN and German TÜV standards.",
  },
  {
    keys: ["contact", "email", "phone", "reach", "talk"],
    reply:
      "You can reach us at quote@verox.com, or use the Contact section at the bottom of this page. We reply within one business day.",
  },
  {
    keys: ["hello", "hey", "salam", "assalam"],
    reply: "Hello! Ask me about Verox oil grades, pricing, certifications, or how to get a quote.",
  },
];

const fallback =
  "I can help with Verox oil grades (5W-30, 10W-40, 20W-50), pricing & quotes, certifications, and contact info. What would you like to know?";

const quickReplies = ["Which oil for my car?", "Get a quote", "Certifications"];

function getReply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("oil") || q.includes("car") || q.includes("engine") || q.includes("which") || q.includes("recommend")) {
    return "For modern gasoline engines, choose Verox 5W-30 (full synthetic). For daily drivers and high-mileage engines, 10W-40. For hot climates, towing, or heavy duty, 20W-50. Tell me your vehicle and I can narrow it down.";
  }
  if (/\bhi\b/.test(q)) {
    return "Hello! Ask me about Verox oil grades, pricing, certifications, or how to get a quote.";
  }
  for (const a of answers) {
    if (a.keys.some((k) => q.includes(k))) return a.reply;
  }
  return fallback;
}

export function VeroxChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Hi, I'm Vero — the Verox assistant. Ask me about our oil grades, pricing, or certifications.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    const reply = getReply(trimmed);
    window.setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 500);
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/40 transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/50">
          <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-secondary">
               <img src={veroxMark} alt="Verox logo" className="size-6 object-contain" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold uppercase tracking-wide leading-none">
                Vero
              </p>
              <p className="text-[11px] text-muted-foreground">Verox assistant · replies instantly</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 px-4 pb-2">
            {quickReplies.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground transition-colors hover:border-oil hover:text-foreground"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            className="flex items-center gap-2 border-t border-border p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Verox oils…"
              className="h-10 flex-1 rounded-md border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-ring"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

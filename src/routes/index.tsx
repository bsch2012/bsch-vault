import { createFileRoute } from "@tanstack/react-router";
import coverObserver from "@/assets/cover-observer.jpg";
import coverWatcher from "@/assets/cover-watcher.jpg";
import coverCoffee from "@/assets/cover-coffee.jpg";
import coverSilence from "@/assets/cover-silence.jpg";
import coverToto from "@/assets/cover-toto.jpg";
import coverJakartaAltered from "@/assets/cover-jakarta-altered.jpg";
import coverFloraNew from "@/assets/cover-flora-new.jpg";
import coverRoyalCanin from "@/assets/cover-royal-canin.jpg";
import coverObserverNew from "@/assets/cover-observer-new.jpg";
import portrait from "@/assets/portrait.jpg";
import showreelPoster from "@/assets/showreel-poster.jpg";
import logoFlickart from "@/assets/logo-flickart.jpg";
import logoFlora from "@/assets/logo-flora.svg";
import logoHedra from "@/assets/logo-hedra.png";
import logoInvideo from "@/assets/logo-invideo.png";
import logoLovart from "@/assets/logo-lovart.png";
import logoOpenart from "@/assets/logo-openart.jpg";
import logoPixverse from "@/assets/logo-pixverse.jpg";
import logoYouart from "@/assets/logo-youart.jpg";
import logoVideorebirth from "@/assets/logo-videorebirth.jpg";
import logoYukyuk from "@/assets/logo-yukyuk.png";
import logoTapnow from "@/assets/logo-tapnow.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_NUMBER = "6285121361680";
const WA_MESSAGE = "Halo Basko, saya tertarik diskusi soal BSCH.VAULT";
const buildWaUrl = (message: string = WA_MESSAGE) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
const WA_URL = buildWaUrl();
const ECOSYSTEM_URL = "https://s.id/bschvault";

type Work = {
  title: string;
  type: string;
  role: string;
  year: string;
  src: string;
  w: number;
  h: number;
  url: string;
};

const works: Work[] = [
  { title: "MEMORIES", type: "AI Short Film", role: "Director", year: "2026", src: coverObserverNew, w: 1024, h: 1280, url: "https://youtu.be/ixRflhAs3Wk" },
  { title: "THE WATCHER", type: "AI Experimental · Auteur System", role: "Director", year: "2026", src: coverWatcher, w: 1024, h: 900, url: "https://www.youtube.com/watch?v=CoYRdLExc1k" },
  { title: "COFFEE FOR TWO", type: "AI Short Film", role: "Director", year: "2026", src: coverCoffee, w: 1024, h: 768, url: "https://www.youtube.com/watch?v=RJ93Tx3HqIA" },
  { title: "SILENCE", type: "AI Short Film", role: "Director", year: "2026", src: coverSilence, w: 1024, h: 1400, url: "https://www.instagram.com/reel/Dar9JT7PNiq/" },
  { title: "ROYAL CANIN", type: "Commercial", role: "Director", year: "2025", src: coverRoyalCanin, w: 1024, h: 1200, url: "https://youtu.be/E5UsdypRPKQ" },
  { title: "TOTO TOUCHLESS", type: "Commercial", role: "Director", year: "2025", src: coverToto, w: 1024, h: 1024, url: "https://youtu.be/VreQEzAD4dE" },
  { title: "FLORA", type: "AI Experimental", role: "AI Directing", year: "2026", src: coverFloraNew, w: 1024, h: 1280, url: "https://www.instagram.com/reel/DaNhj67SZyK/" },
  { title: "JAKARTA ALTERED", type: "Personal Project", role: "Reimagining Jakarta", year: "2026", src: coverJakartaAltered, w: 1024, h: 900, url: "https://www.instagram.com/p/DaJ90PNEtNw/" },
];

const filmography = [
  { title: "PT SEIV Indonesia — Company Profile", role: "DIRECTOR", year: "2022", url: "https://www.youtube.com/watch?v=inuXpMu_FXs" },
  { title: "TARO TVC", role: "PRODUCER", year: "2022", url: "https://www.youtube.com/watch?v=kxzThqElmcw" },
  { title: "HUT RI", role: "EDITOR", year: "2026", url: "https://www.youtube.com/watch?v=M6Shc03YkC8" },
  { title: "ROYAL CANIN — #LebihDekatLebihSehat", role: "DIRECTOR", year: "2025", url: "https://www.youtube.com/watch?v=b9waKtbHGNg" },
  { title: "Beauty & Fun — Kimia Farma", role: "DIRECTOR", year: "2025", url: "https://www.youtube.com/watch?v=NXoEqGtJ1D0" },
  { title: "RC Breeder Wadah Pontiroler", role: "DIRECTOR / EDITOR", year: "2024", url: "https://www.youtube.com/watch?v=bxbI67IL3Ps" },
  { title: "TOTO Touchless — Greysia Polii", role: "DIRECTOR", year: "2023", url: "https://youtu.be/VreQEzAD4dE" },
  { title: "DJKI Docuseries — Eric Soekamti", role: "EDITOR", year: "2023", url: "https://www.youtube.com/watch?v=c8wv2S07yfY" },
  { title: "CLASMILD Authenticity — Petra Sihombing", role: "PRODUCER", year: "2023", url: "https://www.youtube.com/watch?v=iu9Ui-ysiFk" },
  { title: "Bank BTN x Podcast Ancur", role: "DIRECTOR", year: "2022", url: "https://www.youtube.com/watch?v=6yZvdUoWVbs" },
  { title: "Bank Mandiri E-Cash", role: "DIRECTOR", year: "2021", url: "https://www.youtube.com/watch?v=m9xCu6NMsKk" },
  { title: "LIXIL Commercial", role: "DIRECTOR", year: "2021", url: "https://www.youtube.com/watch?v=nlNbICRRN84" },
  { title: "Dove at Atma Jaya", role: "DIRECTOR", year: "2020", url: "https://www.youtube.com/watch?v=PxNuJrIsPGk" },
  { title: "Wonderful Indonesia — Soul of Adventure", role: "DOP", year: "2019", url: "https://www.youtube.com/watch?v=r0hzjOjikt0" },
];

const partners: { name: string; url: string; logo?: string }[] = [
  { name: "FlickArt", url: "https://s.id/FlickArt", logo: logoFlickart },
  { name: "Lovart", url: "https://www.lovart.ai/home", logo: logoLovart },
  { name: "Flora", url: "https://s.id/FloraFauna", logo: logoFlora },
  { name: "Hedra", url: "https://s.id/HedraLabs", logo: logoHedra },
  { name: "InVideo", url: "https://s.id/InVideo", logo: logoInvideo },
  { name: "YouArt", url: "https://s.id/YouArt", logo: logoYouart },
  { name: "PixVerse", url: "https://s.id/PixVerse_", logo: logoPixverse },
  { name: "OpenArt", url: "https://s.id/OpenArtCreative", logo: logoOpenart },
  { name: "TapNow", url: "https://s.id/TapNow", logo: logoTapnow },
  { name: "YukYuk", url: "https://s.id/YukYukID", logo: logoYukyuk },
  { name: "VideoRebirth", url: "https://s.id/bschvault", logo: logoVideorebirth },
];

const services = [
  {
    k: "Paket A",
    t: "AI Content Setup",
    cadence: "One-time",
    price: "Rp7.5jt",
    d: "Your brand's complete AI content system: visual identity, prompt library, and workflow — handed over so your team can run it.",
    highlight: false,
  },
  {
    k: "Paket B",
    t: "AI Content Monthly",
    cadence: "Retainer",
    price: "Rp3.5jt / month",
    originalPrice: "Rp5jt",
    badge: "Special price for local UMKM",
    d: "8 pieces per month (2 posts per week). Image + caption, including 1–2 AI videos, produced under one director's eye.",
    highlight: true,
  },
  {
    k: "Paket C",
    t: "Production Hybrid",
    cadence: "Per project",
    price: "Rp10 – 25jt",
    d: "Full direction: AI + real production for commercials and brand films. Treatment, shoot, edit, grade — end to end. Final scope and price depend on the project brief.",
    highlight: false,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-vault-phosphor selection:text-vault-black">
      <Nav />
      <Hero />
      <Partners />
      <Showreel />
      <Marquee />
      <Works />
      <Filmography />
      <HowIDirect />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-display text-sm tracking-[0.2em]">
          <span className="inline-block h-2 w-2 rounded-full bg-vault-phosphor shadow-[0_0_12px_var(--vault-phosphor)]" />
          BSCH.VAULT
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
          <a href="#showreel" className="hover:text-vault-peach transition">Showreel</a>
          <a href="#partners" className="hover:text-vault-peach transition">Partners</a>
          <a href="#works" className="hover:text-vault-peach transition">Works</a>
          <a href="#method" className="hover:text-vault-peach transition">Method</a>
          <a href="#services" className="hover:text-vault-peach transition">Packages</a>
          <a href="#filmo" className="hover:text-vault-peach transition">Credits</a>
          <a href="#contact" className="hover:text-vault-peach transition">Contact</a>
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-vault-phosphor/50 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-vault-phosphor hover:bg-vault-phosphor hover:text-vault-black transition"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-40 pb-24 md:px-10 md:pt-52 md:pb-32 grain">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--vault-phosphor), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-8 bg-vault-tobacco" />
          Jakarta · 15+ Years · AI Director
        </div>
        <h1 className="mt-8 font-display text-[18vw] leading-[0.85] tracking-[-0.05em] text-vault-peach md:text-[11rem]">
          BSCH<span className="text-vault-tobacco">.</span>
          <span className="italic text-vault-phosphor">VAULT</span>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <p className="text-balance text-lg leading-relaxed text-muted-foreground md:col-span-2">
            Visual Consultant & AI Creative Director. 15+ years directing, shooting, and editing
            commercial film in Jakarta — now directing AI the same way I direct a crew.
          </p>
          <div className="flex flex-col justify-end gap-4">
            <a
              href="#showreel"
              className="group inline-flex items-center justify-between gap-4 rounded-full bg-vault-peach px-6 py-4 font-display text-base tracking-tight text-vault-black transition hover:bg-vault-phosphor"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-vault-black text-vault-peach group-hover:bg-vault-black">
                  ▶
                </span>
                Watch Showreel
              </span>
              <span className="text-xs uppercase tracking-[0.2em] opacity-60">Watch</span>
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.25em] text-vault-peach/80 transition hover:border-vault-phosphor hover:text-vault-phosphor"
            >
              <span>Chat on WhatsApp</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Showreel() {
  return (
    <section id="showreel" className="border-t border-border px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-vault-phosphor">Main showreel</div>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-6xl">Ninety seconds. One take.</h2>
          </div>
          <p className="max-w-sm text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Director & Editor · AI Pipeline
          </p>
        </div>

        <a
          href="https://youtu.be/9hTUxx768I8"
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-md border border-border bg-vault-black"
          aria-label="Play BSCH.VAULT showreel 2026"
        >
          <div className="relative aspect-[16/9]">
            <img
              src={showreelPoster}
              alt="Showreel 2026 poster frame"
              width={1920}
              height={1080}
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:opacity-100 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vault-black via-vault-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-4 rounded-full bg-vault-peach/95 py-4 pl-5 pr-7 font-display text-vault-black shadow-[0_0_60px_var(--vault-phosphor)] transition group-hover:bg-vault-phosphor">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-vault-black text-vault-peach text-sm">▶</span>
                <span className="text-lg tracking-tight">Play Showreel 2026</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-vault-peach/70">
            <span>00:00 / 01:30</span>
            <span className="hidden md:inline">BSCH.VAULT — REEL 2026 — 2.39 : 1</span>
            <span>4K · H.264</span>
          </div>
        </a>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Showreel 2026. Producer, Director of Photography, Editor.
        </p>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["FlickArt", "Lovart", "Flora", "Hedra", "InVideo", "YouArt", "PixVerse", "OpenArt", "TapNow", "YukYuk"];
  return (
    <div className="border-y border-border bg-vault-black py-5 overflow-hidden" aria-hidden>
      <div className="marquee flex w-max gap-14 whitespace-nowrap font-display text-2xl tracking-[-0.02em] text-vault-peach md:text-3xl">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-14">
            {t}
            <span className="inline-block h-2 w-2 rounded-full bg-vault-phosphor shadow-[0_0_10px_var(--vault-phosphor)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Works() {
  return (
    <section id="works" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-vault-phosphor">Selected works — 2023 / 2026</div>
            <h2 className="mt-3 font-display text-5xl tracking-[-0.03em] md:text-7xl">From the vault.</h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">
            {works.length.toString().padStart(2, "0")} pieces
          </span>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {works.map((w, i) => (
            <a
              key={w.title}
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 break-inside-avoid overflow-hidden rounded-md border border-border bg-card group block"
            >
              <div className="relative overflow-hidden">
                <img
                  src={w.src}
                  alt={w.title}
                  width={w.w}
                  height={w.h}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-t from-vault-black/80 via-transparent" />
              </div>
              <figcaption className="flex items-start justify-between gap-4 px-4 py-4 text-xs">
                <div className="min-w-0">
                  <div className="font-display text-sm text-vault-peach truncate">{w.title}</div>
                  <div className="mt-1 uppercase tracking-[0.2em] text-muted-foreground">
                    {w.type} <span className="text-vault-tobacco">·</span> {w.role}
                  </div>
                </div>
                <span className="font-display text-vault-phosphor">{w.year}</span>
              </figcaption>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIDirect() {
  return (
    <section id="method" className="border-t border-border bg-vault-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="overflow-hidden rounded-md border border-border">
            <img src={portrait} alt="Portrait" width={900} height={1100} loading="lazy" className="h-auto w-full max-h-[520px] object-cover object-[50%_25%]" />
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-sm">
            {[
              ["Years", "15+"],
              ["Roles", "AI Cinematic Content | Director · Producer"],
              ["Base", "Jakarta, ID"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-display text-sm text-vault-peach">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-7 md:pt-8">
          <div className="text-xs uppercase tracking-[0.3em] text-vault-phosphor">How I direct AI</div>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl">
            I do not prompt and pray. <br />
            <span className="italic text-vault-tobacco">I direct.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Fifteen years on set as a director, DOP, and editor taught me what a frame needs before
            it exists: point of view, camera language, lighting logic, pacing, continuity. I bring
            that same discipline to AI production. Every shot starts with a director's brief —
            mood, lens, movement, performance — and the AI executes it like a crew would.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vault-peach">
            The result is not AI content that looks like AI content. It is cinema that happens to be
            built with new tools.
          </p>

          <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
            {[
              ["01", "Director's brief", "Mood, lens, movement, performance — written before a single generation."],
              ["02", "Crewed AI stack", "Nano Banana 2 · Seedance 2.0 · Kling 3.0 — each treated as a department."],
              ["03", "Editor's cut", "Continuity, pacing, grade. Finished frame-by-frame, not batch-exported."],
            ].map(([n, t, d]) => (
              <li key={n} className="bg-background p-6">
                <div className="font-display text-xs text-vault-phosphor">{n}</div>
                <div className="mt-3 font-display text-lg text-vault-peach">{t}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-vault-phosphor">Services</div>
            <h2 className="mt-3 font-display text-5xl tracking-[-0.03em] md:text-7xl">
              Work with the vault.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-vault-phosphor px-5 py-3 text-xs uppercase tracking-[0.2em] text-vault-black transition hover:bg-vault-peach"
            >
              Chat on WhatsApp →
            </a>
            <a
              href="mailto:creative@bschvault.space"
              className="rounded-full border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] text-vault-peach transition hover:border-vault-phosphor hover:text-vault-phosphor"
            >
              Email us ↗
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.k}
              className={
                "flex flex-col gap-6 p-8 md:p-10 transition " +
                (s.highlight ? "bg-card ring-1 ring-vault-phosphor/40" : "bg-background hover:bg-card")
              }
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[0.25em] text-vault-tobacco">
                  {s.k} · {s.cadence}
                </span>
                {s.highlight && (
                  <span className="rounded-full bg-vault-phosphor/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-vault-phosphor">
                    Popular
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-3xl text-vault-peach">{s.t}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  {s.originalPrice && (
                    <span className="font-display text-base text-muted-foreground line-through">
                      {s.originalPrice}
                    </span>
                  )}
                  <span className="font-display text-lg text-vault-phosphor">{s.price}</span>
                </div>
                {s.badge && (
                  <div className="mt-2 inline-block rounded-full bg-vault-tobacco/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-vault-peach">
                    {s.badge}
                  </div>
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          All packages are directed personally — no white-label, no reseller layer. Invoicing in IDR,
          scope confirmed in writing before we start.
        </p>
      </div>
    </section>
  );
}

function Filmography() {
  return (
    <section id="filmo" className="border-t border-border bg-vault-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-vault-phosphor">Production credits</div>
          <h2 className="mt-3 font-display text-5xl tracking-[-0.03em] md:text-7xl">Filmography.</h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Production credits — 15 years of directing, DOP & editing. Full portfolio on request.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filmography.map((f) => (
            <a
              key={f.title}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-md border border-border bg-card p-5 transition hover:border-vault-phosphor hover:bg-vault-black"
            >
              <h3 className="font-display text-sm tracking-[-0.02em] text-vault-peach group-hover:text-vault-phosphor leading-snug">
                {f.title}
              </h3>
              <span className="mt-3 text-[10px] uppercase tracking-[0.2em] text-vault-tobacco">
                {f.role} · {f.year}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-vault-phosphor">Ecosystem</div>
          <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-6xl">Creative Partners.</h2>
          <p className="mt-2 text-sm text-muted-foreground">Exclusive creator perks — special rates inside.</p>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border sm:grid-cols-3 md:grid-cols-5">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-background px-5 py-6 transition hover:bg-card"
            >
              {p.logo && (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white p-1.5">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-full w-full object-contain"
                  />
                </span>
              )}
              <span className="font-display text-sm tracking-[-0.02em] text-vault-phosphor transition group-hover:text-vault-peach">
                {p.name}
              </span>
              <span className="ml-auto text-xs text-muted-foreground opacity-0 transition group-hover:opacity-100">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-vault-black px-6 py-28 md:px-10 md:py-40 grain">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-xs uppercase tracking-[0.3em] text-vault-phosphor">Contact & ecosystem</div>
        <h2 className="mt-4 font-display text-[13vw] leading-[0.95] tracking-[-0.04em] text-vault-peach md:text-[9rem]">
          Work<br />
          <span className="italic text-vault-tobacco">with me.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-md border border-vault-phosphor/40 bg-vault-phosphor/10 p-8 transition hover:bg-vault-phosphor hover:text-vault-black"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-vault-phosphor group-hover:text-vault-black">
              WhatsApp — fastest
            </div>
            <div className="mt-16 font-display text-3xl text-vault-peach group-hover:text-vault-black">
              Chat now ↗
            </div>
          </a>
          <a
            href="mailto:creative@bschvault.space"
            className="group flex flex-col justify-between rounded-md border border-border bg-card p-8 transition hover:border-vault-peach"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</div>
            <div className="mt-16 font-display text-3xl text-vault-peach">creative@bschvault.space</div>
          </a>
          <a
            href="https://instagram.com/bsch.vault"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-md border border-border bg-card p-8 transition hover:border-vault-peach"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Instagram</div>
            <div className="mt-16 font-display text-3xl text-vault-peach">@bsch.vault</div>
          </a>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Explore more experiments — the wider BSCH.VAULT ecosystem of tools, studies, and
            unreleased tests lives in one place.
          </p>
          <a
            href={ECOSYSTEM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 text-xs uppercase tracking-[0.25em] text-vault-peach hover:border-vault-phosphor hover:text-vault-phosphor"
          >
            s.id/bschvault <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
        <span>© 2026 BSCH.VAULT — Basko · Jakarta</span>
        <span>Directed, not prompted.</span>
      </div>
    </footer>
  );
}

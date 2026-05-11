import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-pub.jpg";
import smalecImg from "@/assets/dish-smalec.jpg";
import beerImg from "@/assets/beer.jpg";
import { MapPin, Phone, Clock, Star, Beer, Utensils } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Eksperyment — Restauracja-Browar w Lublinie" },
      {
        name: "description",
        content:
          "Eksperyment to klimatyczna restauracja-browar w sercu Lublina. Rzemieślnicze piwa, domowa kuchnia i niepowtarzalna atmosfera. Stanisława Staszica 2.",
      },
      { property: "og:title", content: "Eksperyment — Restauracja-Browar Lublin" },
      { property: "og:description", content: "Rzemieślnicze piwa i domowa kuchnia w sercu Lublina." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

const hours = [
  ["Poniedziałek", "18:00 – 24:00"],
  ["Wtorek", "18:00 – 24:00"],
  ["Środa", "18:00 – 24:00"],
  ["Czwartek", "18:00 – 01:00"],
  ["Piątek", "18:00 – 02:00"],
  ["Sobota", "16:00 – 02:00"],
  ["Niedziela", "16:00 – 24:00"],
];

const highlights = [
  {
    img: beerImg,
    title: "Szeroki wybór piw",
    desc: "Rzemieślnicze warianty z lokalnych browarów i nasze autorskie kompozycje na kranach.",
  },
  {
    img: smalecImg,
    title: "Smalec z ogórkiem",
    desc: "Klasyk, który polecają nasi goście — domowy smalec na chrupiącym pieczywie.",
  },
];

const reviews = [
  {
    name: "Jacek Strzyż",
    text: "Wspaniała atmosfera, miła obsługa, duży wybór piw, można też zjeść coś ciepłego — rzadkość w zwykłych barach.",
  },
  {
    name: "Gość lokalu",
    text: "Bar z duszą, której często brakuje konkurencji. Atmosfera jest po prostu nieprawdopodobna, a obsługa na najwyższym poziomie.",
  },
  {
    name: "Eric Hurtado",
    text: "Mały, ale przyjemny lokal dla mieszkańców. Idealny, by zwolnić tempo i spędzić wieczór w dobrym towarzystwie.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Wnętrze pubu Eksperyment"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.85 }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary backdrop-blur">
            <Beer className="h-3.5 w-3.5" /> Restauracja-Browar · Lublin
          </div>
          <h1
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Eksperyment
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground">
            Klimatyczny lokal z duszą w sercu Lublina. Rzemieślnicze piwa,
            domowa kuchnia i wieczory, których się nie zapomina.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:605463639"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-amber)" }}
            >
              <Phone className="h-4 w-4" /> 605 463 639
            </a>
            <a
              href="https://maps.google.com/?q=Eksperyment+Lublin+Staszica+2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <MapPin className="h-4 w-4" /> Jak dojechać
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold text-foreground">4,5</span> · 296 opinii
            </div>
            <div className="hidden h-4 w-px bg-border md:block" />
            <div>20–40 zł za osobę</div>
            <div className="hidden h-4 w-px bg-border md:block" />
            <div>Otwarte od 18:00</div>
          </div>
        </div>
      </section>

      {/* O LOKALU */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              O nas
            </p>
            <h2
              className="mt-3 text-4xl md:text-5xl font-semibold leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bar z duszą, której często brakuje konkurencji.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Eksperyment to miejsce stworzone z miłości do piwa i dobrego
              towarzystwa. Łączymy charakter starego Lublina z rzemieślniczą
              kulturą piwną — w naszej karcie zawsze znajdziesz coś nowego do
              spróbowania.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Stoliki potrafią się szybko zapełnić — warto zarezerwować z
              wyprzedzeniem.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <div className="text-3xl font-semibold text-primary">4,5</div>
                <div className="text-xs text-muted-foreground mt-1">Ocena Google</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary">296</div>
                <div className="text-xs text-muted-foreground mt-1">Opinii gości</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary">20+</div>
                <div className="text-xs text-muted-foreground mt-1">Piw na karcie</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={beerImg}
              alt="Rzemieślnicze piwo"
              width={800}
              height={800}
              loading="lazy"
              className="rounded-2xl object-cover w-full aspect-square shadow-[var(--shadow-card)]"
            />
            <div
              className="absolute -bottom-6 -left-6 hidden md:block rounded-xl px-5 py-4 text-primary-foreground shadow-[var(--shadow-warm)]"
              style={{ background: "var(--gradient-amber)" }}
            >
              <div className="text-xs uppercase tracking-widest">Polecane</div>
              <div className="text-lg font-semibold">Krówka & Smalec</div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-card/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                Najlepsze z menu
              </p>
              <h2
                className="mt-3 text-4xl md:text-5xl font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Co warto zamówić
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Utensils className="h-4 w-4" /> Eda na miejscu · Na wynos · Dostawa
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {highlights.map((h) => (
              <article
                key={h.title}
                className="group overflow-hidden rounded-2xl bg-card border border-border shadow-[var(--shadow-card)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{h.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Opinie</p>
          <h2
            className="mt-3 text-4xl md:text-5xl font-semibold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Co mówią nasi goście
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              4,5 / 5 · 296 opinii Google
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                „{r.text}"
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="kontakt"
        className="border-t border-border bg-card/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Kontakt</p>
            <h2
              className="mt-3 text-4xl md:text-5xl font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Wpadnij na piwo.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Czekamy na Ciebie w sercu Lublina. Polecamy rezerwację — często
              komplet gości.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">Stanisława Staszica 2</div>
                  <div className="text-sm text-muted-foreground">20-400 Lublin</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <a href="tel:605463639" className="font-medium hover:text-primary">
                  605 463 639
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div className="text-sm">
                  <div className="font-medium text-foreground">Godziny otwarcia</div>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    {hours.map(([day, time]) => (
                      <li key={day} className="flex justify-between gap-8">
                        <span>{day}</span>
                        <span className="text-foreground/80">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] min-h-[400px]">
            <iframe
              title="Mapa — Eksperyment Lublin"
              src="https://www.google.com/maps?q=Stanis%C5%82awa+Staszica+2,+20-400+Lublin&output=embed"
              loading="lazy"
              className="h-full w-full min-h-[400px]"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Eksperyment · Restauracja-Browar · Lublin
      </footer>
    </main>
  );
}

import React from "react";
import {
  book,
  chapters,
  previews,
  reviews,
  themes,
} from "../../lib/book-content";

function Arrow({
  direction = "right",
}: {
  direction?: "right" | "down" | "left";
}) {
  return (
    <svg
      className={`arrow arrow-${direction}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12h15M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MountainMark() {
  return (
    <svg
      width="35"
      height="26"
      viewBox="0 0 44 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m2 28 13-17 7 8L30 4l12 24H2Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="m26 12 4 4 4-4M12 15l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function Landscape({
  assetBase,
  final = false,
}: {
  assetBase: string;
  final?: boolean;
}) {
  return (
    <div
      className={`landscape ${final ? "landscape-dawn" : "landscape-night"}`}
      aria-hidden="true"
    >
      <div className="landscape-camera">
        <img
          className="mountain-photo"
          src={`${assetBase}/media/mountain-dawn.webp`}
          srcSet={`${assetBase}/media/mountain-dawn-mobile.webp 900w, ${assetBase}/media/mountain-dawn.webp 1536w`}
          sizes="100vw"
          width="1536"
          height="1024"
          alt=""
          loading={final ? "lazy" : "eager"}
          {...{ fetchpriority: final ? "low" : "high" }}
          decoding="async"
        />
        <div className="sunlight" />
        <div className="mountain-foreground">
          <img
            src={`${assetBase}/media/mountain-dawn.webp`}
            srcSet={`${assetBase}/media/mountain-dawn-mobile.webp 900w, ${assetBase}/media/mountain-dawn.webp 1536w`}
            sizes="100vw"
            width="1536"
            height="1024"
            alt=""
            loading={final ? "lazy" : "eager"}
            decoding="async"
          />
        </div>
        <div className="mist mist-one" />
        <div className="mist mist-two" />
      </div>
      <div className="landscape-shade" />
      <div className="landscape-grain" />
    </div>
  );
}

function PurchaseLinks({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`purchase-links ${dark ? "on-dark" : ""}`}>
      <a
        className="button button-primary"
        href={book.amazon}
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy on Amazon <Arrow />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <a
        className="button button-outline"
        href={book.flipkart}
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy on Flipkart <Arrow />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}

function JourneyPage({
  className,
  id,
  tone,
  labelledBy,
  children,
}: {
  className: string;
  id: string;
  tone: string;
  labelledBy: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${className} reader-scene`}
      id={id}
      data-tone={tone}
      aria-labelledby={labelledBy}
    >
      <div className="reader-viewport">
        <div className="reader-paper">
          <div className="reader-content">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function LiteraryExperience({
  assetBase = "",
}: {
  assetBase?: string;
}) {
  return (
    <div id="literary-experience">
      <div
        className="cinematic-intro"
        id="cinematic-intro"
        role="dialog"
        aria-modal="true"
        aria-labelledby="intro-title"
        aria-describedby="intro-caption"
        hidden
      >
        <div className="intro-atmosphere" aria-hidden="true" />
        <span className="intro-kicker eyebrow">
          A moment before the journey
        </span>
        <div className="intro-visual" aria-hidden="true">
          <svg className="intro-pulse" viewBox="0 0 600 100" fill="none">
            <path d="M0 50H180L202 50L215 35L229 78L245 10L265 65L280 50H600" />
          </svg>
          <svg className="intro-ridge" viewBox="0 0 600 150" fill="none">
            <path d="M0 145L75 100L120 120L200 45L255 98L330 12L395 86L440 61L510 112L600 145" />
            <path d="M300 48L330 12L353 40L336 33L323 47L315 39L300 48" />
          </svg>
          <div className="intro-book">
            <img
              className="intro-cover-art"
              data-intro-cover
              src={`${assetBase}${book.coverAsset}`}
              width="529"
              height="800"
              alt=""
              loading="eager"
              decoding="async"
              {...{ fetchpriority: "high" }}
            />
          </div>
        </div>
        <div className="intro-copy">
          <p id="intro-caption">Every story begins with surviving.</p>
          <p id="intro-title">
            Still Standing,
            <br />
            <em>Still Here.</em>
          </p>
        </div>
        <div className="intro-readiness">
          <div
            className="intro-progress"
            role="progressbar"
            aria-label="Preparing the experience"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
          >
            <span />
          </div>
          <p>
            <span data-intro-status>Preparing the landscape</span>
            <span data-intro-percent aria-hidden="true">
              0%
            </span>
          </p>
        </div>
        <button className="intro-skip text-link" type="button">
          Skip introduction <Arrow />
        </button>
      </div>
      <div
        className="reader-stage"
        data-reader-stage
        role="region"
        aria-label="Interactive book journey"
        hidden
      >
        <div className="reader-atmosphere" />
      </div>
      <nav
        className="reader-interface"
        aria-label="Book journey"
        data-reader-interface
        hidden
      >
        <div className="reader-page-navigation">
          <button
            type="button"
            className="icon-button"
            data-reader-prev
            aria-label="Previous book page"
          >
            <Arrow direction="left" />
          </button>
          <div>
            <span
              className="reader-position"
              data-reader-position
              aria-live="polite"
            >
              Page 01 / 07
            </span>
            <span className="reader-instruction" data-reader-instruction>
              Scroll to open the book
            </span>
          </div>
          <button
            type="button"
            className="icon-button"
            data-reader-next
            aria-label="Next book page"
          >
            <Arrow />
          </button>
        </div>
        <div className="reader-stations">
          <button
            type="button"
            className="icon-button"
            data-reader-scene-prev
            aria-label="Previous scene"
          >
            <Arrow direction="left" />
          </button>
          <span data-reader-station>Scene 1 / 1</span>
          <button
            type="button"
            className="icon-button"
            data-reader-scene-next
            aria-label="Next scene"
          >
            <Arrow />
          </button>
        </div>
        <button
          type="button"
          className="reader-mode text-link"
          data-reader-mode
        >
          Reading view
        </button>
      </nav>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" id="site-header" data-tone="dark">
        <a
          className="brand"
          href="#hero"
          aria-label="Still Standing, Still Here — back to top"
        >
          <MountainMark />
          <span>
            STILL STANDING<span>STILL HERE</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="navigation"
          hidden
        >
          <span className="menu-label">Menu</span>
          <span className="menu-lines" aria-hidden="true" />
        </button>
        <nav
          className="navigation"
          id="navigation"
          aria-label="Main navigation"
        >
          <a href="#inside">The book</a>
          <a href="#pages">Inside the pages</a>
          <a href="#authors">The authors</a>
          <a className="nav-purchase" href="#buy">
            Get the book <Arrow />
          </a>
        </nav>
        <div className="reading-progress" aria-hidden="true" />
      </header>

      <main id="main">
        <section
          className="hero cinematic-scene"
          id="hero"
          data-tone="dark"
          aria-labelledby="hero-title"
        >
          <Landscape assetBase={assetBase} />
          <div className="hero-content container">
            <p className="eyebrow hero-eyebrow">
              A literary companion for the climb
            </p>
            <h1 id="hero-title">
              <span>Still Standing,</span>
              <span className="hero-title-italic">Still Here.</span>
            </h1>
            <p className="hero-tagline">
              Not every battle leaves
              <br className="mobile-break" /> scars you can see.
            </p>
          </div>
          <div className="hero-bottom container">
            <p className="hero-authors">
              <span className="eyebrow">A book by</span>Dhruva Nerella{" "}
              <span className="amp">&amp;</span> Tattva Nerella
            </p>
            <a className="explore-link" href="#inside">
              <span>Discover the book</span>
              <span className="explore-circle">
                <Arrow direction="down" />
              </span>
            </a>
          </div>
          <span className="scene-caption">01 / BEFORE THE LIGHT</span>
        </section>

        <JourneyPage
          className="book-section paper"
          id="inside"
          tone="light"
          labelledBy="book-heading"
        >
          <div className="book-layout container">
            <div className="book-stage" data-book-stage>
              <span className="stage-label eyebrow">
                The book / a closer look
              </span>
              <div className="book-aura" aria-hidden="true" />
              <div className="book-shadow" aria-hidden="true" />
              <div
                className="book-tilt"
                data-book-tilt
                role="img"
                aria-label="Hardcover presentation of Still Standing, Still Here"
              >
                <div className="book-model" id="book-model" aria-hidden="true">
                  <div className="book-back" />
                  <div className="book-spine">
                    <span>STILL STANDING, STILL HERE</span>
                    <span>NERELLA</span>
                  </div>
                  <div className="book-page-edges" />
                  <div className="book-inner-page">
                    <span className="mini-eyebrow">A reflection</span>
                    <p>You do not have to be unbroken to be worthy.</p>
                    <span className="page-rule" />
                    <p className="page-small">
                      You only have to be still standing, still here.
                    </p>
                    <span className="mini-source">
                      From the original website
                    </span>
                  </div>
                  <div className="book-leaf book-leaf-one" />
                  <div className="book-leaf book-leaf-two" />
                  <div className="book-leaf book-leaf-three" />
                  <div className="book-cover">
                    <div className="cover-fallback">
                      <MountainMark />
                      <span className="fallback-title">
                        Still Standing,
                        <br />
                        <em>Still Here.</em>
                      </span>
                      <span className="fallback-authors">
                        Dhruva Nerella
                        <br />
                        &amp; Tattva Nerella
                      </span>
                    </div>
                    <img
                      src={`${assetBase}${book.coverAsset}`}
                      alt=""
                      width="600"
                      height="900"
                      loading="lazy"
                      decoding="async"
                      className="cover-art"
                      data-cover-art
                    />
                    <div className="cover-sheen" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="book-open-control text-link"
                aria-pressed="false"
                aria-controls="book-model"
                hidden
              >
                <span>Open a reflection</span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </button>
              <p className="book-stage-note">
                Hardcover <span aria-hidden="true">·</span> ISBN {book.isbn}
              </p>
              <div className="book-journey" aria-hidden="true">
                <span data-book-phase="discover" className="is-current">
                  01 Discover
                </span>
                <span data-book-phase="open">02 Open</span>
                <span data-book-phase="read">03 Reflect</span>
                <div className="book-journey-track">
                  <span />
                </div>
              </div>
            </div>
            <div className="book-introduction" data-reveal>
              <p className="eyebrow section-index">
                01 <span /> The book
              </p>
              <h2 id="book-heading">
                Some books inform.
                <br />
                This one <em>transforms.</em>
              </h2>
              <p className="lead-copy">
                A literary companion for anyone who has ever been broken and
                refused to stay broken.
              </p>
              <p className="body-copy">
                Between these pages lives a reckoning — with pain, with
                perseverance, with the quiet ferocity of choosing to remain.
              </p>
              <PurchaseLinks />
              <a href="#pages" className="text-link preview-link">
                A glimpse inside <Arrow direction="down" />
              </a>
            </div>
          </div>
        </JourneyPage>

        <JourneyPage
          className="meaning-section"
          id="themes"
          tone="dark"
          labelledBy="meaning-heading"
        >
          <div className="container meaning-heading" data-reveal>
            <p className="eyebrow section-index">
              02 <span /> The meaning
            </p>
            <h2 id="meaning-heading">
              Not lessons to memorize.
              <br />
              <em>Truths to recognize.</em>
            </h2>
            <p className="body-copy">
              Three threads from the book’s themes.
              <br />
              One continuous journey back to yourself.
            </p>
          </div>
          <div className="theme-list container">
            {themes.map((theme, i) => (
              <article className="theme-row" key={theme.name} data-reveal>
                <span className="theme-number">0{i + 1}</span>
                <div>
                  <p className="eyebrow">{theme.name}</p>
                  <h3>{theme.title}</h3>
                </div>
                <div className="theme-copy">
                  <p>{theme.text}</p>
                  <p className="theme-line">{theme.line}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="meaning-footnote container">
            Theme descriptions preserved from the original website.
          </p>
        </JourneyPage>

        <JourneyPage
          className="pages-section paper"
          id="pages"
          tone="light"
          labelledBy="pages-heading"
        >
          <div className="container pages-layout">
            <div className="pages-intro" data-reveal>
              <p className="eyebrow section-index">
                03 <span /> Inside the pages
              </p>
              <h2 id="pages-heading">
                A moment.
                <br />A pause.
                <br />
                <em>A beginning.</em>
              </h2>
              <p className="body-copy">
                Meet the spirit of the book through reflections from its
                original website.
              </p>
              <a
                className="text-link"
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the book on Amazon <Arrow />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <div className="reading-preview" data-preview data-reveal>
              <div className="preview-topline">
                <MountainMark />
                <span className="eyebrow">Still Standing, Still Here</span>
              </div>
              <div className="preview-pages">
                {previews.map((preview, i) => (
                  <article
                    className="preview-page"
                    id={`preview-${i}`}
                    key={preview.label}
                    aria-labelledby={`preview-heading-${i}`}
                  >
                    <p className="eyebrow" id={`preview-heading-${i}`}>
                      {preview.label}
                    </p>
                    <blockquote>{preview.text}</blockquote>
                    <p className="preview-source">{preview.note}</p>
                  </article>
                ))}
              </div>
              <div className="preview-controls" hidden>
                <button
                  type="button"
                  className="icon-button"
                  data-preview-prev
                  aria-label="Previous reflection"
                >
                  <Arrow direction="left" />
                </button>
                <span className="preview-count" aria-live="polite">
                  01 <span>/ 03</span>
                </span>
                <button
                  type="button"
                  className="icon-button"
                  data-preview-next
                  aria-label="Next reflection"
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </JourneyPage>

        <JourneyPage
          className="chapter-section"
          id="chapters"
          tone="dark"
          labelledBy="chapters-heading"
        >
          <div className="container">
            <div className="chapter-header" data-reveal>
              <div>
                <p className="eyebrow section-index">
                  04 <span /> The chapter journey
                </p>
                <h2 id="chapters-heading">
                  The terrain
                  <br />
                  <em>you’ll traverse.</em>
                </h2>
              </div>
              <p className="body-copy">
                Not spoilers. Signposts.
                <br />
                Six chapters from the existing guide.
              </p>
            </div>
            <div
              className="chapter-tabs"
              aria-label="Chapter navigation"
              hidden
            >
              {chapters.map((chapter, i) => (
                <button
                  className="chapter-tab"
                  type="button"
                  key={chapter.title}
                  id={`chapter-tab-${i}`}
                  data-chapter-index={i}
                >
                  <span className="chapter-tab-number">0{i + 1}</span>
                  <span>{chapter.theme}</span>
                  <span className="chapter-tab-dot" aria-hidden="true" />
                </button>
              ))}
            </div>
            <div className="chapter-panels">
              {chapters.map((chapter, i) => (
                <article
                  className="chapter-panel"
                  id={`chapter-panel-${i}`}
                  key={chapter.title}
                  aria-labelledby={`chapter-title-${i}`}
                >
                  <div className="chapter-numeral" aria-hidden="true">
                    0{i + 1}
                  </div>
                  <div className="chapter-detail">
                    <p className="eyebrow">{chapter.theme}</p>
                    <h3 id={`chapter-title-${i}`}>{chapter.title}</h3>
                    <p>{chapter.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="chapter-footer">
              <p>Chapter descriptions from the original website’s guide.</p>
              <a
                className="text-link"
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue the journey <Arrow />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </JourneyPage>

        <JourneyPage
          className="authors-section paper"
          id="authors"
          tone="light"
          labelledBy="authors-heading"
        >
          <div className="container authors-layout">
            <div className="author-monogram" aria-hidden="true">
              <span>DN</span>
              <span className="monogram-amp">&amp;</span>
              <span>TN</span>
              <div className="monogram-caption">Two voices. One journey.</div>
            </div>
            <div className="authors-copy" data-reveal>
              <p className="eyebrow section-index">
                05 <span /> Behind the pages
              </p>
              <h2 id="authors-heading">
                Dhruva Nerella
                <br />
                <em>&amp; Tattva Nerella.</em>
              </h2>
              <p className="lead-copy">
                The voices behind <cite>Still Standing, Still Here.</cite>
              </p>
              <p className="body-copy">
                A book co-authored by Dhruva Nerella and Tattva Nerella,
                exploring resilience, self-discovery, emotional growth, and
                perseverance.
              </p>
              <blockquote className="author-reflection">
                “You do not have to be unbroken to be worthy.”
                <cite>A reflection from the original website</cite>
              </blockquote>
            </div>
          </div>
        </JourneyPage>

        <JourneyPage
          className="reviews-section paper"
          id="voices"
          tone="light"
          labelledBy="reviews-heading"
        >
          <div className="container">
            <div className="reviews-header" data-reveal>
              <p className="eyebrow section-index">
                06 <span /> Reader responses
              </p>
              <h2 id="reviews-heading">
                What stays
                <br />
                <em>with you.</em>
              </h2>
              <p className="body-copy">
                Reader voices shared on the original website.
              </p>
            </div>
            <div className="reviews-layout">
              {reviews.map((review) => (
                <figure className="reader-review" key={review.name} data-reveal>
                  <span className="quote-mark" aria-hidden="true">
                    “
                  </span>
                  <h3>{review.title}</h3>
                  <blockquote>
                    <p>{review.quote}</p>
                    <details>
                      <summary>
                        Read the full response <span aria-hidden="true">+</span>
                      </summary>
                      <p>{review.more}</p>
                    </details>
                  </blockquote>
                  <figcaption>
                    <span>{review.name}</span>
                    <span>
                      Reviewed in India <span aria-hidden="true">·</span>{" "}
                      <time dateTime={review.iso}>{review.date}</time>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </JourneyPage>

        <JourneyPage
          className="final-section cinematic-scene"
          id="buy"
          tone="dark"
          labelledBy="final-heading"
        >
          <Landscape assetBase={assetBase} final />
          <div className="final-content container" data-reveal>
            <p className="eyebrow">07 / Into the light</p>
            <p className="final-reflection">
              The next chapter is yours to write.
            </p>
            <h2 id="final-heading">
              Still Standing,
              <br />
              <em>Still Here.</em>
            </h2>
            <p className="final-copy">
              Let these pages remind you of something
              <br />
              you may have forgotten — you are still standing, still here.
            </p>
            <PurchaseLinks dark />
            <p className="final-isbn">
              Hardcover <span aria-hidden="true">·</span> ISBN {book.isbn}
            </p>
          </div>
        </JourneyPage>
      </main>
      <footer className="site-footer" data-tone="dark">
        <div className="container footer-top">
          <a className="footer-brand" href="#hero">
            <MountainMark />
            <span>Still Standing, Still Here</span>
          </a>
          <nav aria-label="Footer navigation">
            <a href="#inside">The book</a>
            <a href="#chapters">Chapters</a>
            <a href="#voices">Reader voices</a>
            <a href="#hero">
              Back to the summit <Arrow direction="down" />
            </a>
          </nav>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Dhruva Nerella &amp; Tattva Nerella</p>
          <p>Still standing is still extraordinary.</p>
        </div>
      </footer>
    </div>
  );
}

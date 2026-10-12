import React from "react";
import { book } from "../../lib/book-content";
import { bookAnswers, site } from "../../lib/site-seo";

function ReferenceArrow() {
  return (
    <svg
      className="facts-arrow"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 19 19 5M5 5h14v14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BookFacts({ assetBase = "" }: { assetBase?: string }) {
  return (
    <div className="book-facts">
      <a className="skip-link" href="#book-facts-content">
        Skip to book facts
      </a>
      <header className="facts-header">
        <a href="/">{book.title}</a>
        <a href="/#buy">
          Get the book <ReferenceArrow />
        </a>
      </header>
      <main id="book-facts-content">
        <div className="facts-introduction">
          <div>
            <p className="eyebrow">The official website / Book facts</p>
            <h1>
              {book.title}
              <br />
              <em>Official book facts.</em>
            </h1>
            <p className="facts-lead">
              A clear introduction to the book, its identity and where to find
              it.
            </p>
            <dl className="facts-identity">
              <div>
                <dt>Authors</dt>
                <dd>{book.authors.join(" & ")}</dd>
              </div>
              <div>
                <dt>ISBN-13</dt>
                <dd>{book.isbn}</dd>
              </div>
              <div>
                <dt>Official website</dt>
                <dd>
                  <a href={site.url}>{site.url}</a>
                </dd>
              </div>
            </dl>
          </div>
          <img
            src={`${assetBase}${book.coverAsset}`}
            alt={`Cover of ${book.title}`}
            width="529"
            height="800"
          />
        </div>
        <section
          className="facts-answers"
          aria-labelledby="facts-answers-heading"
        >
          <p className="eyebrow">A few things to know</p>
          <h2 id="facts-answers-heading">The book, in brief.</h2>
          {bookAnswers.map(({ id, question, answer, links }) => (
            <article id={id} key={id} className="answer-capsule">
              <h3>{question}</h3>
              <p>{answer}</p>
              <ul aria-label={`Links for: ${question}`}>
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href}>
                      {label} <ReferenceArrow />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section
          className="facts-source"
          aria-labelledby="facts-source-heading"
        >
          <p className="eyebrow">A catalogue reference</p>
          <h2 id="facts-source-heading">Find the same book.</h2>
          <p>
            The{" "}
            <a href={site.catalogue}>
              BlueRoseONE catalogue entry for {book.title}
            </a>{" "}
            lists ISBN {book.isbn}. The title and ISBN identify this book across
            its official website and the catalogue.
          </p>
          <p>
            Book introductions, theme descriptions and reader responses on this
            website remain attributed to their existing sources. Retailer prices
            and availability are maintained by the retailers.
          </p>
        </section>
      </main>
      <footer className="facts-footer">
        <p>Official website of {book.title}</p>
        <a href="/">
          Return to the cinematic book journey <ReferenceArrow />
        </a>
      </footer>
    </div>
  );
}

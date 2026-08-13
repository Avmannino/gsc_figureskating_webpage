import "./App.css";
import Footer from "./Footer";

const BASE = import.meta.env.BASE_URL;

const events = [
  {
    number: "01",
    title: "Annual Competition",
    description:
      "An annual competition against the New Canaan Winter Club.",
    image: `${BASE}annual-comp.jpg`,
    imagePosition: "center",
  },
  {
    number: "02",
    title: "Year-End Ice Show",
    description:
      "A year-end themed ice show where skaters showcase their progress.",
    image: `${BASE}ice-show.jpg`,
    imagePosition: "center",
  },
  {
    number: "03",
    title: "Awards Banquet",
    description:
      "An Awards Banquet recognizing U.S. Figure Skating badges earned throughout the season, along with special awards, dinner, and a slideshow celebrating the year's memories.",
    image: `${BASE}banquet.png`,
    imagePosition: "center",
  },
];

const developmentItems = [
  {
    label: "Beginners",
    title: "Build the Fundamentals",
    description:
      "Learn foundational techniques in a structured environment centered on proper instruction and enjoyment.",
  },
  {
    label: "Developing Skaters",
    title: "Continue to Progress",
    description:
      "Strengthen technical skills while working toward personal goals and continued development on the ice.",
  },
  {
    label: "Advanced Skaters",
    title: "Test & Compete",
    description:
      "Pursue U.S. Figure Skating tests and competitive opportunities as skills continue to advance.",
  },
];

function EventCard({ event }) {
  return (
    <article className="event-card">
      <div
        className="event-card__image"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(7, 27, 59, 0.05) 0%,
              rgba(7, 27, 59, 0.2) 100%
            ),
            url("${event.image}")
          `,
          backgroundPosition: event.imagePosition,
        }}
        aria-hidden="true"
      >
        <span className="event-card__number">{event.number}</span>
      </div>

      <div className="event-card__content">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <main className="figure-page">
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__content">
              <img
                src={`${BASE}figureskating-logo.png`}
                alt="Greenwich Skating Club Figure Skating"
                className="hero__wordmark"
              />

              <p className="hero__intro">
                The Figure Skating Program is designed to provide a fun, safe,
                and goal-oriented environment where skaters of all ages and
                abilities can develop strong technical skills while fostering
                a lifelong love of skating.
              </p>
            </div>

            <div className="hero__visual">
              <div
                className="hero__image"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      180deg,
                      rgba(7, 27, 59, 0.02) 35%,
                      rgba(7, 27, 59, 0.18) 100%
                    ),
                    url("${BASE}hero.jpg")
                  `,
                }}
                role="img"
                aria-label="Figure skating at Greenwich Skating Club"
              />

              <div className="hero__corner hero__corner--top" />
              <div className="hero__corner hero__corner--bottom" />
            </div>
          </div>
        </section>

        <section className="program-overview">
          <div className="content-shell">
            <div className="program-overview__grid">
              <div className="program-overview__content">
                <div className="section-heading">
                  <span className="section-heading__eyebrow">
                    The Program
                  </span>

                  <h2>
                    Development at
                    <span>Every Level</span>
                  </h2>
                </div>

                <div className="program-overview__copy">
                  <p>
                    From beginners learning fundamental techniques to
                    advanced skaters pursuing U.S. Figure Skating tests and
                    competitive opportunities, the program emphasizes proper
                    instruction, personal achievement, physical fitness, and
                    enjoyment at every level.
                  </p>
                </div>
              </div>

              <div className="program-overview__visual">
                <div
                  className="program-overview__image"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        180deg,
                        rgba(7, 27, 59, 0.02) 35%,
                        rgba(7, 27, 59, 0.18) 100%
                      ),
                      url("${BASE}development.jpg")
                    `,
                  }}
                  role="img"
                  aria-label="Skater development at Greenwich Skating Club"
                />

                <div className="program-overview__corner program-overview__corner--top" />
                <div className="program-overview__corner program-overview__corner--bottom" />
              </div>
            </div>

            <div className="development-grid">
              {developmentItems.map((item, index) => (
                <article className="development-item" key={item.title}>
                  <div className="development-item__top">
                    <span className="development-item__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="development-item__label">
                      {item.label}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="events-section">
          <div className="content-shell">
            <header className="events-header">
              <div className="section-heading section-heading--light">
                <span className="section-heading__eyebrow">
                  Beyond Weekly Instruction
                </span>

                <h2>
                  Signature <span>Events</span>
                </h2>
              </div>
            </header>

            <div className="events-grid">
              {events.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;

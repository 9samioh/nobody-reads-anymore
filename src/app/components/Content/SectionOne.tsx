import Image from "next/image";
import styles from "./Content.module.css";

// contains CopyBlockOne, image, and CopyBlockTwo
export default function SectionOne() {
  return (
    <div className={styles.content}>
      <div className={styles.blockWrapper}>
        <p>
          The message is everywhere: Reading is dying. The book, that tactile
          relic of our pre-screen existence, is drifting toward irrelevance. The
          "post-literate" age is dawning.
        </p>

        <p>
          You've heard it at dinner parties and on podcasts. You've seen it in{" "}
          <a
            href="https://www.theguardian.com/us-news/2025/aug/20/reading-for-pleasure-study"
            target="_blank"
            rel="noopener noreferrer"
          >
            breathless headlines
          </a>{" "}
          and{" "}
          <a
            href="https://www.thefp.com/p/goodbye-to-the-age-of-the-book"
            target="_blank"
            rel="noopener noreferrer"
          >
            plaintive think pieces
          </a>
          . You've watched researchers publish{" "}
          <a
            href="https://news.ufl.edu/2025/08/reading-for-pleasure-study/"
            target="_blank"
            rel="noopener noreferrer"
          >
            increasingly alarming studies
          </a>
          , as educators spiral into despair.
        </p>

        <p>
          Attention spans are collapsing and reading scores are{" "}
          <a
            href="https://www.nytimes.com/2025/09/09/us/12th-grade-reading-skills-low-naep.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            plunging to new depths
          </a>
          . Even some high school English teachers are{" "}
          <a
            href="https://www.nytimes.com/2025/12/12/us/high-school-english-teachers-assigning-books.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            throwing up their hands in surrender
          </a>
          , assigning excerpts to a generation unaccustomed to the delights and
          demands of tackling a novel cover to cover. Literary fiction had a
          long and glorious run, the thinking goes, but it's time to accept the
          inevitable.
        </p>

        <h5>
          We{" "}
          <span className={styles.underlinedWord}>
            disagree.
            <img
              className={styles.underline}
              src="/assets/body/underline.svg"
              alt=""
            />
          </span>
        </h5>

        <p>
          Fiction's feverish funeral procession is not new (see our timeline of
          reading's exaggerated demise). These predictions were wrong then, and
          they're wrong now.
        </p>
      </div>

      <div>
        <Image
          src="/assets/body/img01.png"
          alt="Description"
          width={600}
          height={450}
          className={styles.image}
        />
      </div>

      <div className={styles.blockWrapper}>
        <h3>Americans are buying more fiction than at any point in history.</h3>

        <p>
          Readers across the country bought{" "}
          <a
            href="https://www.publishersweekly.com/pw/by-topic/industry-news/financial-reporting/article/99417-print-book-sales-rose-slightly-in-2025.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            more than 762 million print books in 2025
          </a>
          , according to Circana BookScan. That includes{" "}
          <a
            href="https://www.nytimes.com/2025/12/30/books/book-sales-trends-2025.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            184 million books in the adult fiction category alone
          </a>
          —66 million above the 2019 count. And while{" "}
          <a
            href="https://people.com/join-thriftbooks-reading-challenge-11888144"
            target="_blank"
            rel="noopener noreferrer"
          >
            recent headlines
          </a>{" "}
          lamented that 40% of Americans read zero books in 2025, the inverse is
          also correct: The majority of Americans, 60%, did read at least one
          book. And nearly one in five (19%) read 10 books or more.
        </p>

        <h5>Brick-and-mortar bookstores are officially back.</h5>

        <p>
          A decade ago, bookstores seemed{" "}
          <a
            href="https://www.nytimes.com/2017/12/28/technology/bookstores-final-shakeout.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            destined for the fate of video rental shops and pay phones
          </a>
          . Turns out, independent bookstores are making a{" "}
          <a
            href="https://www.fastcompany.com/91461983/indie-bookstores-are-making-a-shocking-triumphant-comeback"
            target="_blank"
            rel="noopener noreferrer"
          >
            "shocking, triumphant comeback."
          </a>{" "}
          According to Fast Company, over the last five years the number of
          independent bookstores in the U.S. has grown 70%. Across the country,
          422 new bookstores opened in 2025 alone.
        </p>

        <h5>
          Book influencers have become powerful voices on social media, and
          they're everywhere.
        </h5>

        <p>
          BookTokers, BookTubers, and Bookstagrammers are evangelizing books
          across every platform. Posts with the hashtag #BookTok have
          accumulated{" "}
          <a
            href="https://www.forbes.com/sites/tiktok/2025/04/21/the-power-of-booktok-why-tiktoks-book-community-is-driving-a-new-era-in-publishing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            more than 370 billion views
          </a>
          , with influencers parsing plotlines and resurfacing overlooked gems.
          Celebrity book clubs have become a full-fledged cultural phenomenon.
          What do Dua Lipa, Emma Roberts, and Reese Witherspoon have in common?
          They all missed the memo that nobody reads anymore. Even fashion
          houses are riding the trend, with models clutching literary works as
          they walk the runway and pose for editorial shoots.
        </p>

        <h5>
          All that content we're streaming on our screens? It's coming from
          books.
        </h5>

        <p>
          Your latest streaming obsession? Chances are it's based on a book.
          Dozens of BOTM selections have been adapted for screen in recent
          years, including <em>People We Meet On Vacation</em>,{" "}
          <em>Daisy Jones &amp; The Six</em>, <em>A Gentleman in Moscow</em> and
          now <em>Margo's Got Money Troubles</em>. Many more are in production,
          including <em>The Ministry of Time</em>, <em>Tell Me Lies</em>,{" "}
          <em>The Seven Husbands of Evelyn Hugo</em>, and our very own Lolly
          Award winner <em>The God of the Woods</em>. Filmed entertainment is
          increasingly downstream of successful books, which are discovered and
          loved by readers first.
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./Content.module.css";

// contains image, and CopyBlockTwo
export default function BlockTwo() {
  return (
    <>
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

        <div className={styles.subsection}>
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
            independent bookstores in the U.S. has grown 70%. Across the
            country, 422 new bookstores opened in 2025 alone.
          </p>
        </div>

        <div className={styles.subsection}>
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
            , with influencers parsing plotlines and resurfacing overlooked
            gems. Celebrity book clubs have become a full-fledged cultural
            phenomenon. What do Dua Lipa, Emma Roberts, and Reese Witherspoon
            have in common? They all missed the memo that nobody reads anymore.
            Even fashion houses are riding the trend, with models clutching
            literary works as they walk the runway and pose for editorial
            shoots.
          </p>
        </div>

        <div className={styles.subsection}>
          <h5>
            All that content we're streaming on our screens? It's coming from
            books.
          </h5>

          <p>
            Your latest streaming obsession? Chances are it's based on a book.
            Dozens of BOTM selections have been adapted for screen in recent
            years, including <em>People We Meet On Vacation</em>,{" "}
            <em>Daisy Jones &amp; The Six</em>, <em>A Gentleman in Moscow</em>{" "}
            and now <em>Margo's Got Money Troubles</em>. Many more are in
            production, including <em>The Ministry of Time</em>,{" "}
            <em>Tell Me Lies</em>, <em>The Seven Husbands of Evelyn Hugo</em>,
            and our very own Lolly Award winner <em>The God of the Woods</em>.
            Filmed entertainment is increasingly downstream of successful books,
            which are discovered and loved by readers first.
          </p>
        </div>
      </div>
    </>
  );
}

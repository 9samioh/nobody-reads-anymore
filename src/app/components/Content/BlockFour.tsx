import Image from "next/image";
import styles from "./Content.module.css";

// contains image and CopyBlockFour
export default function BlockFour() {
  return (
    <>
      <div>
        <Image
          src="/assets/body/img03_new.png"
          alt="Description"
          width={600}
          height={450}
          className={styles.image}
        />
      </div>

      <div className={styles.blockWrapper}>
        <h3>Fiction forward</h3>
        <p>
          At Book of the Month, we believe deeply in the future of fiction.
          That's why we're nurturing the new reading renaissance by surfacing,
          publishing, and promoting the books that matter most.
        </p>

        <ol className={styles.list}>
          <li className={styles.listItem}>
            <p className={`h3 ${styles.number}`}>01</p>
            <p>
              <span className="h6 bold">We focus on curation</span>, identifying
              a handful of truly exceptional titles from the thousands published
              each year.
            </p>
          </li>
          <li>
            <p className={`h3 ${styles.number}`}>02</p>
            <p>
              <span className="h6 bold">We invest in discovery</span>,
              spotlighting new and emerging voices that might otherwise struggle
              to break through.
            </p>
          </li>
          <li>
            <p className={`h3 ${styles.number}`}>03</p>
            <p>
              <span className="h6 bold">We unfailingly celebrate reading</span>{" "}
              as one of life's great pleasures in everything we do.
            </p>
          </li>
        </ol>

        <p>
          We're proud to be among the largest advertisers of books in America
          across both paid and organic channels. In a consumer culture saturated
          with competing content, someone has to make the case for reading. We
          always have, and we always will.
        </p>
        <p>Here's to the next 100 years of Nobody Reading Anymore.</p>
      </div>
    </>
  );
}

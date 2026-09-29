import Image from "next/image";
import styles from "./Content.module.css";

// contains image and CopyBlockThree
export default function BlockThree() {
  return (
    <>
      <div>
        <Image
          src="/assets/body/img02_new.png"
          alt="Nobody Reads Anymore campaign billboards"
          width={600}
          height={450}
          className={styles.image}
        />
      </div>

      <div className={styles.blockWrapper}>
        <h3>
          Our view: Gen Z will read more—not less—than previous generations
        </h3>

        <div className={styles.subsection}>
          <h5>
            Gen Zers are actively changing their relationship with screens.
          </h5>
          <p>
            They don't need researchers to tell them how constant doomscrolling
            impacts their health, wellbeing, and clarity of thought. They're
            disproportionately{" "}
            <a
              href="https://studyfinds.org/young-americans-unplugging-happier/"
              target="_blank"
              rel="noopener noreferrer"
            >
              intentional about unplugging
            </a>{" "}
            and more likely than members of any other generation to{" "}
            <a
              href="https://pro.morningconsult.com/analysis/dumb-phone-gen-z-millennials-dumb-tech-interest-2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              own a dumb phone
            </a>{" "}
            . Some are celebrating the low-tech lifestyle by socializing under
            the banner of high school and college{" "}
            <a
              href="https://www.theludditeclub.org/programs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luddite Clubs
            </a>{" "}
            (30+ chapters and counting, when we last checked).
          </p>
        </div>

        <div className={styles.subsection}>
          <h5>The hunger for analog is real.</h5>
          <p>
            Gen Z is leading an in-real-life revolution that would have seemed
            unthinkable even recently. They're amassing vinyl records, driving
            up sales by an average of{" "}
            <a
              href="https://www.cnn.com/2025/12/14/business/vinyl-collectible-gen-z"
              target="_blank"
              rel="noopener noreferrer"
            >
              18% a year
            </a>{" "}
            over the past five years. They're{" "}
            <a
              href="https://www.wbur.org/onpoint/2025/12/24/gen-z-says-hotties-need-hobbies"
              target="_blank"
              rel="noopener noreferrer"
            >
              fueling the revival
            </a>{" "}
            of board games, knitting, and needlepoint. They{" "}
            <a
              href="https://www.retaildive.com/news/gen-z-in-person-shopping-beauty-luxury-adyen/738198/"
              target="_blank"
              rel="noopener noreferrer"
            >
              prefer in-person shopping
            </a>{" "}
            (one study found that eight in 10 Gen Zers choose to{" "}
            <a
              href="https://www.musicweek.com/labels/read/vinyl-alliance-says-gen-z-is-now-the-driving-force-behind-the-format-s-popularity/091294"
              target="_blank"
              rel="noopener noreferrer"
            >
              shop for vinyl records in brick-and-mortar stores
            </a>
            , in a case of analog on overdrive).
          </p>
        </div>

        <div className={styles.subsection}>
          <h5>
            Our education system needs to support this trend, not undermine it.
          </h5>
          <p>
            At a moment when reading is embedded in online (and therefore youth)
            culture, reports suggest that some{" "}
            <a
              href="https://www.nytimes.com/2025/12/12/us/high-school-english-teachers-assigning-books.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              educators are actually pulling back
            </a>
            . They're lowering standards for reading in school, scaling back
            substantive discussion of literature, and assigning fewer full
            books. We believe this is a disservice to Gen Z. Teaching
            literature—reading full books, engaging with them, discussing them
            seriously—is vital for a generation navigating our environment of
            relentless digital distraction.
          </p>
        </div>
      </div>
    </>
  );
}

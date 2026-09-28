import styles from "./Carousel.module.css";
import { timelineData } from "@/data/timeline";

export default function Carousel() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h2>
          A brief timeline of fiction's <br />
          exaggerated demise.
        </h2>
        <p>
          For more than 100 years, leading thinkers have been predicting the
          "end of reading" based on whatever the prevailing technology happens
          to be at the time. From Jules Verne to Steve Jobs, it has been doom
          and gloom all the way. Here are just a few examples we've noticed.
        </p>
      </div>

      <div className={styles.timeline}>
        <ul className={styles.years}>
          {timelineData.map((tab) => (
            <li key={tab.year}>{tab.year}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

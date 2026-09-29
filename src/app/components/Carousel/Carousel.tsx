"use client";
import { useState } from "react";
import styles from "./Carousel.module.css";
import { timelineData } from "@/data/timeline";

export default function Carousel() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const sortedTimelineData = timelineData.sort((a, b) => a.year - b.year);
  const activeTab = sortedTimelineData[activeTabIndex];
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h2>
          A brief timeline of fiction's <br className={styles.desktopBr} />
          exaggerated demise.
        </h2>
        <p>
          For more than 100 years, leading thinkers have been predicting the
          "end of reading" based on whatever the prevailing technology happens
          to be at the time. From Jules Verne to Steve Jobs, it has been doom
          and gloom all the way. Here are just a few examples we've noticed.
        </p>
      </div>

      <div>
        <ul className={styles.years}>
          {sortedTimelineData.map((tab, index) => (
            <li
              key={tab.year}
              onClick={() => setActiveTabIndex(index)}
              className={`${styles.year} ${index === activeTabIndex ? styles.activeYear : ""}`}
            >
              <p className="h6-alt">{tab.year}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.activeTab}>
        <div className={styles.arrowDiv}>
          {activeTabIndex !== 0 && (
            <svg
              width="24"
              height="64"
              viewBox="0 0 24 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setActiveTabIndex(activeTabIndex - 1)}
              className={styles.backArrow}
            >
              <path
                d="M1 1L23 32L1 63"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <p className="h3">{activeTab.title}</p>
            <p className="h4-alt">{activeTab.year}</p>
          </div>
          <p className={`h5 ${styles.quote}`}>“{activeTab.quote}”</p>
          <p className={`h5-alt ${styles.author}`}>{activeTab.author}</p>
          <p className="alt-body">{activeTab.source}</p>
        </div>
        <div className={styles.arrowDiv}>
          {activeTabIndex !== sortedTimelineData.length - 1 && (
            <svg
              width="24"
              height="64"
              viewBox="0 0 24 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setActiveTabIndex(activeTabIndex + 1)}
              className={styles.arrow}
            >
              <path
                d="M1 1L23 32L1 63"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

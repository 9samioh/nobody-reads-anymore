import Image from "next/image";
import styles from "./page.module.css";
import Marquee from "./components/Marquee/Marquee";
import BlockOne from "./components/BlockOne/BlockOne";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>A manifesto</p>
        <h1 className={styles.title}>“Nobody reads anymore.”</h1>
      </div>
      {/* <Marquee /> */}
      <BlockOne />
    </div>
  );
}

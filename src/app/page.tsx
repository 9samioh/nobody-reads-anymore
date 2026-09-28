import styles from "./page.module.css";
import Marquee from "./components/Marquee/Marquee";
import Carousel from "./components/Carousel/Carousel";
import BlockOne from "./components/Content/BlockOne";
import BlockTwo from "./components/Content/BlockTwo";
import BlockThree from "./components/Content/BlockThree";
import BlockFour from "./components/Content/BlockFour";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>A manifesto</p>
        <h1 className={styles.title}>“Nobody reads anymore.”</h1>
      </div>
      <Marquee />
      <div className={styles.content}>
        <BlockOne />
        <BlockTwo />
      </div>
      <Carousel />
      <div className={styles.content}>
        <BlockThree />
        <BlockFour />
      </div>{" "}
      <div className={styles.logoBlock}>
        <p className="">100</p>
        <span>Book of the Month</span>
      </div>
    </div>
  );
}

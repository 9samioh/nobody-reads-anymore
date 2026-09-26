import Image from "next/image";
import styles from "./Marquee.module.css";
import { marqueeTiles } from "@/data/marquee";

export default function Marquee() {
  return (
    <section>
      {marqueeTiles.map((tile) => (
        <div key={tile.name}>
          <img src={tile.image} alt={tile.name} />
          <p>{tile.name}</p>
          <p>{tile.title}</p>
        </div>
      ))}
    </section>
  );
}

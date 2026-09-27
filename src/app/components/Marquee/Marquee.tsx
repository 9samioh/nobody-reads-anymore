"use client";

import { useEffect, useRef } from "react";
import { marqueeTiles } from "@/data/marquee";
import Image from "next/image";
import styles from "./Marquee.module.css";

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let lastTime = performance.now();
    const speed = 30; // pixels per second

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isInteracting.current) {
        container.scrollLeft += (speed * delta) / 1000;

        const loopWidth = container.scrollWidth / 2;

        if (container.scrollLeft >= loopWidth) {
          container.scrollLeft -= loopWidth;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.marquee}>
      <div
        ref={containerRef}
        className={styles.container}
        onPointerDown={() => {
          isInteracting.current = true;
        }}
        onPointerUp={() => {
          isInteracting.current = false;
        }}
        onPointerCancel={() => {
          isInteracting.current = false;
        }}
      >
        <div className={styles.tiles}>
          {[...marqueeTiles, ...marqueeTiles].map((tile, index) => (
            <article className={styles.tile} key={`${tile.name}-${index}`}>
              <Image
                className={styles.image}
                src={tile.image}
                alt={tile.name}
                width={470}
                height={587}
                priority={index < 3}
              />
              <div className={styles.tileContent}>
                <p className={styles.name}>{tile.name}</p>
                <p className={styles.title}>{tile.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

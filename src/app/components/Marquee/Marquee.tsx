"use client";

import { useEffect, useRef } from "react";
import { marqueeTiles } from "@/data/marquee";
import Image from "next/image";
import styles from "./Marquee.module.css";

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  // storing animation id
  const animationRef = useRef<number | null>(null);

  const isInteracting = useRef(false);
  // mouse starting position
  const startX = useRef(0);
  // starting scroll position of marquee tiles
  const startScrollLeft = useRef(0);

  // creates the infinite scroll visual
  const resetScrollPosition = () => {
    const container = containerRef.current;
    const loopWidth = loopWidthRef.current;

    if (!container || !loopWidth) return;

    if (!loopWidth) return;

    if (container.scrollLeft <= 0) {
      container.scrollLeft += loopWidth;
    }

    if (container.scrollLeft >= loopWidth * 2) {
      container.scrollLeft -= loopWidth;
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const loopWidth = container.scrollWidth / 3;
    loopWidthRef.current = loopWidth;
    container.scrollLeft = loopWidth;

    // get current time - want to animate based on time (not animation frame)
    let lastTime = performance.now();
    // moving 30px per sec
    const speed = 50;

    const animate = (currentTime: number) => {
      // how many ms has passed since the last frame
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      // console.log(container.scrollLeft);

      // don't scroll if user interacting
      if (!isInteracting.current) {
        container.scrollLeft += (speed * delta) / 1000;
      }
      resetScrollPosition();

      // continue w animation
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // cleanup for useEffect
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    resetScrollPosition();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;

    const container = containerRef.current;

    if (!container) return;

    isInteracting.current = true;
    startX.current = e.clientX;
    startScrollLeft.current = container.scrollLeft;

    // allows it to drag outside of tile position
    container.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;

    if (!container || !isInteracting.current) return;

    const distance = e.clientX - startX.current;

    container.scrollLeft = startScrollLeft.current - distance;
    resetScrollPosition();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isInteracting.current = false;
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div className={styles.marquee}>
      <div
        ref={containerRef}
        className={styles.container}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <ul className={styles.tiles}>
          {/* marquee tiles are copied 3x to allow infinite scroll - going left from the beginning and also at the end */}
          {[...marqueeTiles, ...marqueeTiles, ...marqueeTiles].map(
            (tile, index) => (
              <li className={styles.tile} key={`${tile.name}-${index}`}>
                <Image
                  className={styles.image}
                  src={tile.image}
                  alt={tile.name}
                  width={470}
                  height={587}
                  priority={index < 3}
                  draggable={false}
                />

                <div className={styles.tileContent}>
                  <p className={`alt-body ${styles.name}`}>{tile.name}</p>

                  <p className={`alt-body ${styles.title}`}>
                    {tile.title.map((part, index) =>
                      part.italic ? <i key={index}>{part.text}</i> : part.text
                    )}
                  </p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

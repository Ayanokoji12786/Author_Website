"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

function getRandomStartPoint() {
  const side = Math.floor(Math.random() * 4);
  const w = window.innerWidth;
  const h = window.innerHeight;
  const offset = Math.random() * (side % 2 === 0 ? w : h);

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: w, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: h, angle: 225 };
    default:
      return { x: 0, y: offset, angle: 315 };
  }
}

/**
 * A single shooting star traces a slow diagonal streak across the
 * container at a time, fading out as it exits — an ambient touch, not a
 * shower. Positions are viewport-relative so the SVG should size to its
 * parent via `className` (defaults to filling it).
 */
export function ShootingStars({
  minSpeed = 10,
  maxSpeed = 22,
  minDelay = 2200,
  maxDelay = 6200,
  starColor = "#F6F3EE",
  trailColor = "#C9A84C",
  starWidth = 12,
  starHeight = 1,
  className,
}: ShootingStarsProps) {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const gradientId = React.useId().replace(/[:]/g, "");

  const createStar = useCallback(() => {
    const { x, y, angle } = getRandomStartPoint();
    setStar({
      id: Date.now(),
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      distance: 0,
    });
  }, [maxSpeed, minSpeed]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const schedule = () => {
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId = setTimeout(() => {
        createStar();
        schedule();
      }, delay);
    };
    createStar();
    schedule();
    return () => clearTimeout(timeoutId);
  }, [createStar, maxDelay, minDelay]);

  useEffect(() => {
    if (!star) return;
    const rafId = requestAnimationFrame(() => {
      setStar((prev) => {
        if (!prev) return null;
        const rad = (prev.angle * Math.PI) / 180;
        const nx = prev.x + prev.speed * Math.cos(rad);
        const ny = prev.y + prev.speed * Math.sin(rad);
        const nDistance = prev.distance + prev.speed;
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (nx < -20 || nx > w + 20 || ny < -20 || ny > h + 20) return null;
        return { ...prev, x: nx, y: ny, distance: nDistance, scale: 1 + nDistance / 140 };
      });
    });
    return () => cancelAnimationFrame(rafId);
  }, [star]);

  return (
    <svg ref={svgRef} className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} aria-hidden="true">
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill={`url(#${gradientId})`}
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={trailColor} stopOpacity="0" />
          <stop offset="100%" stopColor={starColor} stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number, h: number, nt: number, i: number, x: number, ctx: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    ctx = context;

    const getThemeBackgroundFill = () => {
      if (backgroundFill) return backgroundFill;
      try {
        const raw = getComputedStyle(document.documentElement)
          .getPropertyValue("--background")
          .trim();
        return raw ? `hsl(${raw})` : "black";
      } catch {
        return "black";
      }
    };

    let currentBackgroundFill = getThemeBackgroundFill();
    const themeObserver = new MutationObserver(() => {
      currentBackgroundFill = getThemeBackgroundFill();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    const resize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    resize();
    nt = 0;
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.fillStyle = currentBackgroundFill;
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  useEffect(() => {
    const cleanupResize = init();
    return () => {
      if (animationIdRef.current != null) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      cleanupResize?.();
    };
  }, []);

  return (
    <div
      className={cn(
        // Full-page wrapper for content; background is fixed to the viewport.
        "relative isolate min-h-[100dvh] w-full",
        containerClassName
      )}
    >
      <canvas
        className="fixed inset-0 z-0 block h-[100dvh] w-[100vw] pointer-events-none"
        ref={canvasRef}
        id="canvas"
        aria-hidden="true"
      ></canvas>
      <div className={cn("relative z-10 w-full overflow-x-hidden", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

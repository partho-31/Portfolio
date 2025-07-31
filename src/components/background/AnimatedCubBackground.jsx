import { useEffect, useRef } from "react";

function CubeSide({ transform, bg }) {
  return (
    <div
      className={`absolute w-full h-full rounded-xl shadow-inner border border-white/10 bg-gradient-to-br ${bg}`}
      style={{ transform }}
    />
  );
}

export default function AnimatedCubeBackground() {
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = (t) => {
      if (!ref.current) return;

      const rotate = Math.sin(t / 10000) * 200;
      const y = (1 + Math.sin(t / 1000)) * -50;
      ref.current.style.transform = `
        translateY(${y}px)
        rotateX(${rotate}deg)
        rotateY(${rotate}deg)
      `;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className="
        fixed top-1/2 left-1/2
        w-[200px] h-[200px]
        -translate-x-1/2 -translate-y-1/2
        perspective-[800px]
        opacity-40 blur-sm
        pointer-events-none
        z-0
      "
    >
      <div
        ref={ref}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        <CubeSide transform="rotateY(0deg) translateZ(100px)" bg="from-blue-600 to-indigo-600" />
        <CubeSide transform="rotateY(90deg) translateZ(100px)" bg="from-indigo-600 to-purple-600" />
        <CubeSide transform="rotateY(180deg) translateZ(100px)" bg="from-purple-600 to-pink-600" />
        <CubeSide transform="rotateY(-90deg) translateZ(100px)" bg="from-pink-600 to-fuchsia-600" />
        <CubeSide transform="rotateX(90deg) translateZ(100px)" bg="from-blue-400 to-purple-400" />
        <CubeSide transform="rotateX(-90deg) translateZ(100px)" bg="from-black to-indigo-900" />
      </div>
    </div>
  );
}

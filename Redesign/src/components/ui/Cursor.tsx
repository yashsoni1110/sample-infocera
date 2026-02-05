import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../../lib/utils";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Move cursor logic
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // Hover listeners
    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'a' || 
            target.tagName.toLowerCase() === 'button' ||
            target.closest('a') || 
            target.closest('button') ||
            target.classList.contains('cursor-pointer')
        ) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hover animation
  useEffect(() => {
      if (isHovering) {
        gsap.to(followerRef.current, { scale: 3, opacity: 0.1, duration: 0.3 });
        gsap.to(cursorRef.current, { scale: 0.5, opacity: 0, duration: 0.3 });
      } else {
        gsap.to(followerRef.current, { scale: 1, opacity: 0.5, duration: 0.3 });
        gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
      }
  }, [isHovering]);

  return (
    <>
      {/* Main Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion"
      />
      {/* Follower Ring */}
      <div 
        ref={followerRef}
        className={cn(
            "fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px] transition-colors duration-300",
            isHovering ? "bg-primary/20 border-primary/50" : "bg-transparent"
        )}
      />
    </>
  );
};

export default Cursor;

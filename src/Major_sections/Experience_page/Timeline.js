import React from "react";
import { useSpring, animated, useTrail } from "react-spring";
import { useState, useEffect, useRef } from "react";
import Text_blocks from "./Text_blocks";

function useIntersectionObserver(
  elementRef,
  { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
) {
  const [entry, setEntry] = useState();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}

function Timeline(props) {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });

  var width = window.innerWidth;

  const center = width / 2;

  const trail = useTrail(8, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 500 },
    opacity: dataRef?.isIntersecting ? 1 : 0,
    height: dataRef?.isIntersecting ? 110 : 0,
    from: { opacity: 0, height: 0 },
  });

  return (
    <div className="relative" ref={triggerRef}>
      <animated.div
        className="bg-black w-2 absolute rounded-full "
        style={{ top: "0px", left: `${center}px`, height: "100%" }}
      ></animated.div>
      <div className="w-screen h-auto ">
        {trail.map((styles, index) => (
          <animated.div style={styles}>
            <Text_blocks index={index} />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

Timeline.propTypes = {};

export default Timeline;

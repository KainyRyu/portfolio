import { useEffect, useRef, useState } from 'react';

const useIntersect = () => {
  let threshold = 0;
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => setEntry(entry), {
      threshold,
    }),
  );

  useEffect(() => {
    if (observer && observer.current) {
      const { current: currentObserver } = observer;
      currentObserver.disconnect();
      if (node) currentObserver.observe(node);
      return () => currentObserver.disconnect();
    }
  }, [node]);

  return { setNode, entry };
};

export default useIntersect;

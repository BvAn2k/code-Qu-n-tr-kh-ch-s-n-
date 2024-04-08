import React, { useRef, useEffect } from 'react';
import './Scrollbar.css'; // Import file CSS cho component

function Scrollbar(props) {
  const containerRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    const scrollbarEl = scrollbarRef.current;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = containerEl;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      scrollbarEl.style.height = `${scrollPercentage}%`;
    };

    containerEl.addEventListener('scroll', handleScroll);

    return () => {
      containerEl.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="scroll-content">
        {props.children}
      </div>
      <div className="scrollbar" ref={scrollbarRef}></div>
    </div>
  );
}

export default Scrollbar;
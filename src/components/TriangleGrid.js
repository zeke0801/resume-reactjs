import React, { useEffect, useRef } from 'react';
import './CSS/triangleGrid.css';

const TriangleGrid = ({ skills }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const blocks = entry.target.querySelectorAll('.block');
          blocks.forEach((block, index) => {
            block.style.animation = `fadeIn 0.5s ${0.1 * index}s forwards`;
          });
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const rows = [5, 4, 3]; // Number of blocks per row
  let index = 0;

  return (
    <div className="triangleGrid" ref={containerRef}>
      {rows.map((numBlocks, rowIndex) => (
        <div key={rowIndex} className="triangleRow">
          {Array.from({ length: numBlocks }).map((_, blockIndex) => {
            if (index < skills.length) {
              const skill = skills[index++];
              return (
                <div
                  key={blockIndex}
                  className="block"
                >
                  <img src={skill.img} alt={skill.label} /><br />
                  {skill.label}
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default TriangleGrid;

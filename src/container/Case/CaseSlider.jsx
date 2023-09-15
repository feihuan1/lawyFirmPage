import { useState, useRef, useEffect, useCallback, useContext } from "react";

import Context from "../../context/context";
import './CaseSlider.css'



const CaseSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const context = useContext(Context)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlidesContainerStylesWithWidth = () => ({
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 4000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div className="slider-container" >
      <div>
        <div onClick={goToPrevious} className="arrows left">
          ❰
        </div>
        <div onClick={goToNext} className="arrows right">
          ❱
        </div>
      </div>

      <div className="sliders-container">
        <div style={getSlidesContainerStylesWithWidth()} className="slides">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={{width: `${parentWidth}px`}}
              className="slide"
            >
              <h1>{context.isEnglish? slide.title.EN : slide.title.CH}</h1>
              <p>{context.isEnglish? slide.summary.EN : slide.summary.CH}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="dot-container">
        {slides.map((slide, slideIndex) => (
          <div
            style={{
              color: slideIndex === currentIndex ? "white" : "gray",
            }}
            className="dot"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSlider;

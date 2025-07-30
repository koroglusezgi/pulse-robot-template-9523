
import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible based on progress
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-humanoid">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                <span>What is Kotodama AI?</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              Revolutionary AI Voice Technology
            </h2>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-purple-200/80 to-pink-300/70"
                style={{
                  backgroundImage: "url('/background-section1-purple.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "multiply"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Voice Cloning</span>
                </div>
              </div>
              
              {/* Mobile: Background image */}
              <div 
                className="absolute inset-0 z-5 bg-center bg-cover opacity-50 md:hidden"
                style={{
                  backgroundImage: "url('/lovable-uploads/9e5898fd-4ca5-4477-accf-89708ec49330.png')"
                }}
              ></div>
              
              {/* Tablet and larger: Left side image */}
              <div className="hidden md:block absolute left-0 top-0 w-1/2 h-full z-5">
                <img 
                  src="/lovable-uploads/9e5898fd-4ca5-4477-accf-89708ec49330.png" 
                  alt="Voice cloning illustration"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center md:justify-end">
                <div className="max-w-lg md:w-1/2 bg-gradient-to-r from-black/70 to-purple-900/60 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4 drop-shadow-2xl">
                    Clone any voice with just seconds of audio
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Second Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pink-200/80 to-purple-300/70"
                style={{
                  backgroundImage: "url('/background-section2-purple.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "multiply"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Multilingual</span>
                </div>
              </div>
              
              {/* Mobile: Background image */}
              <div 
                className="absolute inset-0 z-5 bg-center bg-cover opacity-50 md:hidden"
                style={{
                  backgroundImage: "url('/lovable-uploads/9e5898fd-4ca5-4477-accf-89708ec49330.png')"
                }}
              ></div>
              
              {/* Tablet and larger: Left side image */}
              <div className="hidden md:block absolute left-0 top-0 w-1/2 h-full z-5">
                <img 
                  src="/lovable-uploads/9e5898fd-4ca5-4477-accf-89708ec49330.png" 
                  alt="Multilingual voice illustration"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center md:justify-end">
                <div className="max-w-lg md:w-1/2 bg-gradient-to-r from-black/70 to-purple-900/60 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4 drop-shadow-2xl">
                    Transform your voice into 30+ languages instantly
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Third Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-purple-200/80 to-pink-300/70"
                style={{
                  backgroundImage: "url('/background-section3-purple.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "multiply"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Professional</span>
                </div>
              </div>
              
              {/* Mobile: Background image */}
              <div 
                className="absolute inset-0 z-5 bg-center bg-cover opacity-50 md:hidden"
                style={{
                  backgroundImage: "url('/lovable-uploads/9e5898fd-4ca5-4477-accf-89708ec49330.png')"
                }}
              ></div>
              
              {/* Tablet and larger: Left side image */}
              <div className="hidden md:block absolute left-0 top-0 w-1/2 h-full z-5">
                <img 
                  src="/lovable-uploads/9e5898fd-4ca5-4477-accf-89708ec49330.png" 
                  alt="Professional quality illustration"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center md:justify-end">
                <div className="max-w-lg md:w-1/2 bg-gradient-to-r from-black/70 to-purple-900/60 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4 drop-shadow-2xl">
                    Studio-grade quality, <span className="text-pulse-400">no actors needed</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidSection;

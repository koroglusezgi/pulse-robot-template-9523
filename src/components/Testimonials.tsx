
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  // role: string;
  // gradient: string;
  // backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "“Professional. I typed a script, and my voice said it perfectly. Instant podcast!”",
  author: "YukiMm"
  // role: "Podcast Producer, TechTalk Studios",
  // gradient: "from-blue-700 via-indigo-800 to-purple-900",
  // backgroundImage: "/background-section1.png"
}, {
  content: "“I now create my content only from the phone, thanks to this”",
  author: "LeoG12",
  
}, {
  content: "“I subscribed just to try voice cloning, and yeah, it kept up with my expectation.”",
  author: "Maccy",
 
}];

const TestimonialCard = ({ content, author }: TestimonialProps) => {
  return (
    <div className="min-w-[300px] sm:min-w-[400px] h-[280px] border border-[rgb(19_35_27/0.08)] rounded-lg p-8 flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden">
      <div className="relative z-0 flex flex-col items-center">
        <img
          src="/stars.png"
          alt="Kotodama AI Voice Cloning App"
          className="w-[128px] h-[auto] object-cover transition-transform duration-500 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <p className="text-xl my-4 font-normal text-center leading-relaxed text text-black">{content}</p>
        <div>
          <h4 className="font-medium text-xl text-black">{author}</h4>
        </div>
      </div>
    </div>
  );
};


const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Testimonials</span>
          </div>
        </div>
        
        <h2 
              className="section-title mb-5 text-center text-2xl lg:text-left sm:text-3xl lg:text-4xl xl:text-6xl leading-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >What our users are saying?</h2>
        
        <div className="flex gap-7 overflow-scroll scrollbar-hide   sm:whitespace-normal ">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;

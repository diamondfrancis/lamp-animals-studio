import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Sarah M.",
    text: "This lamp is absolutely adorable and functional! The soft lighting is perfect for my late-night reading sessions. My productivity has improved significantly!",
    rating: 5,
  },
  {
    name: "Michael T.",
    text: "As a student, this lamp has been a game-changer. The phone holder is so convenient and the light doesn't strain my eyes during long study sessions.",
    rating: 5,
  },
  {
    name: "Emily R.",
    text: "I bought three of these as gifts and everyone loves them! The quality is excellent and the design is so cute. Highly recommend!",
    rating: 5,
  },
  {
    name: "David K.",
    text: "Best desk lamp I've ever owned. The adjustable neck and brightness levels are perfect. The animal design makes work more enjoyable!",
    rating: 5,
  },
  {
    name: "Jessica L.",
    text: "Worth every penny! The battery life is impressive and the charging is super fast. Love having my phone at eye level while working.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-card border rounded-2xl p-8 shadow-lg">
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-bold flex-shrink-0">
              {testimonials[current].name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                <div className="flex">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonials[current].text}"</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button variant="outline" size="icon" onClick={prev}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={next}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

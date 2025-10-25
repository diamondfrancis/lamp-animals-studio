import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const generateReviews = () => {
  const names = [
    "Sarah M.", "Michael T.", "Emily R.", "David K.", "Jessica L.",
    "James W.", "Amanda P.", "Robert H.", "Jennifer C.", "Thomas B.",
    "Lisa G.", "Christopher D.", "Patricia S.", "Daniel F.", "Michelle N.",
    "Andrew L.", "Elizabeth M.", "Matthew R.", "Ashley K.", "Joshua T.",
    "Stephanie W.", "Ryan P.", "Lauren H.", "Brandon C.", "Nicole V.",
    "Justin B.", "Rachel S.", "Kevin M.", "Megan D.", "Tyler G.",
  ];

  const reviews = [
    "This lamp exceeded all my expectations! The quality is outstanding.",
    "Perfect for late-night study sessions. My grades have improved!",
    "The cute design makes me smile every time I see it on my desk.",
    "Battery life is amazing. I only charge it once a week!",
    "Great value for money. I've recommended it to all my friends.",
    "The phone holder is genius. So convenient while working.",
    "Soft lighting is perfect for my eyes. No more headaches!",
    "Arrived quickly and well-packaged. Excellent service!",
    "My daughter loves this lamp. It's her favorite desk accessory.",
    "The adjustable brightness is perfect for any time of day.",
  ];

  return Array.from({ length: 30 }, (_, i) => ({
    name: names[i],
    rating: i % 10 === 0 ? 4 : 5,
    text: reviews[i % reviews.length],
    date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  }));
};

const allReviews = generateReviews();

export const Reviews = () => {
  const [page, setPage] = useState(0);
  const reviewsPerPage = 10;
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
  
  const currentReviews = allReviews.slice(
    page * reviewsPerPage,
    (page + 1) * reviewsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-16 bg-secondary/30">
      <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {currentReviews.map((review, idx) => (
          <div key={idx} className="bg-card border rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-lg font-bold">
                {review.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{review.name}</div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">{review.text}</p>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="text-sm font-medium">
          Page {page + 1} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
          disabled={page === totalPages - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

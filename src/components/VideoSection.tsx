import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-secondary/30">
      <h2 className="text-3xl font-bold text-center mb-12">See It in Action</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[1, 2, 3].map((idx) => (
          <div key={idx} className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
              <p className="font-semibold">Video {idx}</p>
              <p className="text-sm opacity-90">Customer review</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

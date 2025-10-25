import { Sparkles, Moon, Lightbulb, Smartphone } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    { emoji: "💡", text: "Adjustable soft lighting perfect for any environment" },
    { emoji: "🐱", text: "Adorable animal design adds charm to any desk" },
    { emoji: "📱", text: "Built-in phone holder for hands-free viewing" },
    { emoji: "🔋", text: "USB rechargeable with long-lasting battery life" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Why You'll Love It</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
            <span className="text-3xl flex-shrink-0">{benefit.emoji}</span>
            <p className="text-lg pt-1">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

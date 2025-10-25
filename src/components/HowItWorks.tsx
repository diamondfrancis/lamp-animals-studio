import { Box, Plug, Lightbulb } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Box,
      title: "Unbox & Setup",
      description: "Remove from packaging and place on your desk. No assembly required!",
    },
    {
      icon: Plug,
      title: "Charge & Connect",
      description: "Charge via USB for 2-3 hours. Place your phone in the holder.",
    },
    {
      icon: Lightbulb,
      title: "Enjoy Perfect Lighting",
      description: "Adjust brightness with a tap and enjoy comfortable, eye-friendly lighting.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How to Use</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <step.icon className="w-10 h-10 text-accent" />
            </div>
            <div className="text-2xl font-bold mb-2">Step {idx + 1}</div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

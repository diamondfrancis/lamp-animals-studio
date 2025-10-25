import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Package, Zap, Shield, RefreshCw } from "lucide-react";

const quickFaqs = [
  {
    icon: Package,
    question: "Free shipping?",
    answer: "Yes! Free shipping on all orders over $50.",
  },
  {
    icon: Zap,
    question: "Battery life?",
    answer: "Up to 8 hours on a single charge with adjustable brightness.",
  },
  {
    icon: Shield,
    question: "Warranty?",
    answer: "1-year warranty covering manufacturing defects.",
  },
  {
    icon: RefreshCw,
    question: "Returns?",
    answer: "30-day money-back guarantee, no questions asked.",
  },
];

const detailedFaqs = [
  {
    question: "How do I charge the lamp?",
    answer: "The lamp comes with a USB charging cable. Simply connect it to any USB power source. A full charge takes approximately 2-3 hours.",
  },
  {
    question: "Can I adjust the brightness?",
    answer: "Yes! The lamp features three brightness levels. Simply tap the touch-sensitive button on the base to cycle through the settings.",
  },
  {
    question: "What colors are available?",
    answer: "The lamp is available in three adorable colors: Baby Blue, Soft Pink, and Lavender Purple.",
  },
  {
    question: "Is the lamp suitable for children?",
    answer: "Absolutely! The lamp is made from non-toxic, child-safe materials and features soft lighting that's gentle on the eyes.",
  },
  {
    question: "How do I clean the lamp?",
    answer: "Gently wipe the lamp with a soft, slightly damp cloth. Avoid using harsh chemicals or submerging in water.",
  },
  {
    question: "Does it work with all phone sizes?",
    answer: "The phone holder accommodates most smartphones from 4 to 7 inches. It's adjustable and secure for various device sizes.",
  },
];

export const FAQ = () => {
  return (
    <>
      {/* Quick FAQ */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl ml-auto">
          {quickFaqs.map((faq, idx) => (
            <div key={idx} className="bg-card border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <faq.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed FAQ */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {detailedFaqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

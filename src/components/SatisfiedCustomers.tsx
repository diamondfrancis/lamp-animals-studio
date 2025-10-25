import { Users, Package, Star, Shield } from "lucide-react";

export const SatisfiedCustomers = () => {
  const stats = [
    { icon: Users, value: "15,000+", label: "Satisfied Customers" },
    { icon: Package, value: "50,000+", label: "Products Sold" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Shield, value: "100%", label: "Secure Checkout" },
  ];

  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

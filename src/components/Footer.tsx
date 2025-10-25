import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Lamp Animals" className="h-8 w-8" />
              <span className="font-bold text-lg">Lamp Animals</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bringing light and joy to every desk with our adorable lamp designs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">All Products</Link></li>
              <li><Link to="/" className="hover:text-foreground">Best Sellers</Link></li>
              <li><Link to="/" className="hover:text-foreground">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
              <li><Link to="/track" className="hover:text-foreground">Track Order</Link></li>
              <li><Link to="/" className="hover:text-foreground">Shipping Info</Link></li>
              <li><Link to="/" className="hover:text-foreground">Returns</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-foreground">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Lamp Animals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

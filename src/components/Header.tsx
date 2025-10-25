import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart, Package, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { CartDrawer } from "./CartDrawer";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Lamp Animals" className="h-10 w-10" />
          <span className="text-xl font-bold">Lamp Animals</span>
        </Link>
        
        <nav className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link to="/">Shop</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/track">
              <Package className="h-4 w-4 mr-2" />
              Track Order
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/contact">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </Button>
          <CartDrawer />
        </nav>
      </div>
    </header>
  );
};

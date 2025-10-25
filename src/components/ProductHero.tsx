import { useState } from "react";
import { Button } from "./ui/button";
import { Star, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const productImages = [product1, product2, product3, product4];

interface ProductHeroProps {
  product?: ShopifyProduct;
}

export const ProductHero = ({ product }: ProductHeroProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!product) return;
    
    const variant = product.node.variants.edges[0];
    addItem({
      product,
      variantId: variant.node.id,
      variantTitle: variant.node.title,
      price: variant.node.price,
      quantity: selectedQuantity,
      selectedOptions: variant.node.selectedOptions,
    });
    
    toast.success("Added to cart!", {
      description: `${selectedQuantity}x ${product.node.title}`,
      position: "top-center",
    });
  };

  const price = product?.node.priceRange.minVariantPrice.amount || "0";
  const originalPrice = (parseFloat(price) * 1.5).toFixed(2);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 p-8">
            <img
              src={productImages[selectedImage]}
              alt="Soft Lighting Writing Assistant™"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === idx ? "border-primary scale-105" : "border-transparent"
                }`}
              >
                <img src={img} alt={`Product view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-3">
              Soft Lighting Writing Assistant™
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(2,547 reviews)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-2xl text-muted-foreground line-through">${originalPrice}</span>
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
              Save {Math.round((1 - parseFloat(price) / parseFloat(originalPrice)) * 100)}%
            </span>
          </div>

          <p className="text-lg text-muted-foreground">
            The perfect companion for late-night study sessions and creative work. Features adjustable brightness,
            cute animal design, and built-in phone holder for ultimate convenience.
          </p>

          {/* Bundle Options */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">Select Quantity</label>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((qty) => {
                const discount = qty === 1 ? 0 : qty === 2 ? 10 : 20;
                return (
                  <button
                    key={qty}
                    onClick={() => setSelectedQuantity(qty)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedQuantity === qty
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-lg font-bold">Buy {qty}</div>
                    {discount > 0 && (
                      <div className="text-sm text-accent font-semibold">Save {discount}%</div>
                    )}
                    <div className="text-sm text-muted-foreground">
                      ${(parseFloat(price) * qty * (1 - discount / 100)).toFixed(2)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <Button onClick={handleAddToCart} size="lg" className="w-full text-lg py-6">
            Add to Cart - ${(parseFloat(price) * selectedQuantity).toFixed(2)}
          </Button>

          <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg">
            <ShieldCheck className="w-6 h-6 text-accent" />
            <div>
              <div className="font-semibold">30-Day Money-Back Guarantee</div>
              <div className="text-sm text-muted-foreground">Not satisfied? Get a full refund, no questions asked.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductHero } from "@/components/ProductHero";
import { SatisfiedCustomers } from "@/components/SatisfiedCustomers";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { VideoSection } from "@/components/VideoSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { storefrontApiRequest, STOREFRONT_QUERY, ShopifyProduct } from "@/lib/shopify";

const Index = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_QUERY, { first: 1 });
        if (data?.data?.products?.edges?.length > 0) {
          setProduct(data.data.products.edges[0]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      
      {loading ? (
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="animate-pulse">Loading product...</div>
        </div>
      ) : product ? (
        <>
          <ProductHero product={product} />
          <SatisfiedCustomers />
          <Benefits />
          <Testimonials />
          <FAQ />
          <VideoSection />
          <HowItWorks />
          <Reviews />
        </>
      ) : (
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-2xl font-bold mb-4">No products found</h2>
          <p className="text-muted-foreground">
            Create a product by telling me what you want in the chat!
          </p>
        </div>
      )}
      
      <Footer />
      
      {/* Wave Divider before footer */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 animate-[wave_10s_ease-in-out_infinite]"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
            className="text-secondary/30"
          />
        </svg>
      </div>
    </div>
  );
};

export default Index;

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Destinations from "@/components/home/Destinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import Partners from "@/components/home/Partners";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <BlogSection />
      <Partners />
      <Footer />
    </main>
  );
}
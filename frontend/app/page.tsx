import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ArticleList />
      <Testimonials />
      <Footer />
    </>
  )
}
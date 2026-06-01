import Navbar from "@/components/Navbar";
import MasonryGallery from "@/components/MasonryGallery";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function PortfolioPage() {
  return (
    <PageTransition>
	<main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-40 px-6 pb-20">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            Портфолио
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl mb-20">
            Подборка избранных работ в разных направлениях:
            портретная, коммерческая, lifestyle и репортажная фотография.
          </p>

        </div>

        <MasonryGallery />
      </section>
	  <Footer />
    </main>
	</PageTransition>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function CasesPage() {
  return (
    <PageTransition>
	<main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-40 px-6 pb-20">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6">
            Cases
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-20">
            Кейсы
          </h1>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-zinc-900 rounded-3xl overflow-hidden">
              <img
                src="/images/case1.jpg"
                alt=""
                className="w-full h-[400px] object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  BMW M5 Competition
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Коммерческая репортажная съёмка
                  с акцентом на cinematic lighting
                  и премиальную подачу.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden">
              <img
                src="/images/case2.jpg"
                alt=""
                className="w-full h-[400px] object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Urban Portraits
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Серия городских портретов
                  с атмосферным вечерним светом
                  и кинематографичным стилем.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
	  <Footer />
    </main>
	</PageTransition>
  );
}
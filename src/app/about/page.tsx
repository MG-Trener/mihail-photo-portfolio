import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
	<main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-40 px-6 pb-20">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6">
            About
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-12">
            Обо мне
          </h1>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="/images/about.jpg"
                alt=""
                className="rounded-3xl"
              />
            </div>

            <div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                Меня зовут Михаил Гаврилычев.
                Я занимаюсь фотографией, создавая
                визуальные истории для людей,
                брендов и компаний более 15 лет.
              </p>

              <p className="text-zinc-500 leading-relaxed">
                Работаю в направлениях:
                коммерческая съёмка,
                lifestyle,
                портреты,
                репортаж,
                детская фотография.
              </p>
            </div>

          </div>
        </div>
      </section>
	  <Footer />
    </main>
	</PageTransition>
  );
}
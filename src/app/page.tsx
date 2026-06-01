import Navbar from "@/components/Navbar";
import MasonryGallery from "@/components/MasonryGallery";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
	<main className="bg-black text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full">

        {/* Background image */}
        <div
           className="absolute inset-0 bg-cover bg-center scale-110 animate-slowZoom"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
		<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
		<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-10">
          <div className="max-w-5xl">

            <p className="uppercase tracking-[0.4em] text-sm text-zinc-300 mb-6">
              Photographer Portfolio
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8">
              Гаврилычев
              <br />
              Михаил
            </h1>

            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Коммерческая, портретная и репортажная фотография.
              Визуальные истории для людей, брендов и компаний.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition duration-300">
                Смотреть работы
              </button>

              <div className="relative group">

  <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition duration-300">
    Связаться
  </button>

  <div className="absolute top-full left-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">

    <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex flex-col gap-2 min-w-[220px]">
<a
  href="https://instagram.com/mihagavr"
  target="_blank"
  className="px-4 py-3 rounded-xl hover:bg-white/10 transition"
>
  Instagram
</a>
      <a
        href="https://t.me/mihagavr"
        target="_blank"
        className="px-4 py-3 rounded-xl hover:bg-white/10 transition"
      >
        Telegram
      </a>

      <a
        href="https://wa.me/77078709384"
        target="_blank"
        className="px-4 py-3 rounded-xl hover:bg-white/10 transition"
      >
        WhatsApp
      </a>

    </div>

  </div>

</div>

            </div>
			<div className="mt-20">

  <div className="flex flex-col items-center gap-3">

    <p className="uppercase tracking-[0.3em] text-xs text-zinc-400">
      Scroll
    </p>

    <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-8 bg-white animate-scrollLine" />
    </div>

  </div>

</div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <MasonryGallery />
	  <Footer />
    </main>
	</PageTransition>
  );
}
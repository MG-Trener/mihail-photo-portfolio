import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const steps = [
  "Заявка",
  "Обсуждение идеи",
  "Подготовка",
  "Съёмка",
  "Обработка",
  "Передача материала",
];

export default function WorkflowPage() {
  return (
    <PageTransition>
	<main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-40 px-6 pb-20">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6">
            Workflow
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-20">
            Как я работаю
          </h1>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-3xl p-8 bg-zinc-900/40"
              >
                <p className="text-zinc-500 text-sm mb-2">
                  0{index + 1}
                </p>

                <h2 className="text-3xl font-semibold">
                  {step}
                </h2>
              </div>
            ))}
          </div>

        </div>
      </section>
	  <Footer />
    </main>
	</PageTransition>
  );
}
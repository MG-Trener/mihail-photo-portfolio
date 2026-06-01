import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Гаврилычев Михаил
            </h2>

            <p className="text-zinc-500 max-w-md leading-relaxed">
              Коммерческая, портретная и lifestyle фотография.
              Визуальные истории для людей и брендов.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-zinc-400">

            <Link href="/">
              Главная
            </Link>

            <Link href="/portfolio">
              Портфолио
            </Link>

            <Link href="/cases">
              Кейсы
            </Link>

            <Link href="/workflow">
              Как я работаю
            </Link>

            <Link href="/about">
              Обо мне
            </Link>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-zinc-600 text-sm">
          © 2026 Гаврилычев Михаил
        </div>

      </div>
    </footer>
  );
}
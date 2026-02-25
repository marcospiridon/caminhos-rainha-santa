import { ArrowDown } from "lucide-react"
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="hero.jpg"
        alt={t('hero.imageAlt')}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="text-sm tracking-[0.35em] uppercase text-white/80 mb-6 font-sans">
          {t('hero.category')}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight text-balance max-w-4xl">
          {t('header.title')}
        </h1>
        <p className="mt-8 text-base md:text-lg text-white/80 max-w-xl leading-relaxed font-sans">
          {t('hero.description')}
        </p>

        <a
          href="#trilho"
          className="mt-16 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
          aria-label={t('hero.discoverAlt')}
        >
          <span className="text-xs tracking-widest uppercase">{t('hero.discover')}</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

type Props = {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  dark?: boolean;
  id?: string;
  className?: string;
};

export function SectionShell({
  children,
  eyebrow,
  title,
  description,
  dark = false,
  id,
  className = "",
}: Props) {
  const bg = dark ? "bg-[#0f1a16] text-white" : "bg-background text-foreground";
  return (
    <section id={id} className={`${bg} py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6">
        {(eyebrow || title || description) && (
          <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            {eyebrow && (
              <p
                className={`text-xs font-bold uppercase tracking-[0.18em] ${
                  dark ? "text-[#10b981]" : "text-[#10b981]"
                }`}
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`mt-3 text-3xl font-bold leading-[1.1] md:text-5xl ${
                  dark ? "text-white" : "text-foreground"
                }`}
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
                  dark ? "text-white/75" : "text-muted-foreground"
                }`}
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

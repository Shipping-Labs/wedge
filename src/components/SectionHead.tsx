/** `.sec-head`: eyebrow + h2 (+ optional lead paragraph). */
export default function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-11 max-w-[640px]">
      {/* inside .sec-head the eyebrow picks up the paragraph style (muted, 1.1rem, 14px top margin) */}
      <p className="mt-3.5 text-[1.1rem] font-bold tracking-[0.14em] text-muted uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2.5">{title}</h2>
      {children && (
        <p className="mt-3.5 text-[1.1rem] text-muted">{children}</p>
      )}
    </div>
  );
}

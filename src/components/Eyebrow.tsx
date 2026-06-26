export default function Eyebrow({
  children,
  inverted = false,
}: {
  children: React.ReactNode
  inverted?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] ${
        inverted ? 'text-paper' : 'text-ink'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${inverted ? 'bg-paper' : 'bg-ink'}`} />
      {children}
    </div>
  )
}

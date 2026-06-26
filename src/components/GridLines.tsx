export default function GridLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 mx-auto flex max-w-[1600px] justify-between px-6 md:px-12 lg:px-16">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-full w-px bg-ink/[0.06]" />
      ))}
    </div>
  )
}

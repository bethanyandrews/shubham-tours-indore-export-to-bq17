interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({ title, subtitle, centered = true, light }: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-2xl md:text-3xl font-bold tracking-tight ${light ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-sm md:text-base ${light ? 'text-white/70' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full ${centered ? 'mx-auto' : ''} bg-accent`} />
    </div>
  )
}

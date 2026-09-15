import { useScrollReveal } from './useScrollReveal';

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
}) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const animations = {
    'fade-up': 'opacity-0 translate-y-12 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0',
    'fade-down': 'opacity-0 -translate-y-12 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0',
    'fade-left': 'opacity-0 -translate-x-12 data-[visible=true]:opacity-100 data-[visible=true]:translate-x-0',
    'fade-right': 'opacity-0 translate-x-12 data-[visible=true]:opacity-100 data-[visible=true]:translate-x-0',
    'fade-scale': 'opacity-0 scale-95 data-[visible=true]:opacity-100 data-[visible=true]:scale-100',
  };

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className={`transition-all duration-700 ease-out will-change-transform ${animations[animation] || animations['fade-up']} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

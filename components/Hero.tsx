/**
 * Hero Component
 * 
 * EDIT THIS FILE TO:
 * - Change hero text
 * - Update hero styling
 * - Modify subtitle/description
 * - Change image path or styling
 * 
 * Location: components/Hero.tsx
 */
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({ title, subtitle, imageSrc, imageAlt = 'Portrait' }: HeroProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Section */}
          {imageSrc && (
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
          
          {/* Text Section */}
          <div className={`text-center ${imageSrc ? 'md:text-left' : ''} flex-1`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto md:mx-0 drop-shadow-md">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


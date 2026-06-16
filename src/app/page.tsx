import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StoryGenerator } from '@/components/ai/story-generator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
              Farsh Bazaar: A New Meta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Connecting master artisans with the world, built on the foundations of meaning, opportunity, and unity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/vendors">Explore Showrooms</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/manifesto">Read the Manifesto</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI Story Generator Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <StoryGenerator />
          </div>
        </section>

        {/* Vision Intro */}
        <section className="py-20 bg-background">
          <div className="container px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8">Part of Project Afarinesh</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Farsh Bazaar is the first executive arm of the FB New Meta ecosystem. We are building Tavana City, 
              a digital world designed to empower specialists and preserve cultural heritage through modern technology.
            </p>
            <Button asChild variant="link" className="mt-6 text-primary">
                <Link href="/ecosystem">Explore the Full Ecosystem →</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
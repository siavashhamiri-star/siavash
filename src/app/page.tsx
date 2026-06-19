import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StoryGenerator } from '@/components/ai/story-generator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Trophy, Heart } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Mobile Build Badge */}
        <div className="bg-primary/10 border-b border-primary/20 py-2">
          <div className="container px-4 flex items-center justify-center gap-2 text-[10px] md:text-xs font-medium text-primary">
            <Smartphone className="w-3 h-3" />
            <span>Built with 🤍 using only a small mobile phone (Redmi Note 8) in 9 days</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">این برنامه تنها با یک گوشی کوچک در ۹ روز خلق شده است</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10 text-center text-white px-4">
            <Badge className="mb-4 bg-primary hover:bg-primary border-none text-white px-4 py-1">
              FB New Meta / نیو متاورس
            </Badge>
            <h1 className="text-4xl md:text-7xl font-headline font-bold mb-4 tracking-tight">
              Farsh Bazaar
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              In memory of <strong>Haj Hossein Alimiri</strong>, a legend of the global carpet trade. 
              Built upon the legacy of <strong>"Hossein Alimiri & Sons"</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                <Link href="/vendors">Explore Showrooms</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8">
                <Link href="/manifesto">The Book of Creation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tribute Section */}
        <section className="py-16 bg-background border-b">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex justify-center">
                 <Heart className="w-10 h-10 text-primary fill-primary/10" />
              </div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold">میراثی از تار و پود عشق</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                این اپلیکیشن، برآمده از خانواده‌ای است که نسل‌ در نسل بر سر سفره‌ی پربرکت هنر فرش ایران نشسته و قد کشیده‌اند. 
                ادای دینی است به نام بلند <strong>حاج حسین علیمیری</strong> و میراث ماندگار <strong>فرش علیمیری و پسران</strong>.
              </p>
              <p className="text-sm italic text-muted-foreground">
                (This application was born from a family that for generations has flourished at the table of the magnificent art of Iranian carpets. 
                A tribute to the grand name of Haj Hossein Alimiri and the lasting legacy of Alimiri Carpets & Sons.)
              </p>
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
            <Badge variant="outline" className="mb-4 border-primary text-primary">Project Afarinesh / پروژه آفرینش</Badge>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Tavana Virtual City / شهر مجازی توانا</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Farsh Bazaar is the first step in the FB New Meta ecosystem. A world designed to empower specialists and 
              preserve cultural heritage. Built from scratch on a mobile phone, proving that in Tavana City, 
              capability is the only limit.
            </p>
            <Button asChild variant="link" className="mt-6 text-primary font-bold">
                <Link href="/ecosystem">Explore the FB New Meta Ecosystem →</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

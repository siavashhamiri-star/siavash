
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StoryGenerator } from '@/components/ai/story-generator';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Brush, Globe, Handshake, Warehouse } from 'lucide-react';

const features = [
  {
    icon: <Warehouse className="w-8 h-8 text-primary" />,
    title: 'Vendor Directory',
    description:
      'Explore a curated directory of carpet vendors from across the globe. Find artisans, traders, and specialists with ease.',
    link: '/vendors',
    linkText: 'Browse Vendors',
  },
  {
    icon: <Brush className="w-8 h-8 text-primary" />,
    title: 'Virtual Showrooms',
    description:
      "Step into digital 'ghorfeh' (rooms) where vendors showcase their finest carpets with rich details and stunning imagery.",
    link: '/vendors',
    linkText: 'See Showrooms',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Global Trade Hub',
    description:
      'Connect with merchants and businesses, discover new opportunities, and become part of a thriving international carpet trade community.',
    link: '#',
    linkText: 'Start Trading',
  },
  {
    icon: <Handshake className="w-8 h-8 text-primary" />,
    title: 'Investment & Partnerships',
    description:
      'Find support or invest in businesses related to the art of carpet-making, from weaving workshops to material suppliers.',
    link: '#',
leLink: 'Explore Opportunities',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[70vh] text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
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
          <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight">
              Every carpet seller, an online showroom.
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl">
              خواسته ما معرفی مجدد هنر فرش دستباف و کمک در جهت رشد و ارتقای حضور فرش دستباف در منازل مردمان در سراسر جهان است
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/vendors">Explore the Bazaar</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#story-generator">Weave a Story</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">A Modern Souk for an Ancient Art</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                Farsh Bazaar is more than a marketplace; it's a community dedicated to reviving the global appreciation and economy of carpet making.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                    <Button variant="link" asChild className="p-0 h-auto mt-4 text-primary">
                      <Link href={feature.link}>
                        {feature.linkText} <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="story-generator" className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
             <StoryGenerator />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Invest in Artistry, Partner in Legacy</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our platform connects you with opportunities to support the carpet industry's ecosystem. From sponsoring an artisan's workshop to investing in innovative, sustainable material production, you can be part of the story.
                        </p>
                        <div className="mt-8 flex gap-4">
                             <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">Become an Investor</Button>
                             <Button size="lg" variant="outline">Seek Partnership</Button>
                        </div>
                    </div>
                    <div>
                        <Card className="overflow-hidden">
                            <CardContent className="p-0">
                                <Image
                                    src="https://picsum.photos/seed/invest/800/600"
                                    alt="Hands weaving a carpet"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    data-ai-hint="weaving hands"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

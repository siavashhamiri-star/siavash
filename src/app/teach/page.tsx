
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { BookMarked } from 'lucide-react';
  
  export default function TeachPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <BookMarked className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">
                  Teach Specialized Language on Farsh Bazaar
                </CardTitle>
                <CardDescription className="text-lg">
                  An Invitation for Expert Language Instructors
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-center text-foreground/80 mx-auto">
                <p>
                از مدرسان زبانی که دارای مدرک تخصصی آیلتس و تافل در زمینه تخصصی تجارت فرش هستند دعوت میشود در آپ در قسمت آموزش زبان به تدریس زبان تخصصی تجارت و فرش بپردازند.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                (Language instructors with specialized IELTS and TOEFL qualifications in the field of the carpet trade are invited to teach the specialized language of business and carpets in the app's language education section.)
                </p>
                <div className="mt-8 pt-6 border-t">
                    <p className="font-semibold text-foreground">
                    شرایط همکاری متعاقبا اعلام خواهد شد.
                    </p>
                    <p className="text-sm text-muted-foreground">
                    (Collaboration conditions will be announced subsequently.)
                    </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
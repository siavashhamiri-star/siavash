
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { Megaphone } from 'lucide-react';
  
  export default function CollaborationPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Megaphone className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">
                  Invitation to Collaborate
                </CardTitle>
                <CardDescription className="text-lg">
                  Social Media, Content Creation, and Digital Growth
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-center text-foreground/80 mx-auto">
                <p>
                از کسانی که در اینستاگرام، یوتیوب و لینکدین پیج دارند و یا می‌سازند و فعالیت می‌کنند دعوت به همکاری می‌شود. در ضمن، اعضای محترمی که قصد دارند فروشگاه خود را به لینکدین، اینستاگرام یا یوتیوب لینک کنند، بایستی با افراد مورد وثوق آپ به عنوان سازنده پیج یا ارتقا دهنده و سازنده غرفه ویژه خودشون در برنامه تعامل کنند.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                (We invite those who have or create and operate pages on Instagram, YouTube, and LinkedIn to collaborate. Additionally, respected members who wish to link their showroom to LinkedIn, Instagram, or YouTube must interact with trusted individuals within the app, who can act as page creators, enhancers, or builders of their special virtual booth.)
                </p>
                <div className="mt-8 pt-6 border-t">
                    <p className="font-semibold text-foreground">
                    شرایط همکاری و لیست همکاران مورد وثوق متعاقبا اعلام خواهد شد.
                    </p>
                    <p className="text-sm text-muted-foreground">
                    (Collaboration conditions and the list of trusted partners will be announced subsequently.)
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
  
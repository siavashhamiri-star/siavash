import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SearchX, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-secondary/10">
        <div className="text-center space-y-6 p-8">
          <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <SearchX className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-headline font-bold">صفحه مورد نظر یافت نشد</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            متأسفانه آدرسی که به دنبال آن هستید در تار و پود فرش بازار بافته نشده است.
          </p>
          <Button asChild className="rounded-full h-12 px-8 shadow-lg">
            <Link href="/">
              <Home className="ml-2 w-4 h-4" />
              بازگشت به عمارت اصلی
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

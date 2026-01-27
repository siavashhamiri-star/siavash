
import Link from 'next/link';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo />
            <span className="font-bold font-headline text-lg">Farsh Bazaar</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Farsh Bazaar. All rights reserved.
            </p>
            <nav className="flex justify-center md:justify-end flex-wrap gap-x-4 mt-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us / درباره ما
              </Link>
              <Link href="/manifesto" className="text-sm text-muted-foreground hover:text-primary">
                Our Vision / چشم‌انداز
              </Link>
              <Link href="/ecosystem" className="text-sm text-muted-foreground hover:text-primary">
                Ecosystem / اکوسیستم
              </Link>
              <Link href="/feedback" className="text-sm text-muted-foreground hover:text-primary">
                Feedback / بازخورد
              </Link>
              <Link href="/lingoview" className="text-sm text-muted-foreground hover:text-primary">
                LingoView / گویا
              </Link>
              <Link href="/collaboration" className="text-sm text-muted-foreground hover:text-primary">
                Partnership / مشارکت
              </Link>
              <Link href="/publishing-guide" className="text-sm text-muted-foreground hover:text-primary">
                Publishing Guide / راهنمای انتشار
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy / حریم خصوصی
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms / شرایط خدمات
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

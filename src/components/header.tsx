
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Menu, ShoppingCart, Sparkles } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserNav } from '@/components/user-nav';
import { useUser } from '@/firebase';

const navItems = [
  { href: '/', label: 'Home / خانه' },
  { href: '/vendors', label: 'Showrooms / نمایشگاه‌ها' },
  { href: '/handicrafts', label: 'Handicrafts / صنایع دستی' },
  { href: '/ecosystem', label: 'Ecosystem / اکوسیستم' },
  { href: '/manifesto', label: 'Our Vision / چشم‌انداز' },
];

export function Header() {
  const { data: user, isLoading } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-bold font-headline text-xl leading-none">Farsh Bazaar</span>
              <span className="text-[10px] text-primary font-medium tracking-widest uppercase">FB New Meta</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium ml-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
            <Button asChild variant="outline" size="sm" className="hidden sm:flex border-accent text-accent hover:bg-accent/5">
                <Link href="/handicrafts">
                   <ShoppingCart className="w-4 h-4 ml-2" />
                   بازار آنلاین
                </Link>
            </Button>
            
            {isLoading ? null : user ? (
              <UserNav />
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" asChild size="sm">
                  <Link href="/login">Login</Link>
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="flex flex-col h-full p-6">
                    <Link href="/" className="flex items-center space-x-2 mb-8 border-b pb-4">
                        <Logo />
                        <div className="flex flex-col">
                          <span className="font-bold font-headline text-lg">Farsh Bazaar</span>
                          <span className="text-[10px] text-primary uppercase">FB New Meta</span>
                        </div>
                    </Link>
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-base transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                        ))}
                        <Link href="/ads/new" className="text-accent font-bold flex items-center gap-2">
                           <Sparkles className="w-4 h-4" />
                           ثبت آگهی صنایع دستی
                        </Link>
                    </nav>
                    {!user && (
                       <div className="mt-auto flex flex-col space-y-2">
                         <Button variant="outline" asChild>
                           <Link href="/login">Login</Link>
                         </Button>
                         <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                           <Link href="/signup">Sign Up</Link>
                         </Button>
                       </div>
                    )}
                </div>
              </SheetContent>
            </Sheet>
        </div>

      </div>
    </header>
  );
}

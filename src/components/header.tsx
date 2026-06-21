
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Menu, ShoppingCart, Sparkles, Globe, ChevronDown, BookOpen, Trophy } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserNav } from '@/components/user-nav';
import { useUser } from '@/firebase';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES, type Language } from '@/lib/types';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home / خانه' },
  { href: '/magazine', label: 'Magazine / مجله' },
  { href: '/legends', label: 'Legends / مشاهیر' },
  { href: '/vendors', label: 'Showrooms / نمایشگاه‌ها' },
  { href: '/handicrafts', label: 'Handicrafts / صنایع دستی' },
  { href: '/ecosystem', label: 'Ecosystem / اکوسیستم' },
];

export function Header() {
  const { data: user, isLoading } = useUser();
  const [currentLang, setCurrentLang] = useState<Language>('fa');

  const selectedLang = LANGUAGES.find(l => l.code === currentLang);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-bold font-headline text-xl leading-none text-primary">Farsh Bazaar</span>
              <span className="text-[10px] text-primary font-medium tracking-widest uppercase">FB New Meta</span>
            </div>
          </Link>
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium ml-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-primary text-foreground/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 px-2 hover:bg-primary/5">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="hidden sm:inline text-xs font-bold">{selectedLang?.label}</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => setCurrentLang(lang.code)}
                    className="gap-2 cursor-pointer p-3"
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild variant="outline" size="sm" className="hidden sm:flex border-primary text-primary hover:bg-primary/5 rounded-full">
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
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full" asChild size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden text-primary">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="flex flex-col h-full p-6">
                    <Link href="/" className="flex items-center space-x-2 mb-8 border-b pb-4">
                        <Logo className="w-10 h-10" />
                        <div className="flex flex-col">
                          <span className="font-bold font-headline text-lg text-primary">Farsh Bazaar</span>
                          <span className="text-[10px] text-primary uppercase">FB New Meta</span>
                        </div>
                    </Link>
                    <nav className="flex flex-col space-y-6">
                        {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-lg font-medium transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                        ))}
                        <Link href="/ads/new" className="text-accent font-bold flex items-center gap-2 border-t pt-4">
                           <Sparkles className="w-4 h-4" />
                           ثبت آگهی صنایع دستی
                        </Link>
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}

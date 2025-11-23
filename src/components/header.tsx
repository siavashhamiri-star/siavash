'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/vendors', label: 'Vendors' },
  { href: '/#story-generator', label: 'AI Storyteller' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold font-headline text-lg">Farsh Bazaar</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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
        
        <div className="flex flex-1 items-center justify-end space-x-2">
            <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="#">Premium Access</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full p-6">
                    <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                        <Logo />
                        <span className="font-bold font-headline text-lg">Farsh Bazaar</span>
                    </Link>
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-lg transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                        ))}
                    </nav>
                    <Button className="mt-auto bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                        <Link href="#">Premium Access</Link>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
        </div>

      </div>
    </header>
  );
}

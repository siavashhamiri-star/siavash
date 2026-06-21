
'use client';
import Link from 'next/link';
import { Logo } from './logo';
import { Smartphone, Heart, ExternalLink, HeartPulse, MapPin, Phone, Globe, BookOpen, Trophy, Mail, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LANGUAGES } from '@/lib/types';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary/30 border-t border-primary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold font-headline text-2xl tracking-tight text-primary">Farsh Bazaar</span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Afarinesh Ecosystem</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-sm text-justify">
              این پلتفرم، اولین ستون از اکوسیستم <span className="font-bold text-primary">«FB New Meta»</span> و <span className="font-bold text-primary">«شهر مجازی توانا»</span> است. 
              میراثی برآمده از عشق و همت عالی، تقدیم به نام بزرگ <span className="font-bold">حاج حسین علیمیری</span>.
            </p>
            <div className="space-y-3 bg-white/50 p-6 rounded-2xl border border-primary/5 backdrop-blur-sm shadow-sm">
                <div className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>بازار تهران، خیابان خیام شمالی، پلاک ۴۸</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-primary">
                    <Phone className="w-4 h-4" />
                    <span dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                    <Mail className="w-4 h-4 text-primary" />
                    <span dir="ltr">info@fbnewmeta.com</span>
                </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-lg flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              دسترسی ۱۳ زبانه (Global)
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-muted-foreground">
              {LANGUAGES.map((lang) => (
                <span key={lang.code} className="flex items-center gap-1">
                  {lang.flag} {lang.label}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-primary/5">
                <a 
                  href="https://openmind-nexuse-dbbbbb.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-rose-600 font-bold hover:underline flex items-center gap-2 text-sm"
                >
                  <HeartPulse className="w-4 h-4" />
                  OpenMind Nexus (AI احساسی) <ExternalLink className="w-3 h-3" />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-lg">دسترسی سریع</h4>
            <ul className="grid grid-cols-1 gap-2 text-sm font-medium">
              <li><Link href="/magazine" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><BookOpen className="w-4 h-4" /> مجله و وبلاگ تخصصی</Link></li>
              <li><Link href="/legends" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><Trophy className="w-4 h-4" /> مشاهیر و مصاحبه‌ها</Link></li>
              <li><Link href="/appraisal" className="text-muted-foreground hover:text-primary transition-colors">کارشناسی و ارزیابی آنلاین</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">درباره ما و میراث علیمیری</Link></li>
              <li><Link href="/manifesto" className="text-muted-foreground hover:text-primary transition-colors">کتاب آفرینش (Manifesto)</Link></li>
              <li><Link href="/ecosystem" className="text-muted-foreground hover:text-primary transition-colors">اکوسیستم شهر توانا</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Farsh Bazaar | Part of Afarinesh Hub.
            </p>
            <div className="flex items-center gap-4 mt-2">
                <p className="text-[10px] text-muted-foreground flex items-center gap-2">
                    <Smartphone className="w-3 h-3" /> Built with Willpower on Redmi Note 8 <Heart className="w-2 h-2 fill-primary text-primary" />
                </p>
                <div className="w-px h-3 bg-muted-foreground/30" />
                <p className="text-[10px] text-primary font-black flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> CERTIFIED MASTER BUILD 2025
                </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-[10px] font-black text-primary/40 uppercase tracking-widest">
            <span>Tavana City</span>
            <span>New Metaverse</span>
            <span>Haj Hossein Alimiri Legacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

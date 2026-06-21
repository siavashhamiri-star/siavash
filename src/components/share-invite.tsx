
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LANGUAGES, Language } from '@/lib/types';
import { INVITATION_MESSAGES } from '@/lib/invitation-templates';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Share2, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function ShareInvite({ referralCode }: { referralCode: string }) {
  const [lang, setLang] = useState<Language>('fa');
  const [copied, setCopy] = useState(false);

  const message = `${INVITATION_MESSAGES[lang]} ${referralCode}\nhttps://farshbazaar.com/signup?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    setCopy(true);
    toast({ title: "کپی شد!", description: "دعوت‌نامه هوشمند در حافظه ذخیره شد." });
    setTimeout(() => setCopy(false), 2000);
  };

  const shareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'دعوت به فرش بازار',
        text: message,
        url: `https://farshbazaar.com/signup?ref=${referralCode}`,
      }).catch(console.error);
    } else {
        copyToClipboard();
    }
  };

  return (
    <div className="space-y-4 p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-primary">زبان دعوت‌نامه:</p>
        <Select onValueChange={(v) => setLang(v as Language)} defaultValue="fa">
          <SelectTrigger className="w-[140px] h-8 rounded-full bg-white">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {LANGUAGES.map((l) => (
              <SelectItem key={l.code} value={l.code}>
                {l.flag} {l.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="bg-white p-4 rounded-2xl text-xs text-muted-foreground leading-relaxed italic border border-primary/5 min-h-[80px]">
        "{message.substring(0, 120)}..."
      </div>

      <div className="flex gap-2">
        <Button onClick={copyToClipboard} variant="outline" className="flex-1 rounded-full h-10">
          {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
          کپی متن
        </Button>
        <Button onClick={shareLink} className="flex-1 rounded-full h-10 shadow-lg">
          <Share2 className="w-4 h-4 mr-2" />
          ارسال مستقیم
        </Button>
      </div>
    </div>
  );
}

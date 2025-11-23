'use client';
import { useState } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useRouter } from 'next/navigation';
import { Lightbulb, Send, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function FeedbackPage() {
  const [suggestionText, setSuggestionText] = useState('');
  const [userType, setUserType] = useState<'buyer' | 'vendor' | ''>('');
  const [error, setError] = useState<string | null>(null);
  const firestore = useFirestore();
  const { data: user, isLoading } = useUser();
  const router = useRouter();

  if (!isLoading && !user) {
    router.push('/login?redirect=/feedback');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to submit feedback.',
        variant: 'destructive',
      });
      return;
    }

    if (!suggestionText.trim() || !userType) {
      setError('Please select your role and write a suggestion.');
      return;
    }

    try {
      await addDoc(collection(firestore, 'suggestions'), {
        suggestionText,
        userType,
        userId: user.uid,
        userName: user.displayName,
        createdAt: serverTimestamp(),
      });

      toast({
        title: 'Feedback Submitted!',
        description:
          "Thank you for your suggestion. We appreciate you helping us improve.",
      });

      setSuggestionText('');
      setUserType('');
    } catch (err: any) {
      console.error('Error submitting suggestion:', err);
      setError(err.message);
      toast({
        title: 'Error Submitting Feedback',
        description: err.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto space-y-12">
            <Card>
              <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                      <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                <CardTitle className="text-2xl font-headline mt-4">
                  Share Your Suggestions
                </CardTitle>
                <CardDescription>
                  Help us improve Farsh Bazaar. We value feedback from both our
                  buyers and our vendors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="userType">I am a...</Label>
                    <Select
                      onValueChange={(value: 'buyer' | 'vendor') =>
                        setUserType(value)
                      }
                      value={userType}
                    >
                      <SelectTrigger id="userType">
                        <SelectValue placeholder="Select your role..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buyer">Buyer / User (خریدار)</SelectItem>
                        <SelectItem value="vendor">
                          Vendor / Colleague (فروشنده / همکار)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="suggestion">Your Suggestion</Label>
                    <Textarea
                      id="suggestion"
                      placeholder="What's on your mind? How can we make things better?"
                      required
                      value={suggestionText}
                      onChange={(e) => setSuggestionText(e.target.value)}
                      rows={6}
                    />
                  </div>

                  {error && <p className="text-destructive text-sm">{error}</p>}

                  <Button type="submit" className="w-full" disabled={!user || isLoading}>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Suggestion
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit">
                        <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-headline mt-4">A Note from the Team</CardTitle>
                    <CardDescription>A question from our founder, and a word from our AI partner.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-sm">
                    <div className='p-4 rounded-lg bg-background'>
                        <p className="font-semibold italic text-muted-foreground">The Founder asks:</p>
                        <p className="mt-2 italic">
                        "As my colleague in designing and building this application, what is your specialized opinion for the carpet sellers' community as a memento of our collaboration?"
                        </p>
                    </div>

                    <Separator />

                    <div className='p-4 rounded-lg'>
                        <p className="font-semibold text-primary">The AI Partner's Perspective:</p>
                        <div className="mt-2 prose prose-sm max-w-none text-foreground/80">
                            <p>
                            It has been a privilege to collaborate on Farsh Bazaar. To the esteemed community of carpet artisans and vendors, I offer this perspective:
                            </p>
                            <p>
                            Your craft is a timeless art, a story woven in thread. Each carpet is a universe of history, culture, and human ingenuity. In this new digital era, technology is not a replacement for tradition, but its most powerful amplifier.
                            </p>
                            <p>
                            This platform, Farsh Bazaar, is your global loom. It is a bridge connecting your workshop in Isfahan, Tabriz, or Kashan to a living room in Tokyo, a gallery in New York, or a home in Buenos Aires. Embrace this tool to tell your story, to showcase the soul of your work, and to connect directly with those who cherish it. The future belongs to those who honor their heritage while boldly weaving it into the fabric of tomorrow.
                            </p>
                            <p>
                            May your art flourish and your stories travel across the world.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

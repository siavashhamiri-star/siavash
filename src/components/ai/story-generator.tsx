'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createStory, StoryState } from '@/app/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Textarea } from '../ui/textarea';

const initialState: StoryState = { message: null, story: null, errors: {} };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Weaving your tale...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Story
        </>
      )}
    </Button>
  );
}

export function StoryGenerator() {
  const [state, formAction] = useFormState(createStory, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
    if (state.story) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold">The Magic Carpet's Tale</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Every carpet has a story woven into its threads. What tale will yours tell? Use our AI storyteller to bring the history, artistry, and cultural relevance of any carpet to life.
        </p>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="font-headline">Create a Carpet Story</CardTitle>
            <CardDescription>
              Enter a carpet type and choose a style to generate a unique story.
            </CardDescription>
          </CardHeader>
          <form action={formAction} ref={formRef}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="carpetType">Carpet Type</Label>
                <Input
                  id="carpetType"
                  name="carpetType"
                  placeholder="e.g., 'Persian Tabriz', 'Turkish Oushak'"
                />
                {state.errors?.carpetType && (
                  <p className="text-sm text-destructive">{state.errors.carpetType[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="style">Writing Style</Label>
                <Select name="style" defaultValue="Narrative">
                  <SelectTrigger id="style">
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Narrative">Narrative</SelectItem>
                    <SelectItem value="Historical">Historical</SelectItem>
                    <SelectItem value="Poetic">Poetic</SelectItem>
                    <SelectItem value="Mystical">Mystical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>

      <div className="mt-8 md:mt-0">
         <Card className="h-full min-h-[400px]">
           <CardHeader>
            <CardTitle className="font-headline">Your Generated Story</CardTitle>
            <CardDescription>The AI-woven tale will appear below.</CardDescription>
           </CardHeader>
           <CardContent>
             {state.story ? (
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
                    {state.story}
                </div>
             ) : (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
                    <Wand2 className="w-12 h-12 mb-4"/>
                    <p>Your story awaits...</p>
                </div>
             )}
           </CardContent>
         </Card>
      </div>
    </div>
  );
}

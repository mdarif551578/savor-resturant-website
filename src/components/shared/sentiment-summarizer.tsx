
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { summarizeSentiment } from "@/ai/flows/sentiment-summarizer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";

const formSchema = z.object({
  reviews: z.string().min(50, "Please enter at least 50 characters of review text."),
});

export function SentimentSummarizer() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reviews: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSummary(null);

    try {
      const result = await summarizeSentiment({ reviews: values.reviews });
      setSummary(result.summary);
    } catch (e) {
      console.error(e);
      setError("An error occurred while generating the summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-2xl border-primary/20 bg-muted/20">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Wand2 className="w-10 h-10 text-primary" />
          <div>
            <CardTitle className="font-headline text-3xl">AI-Powered Sentiment Summary</CardTitle>
            <CardDescription>Paste a few reviews to get a concise summary of customer feedback.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="reviews"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Reviews</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'The food was amazing, but the service was a bit slow...' 'A wonderful ambiance and the best pasta I've ever had!'"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Summarize Sentiment"
              )}
            </Button>
          </form>
        </Form>
        
        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

        {summary && (
          <div className="mt-6">
            <h3 className="font-headline text-xl font-semibold">Summary:</h3>
            <p className="mt-2 p-4 bg-background rounded-md border text-muted-foreground">{summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

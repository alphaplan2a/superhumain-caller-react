import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Work at the speed of thought
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Experience email at superhuman speed. The fastest email experience ever made. Powered by artificial intelligence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button className="group bg-primary hover:bg-primary/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
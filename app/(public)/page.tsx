import { ChevronRight, Loader } from "lucide-react";
import Header from "./_components/Header";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import manga1 from "@/assets/posters/manga/1.jpg";
import manga2 from "@/assets/posters/manga/2.webp";
import manga3 from "@/assets/posters/manga/3.webp";
import manga4 from "@/assets/posters/manga/4.jpg";
import manga5 from "@/assets/posters/manga/5.jpg";
import manga6 from "@/assets/posters/manga/6.jpg";
import manga7 from "@/assets/posters/manga/7.webp";

// anime
import anime1 from "@/assets/posters/anime/1.webp";
import anime2 from "@/assets/posters/anime/2.jpg";
import anime3 from "@/assets/posters/anime/3.jpg";
import anime4 from "@/assets/posters/anime/4.jpg";
import anime5 from "@/assets/posters/anime/5.webp";
import anime6 from "@/assets/posters/anime/6.webp";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimeMarquee } from "@/components/anime-marquee";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div>
        <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
          <div className="relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                Beta Launch
                <Loader className="h-3 w-3 animate-spin text-primary" />
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
              Start tracking your favorite anime & manga
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Explore a vast selection of anime & manga and find your next
              favorite series
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
              <Link
                href="/login"
                className={buttonVariants({ variant: "default" })}
              >
                Start tracking
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Top Recommendation UI */}
          <div className="w-full max-w-7xl relative mt-96 z-10 transition-all">
            {/* Centered poster container */}
            <TooltipProvider>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl">
                <div className="absolute -top-44 z-0 left-0 rotate-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="cursor-pointer transition-transform hover:scale-105">
                        <Image
                          src={manga1}
                          alt="manga poster"
                          width={230}
                          height={330}
                          className="object-cover border-4 border-border rounded-md"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="rotate-4">
                      <p>The Apothecary Diaries</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="absolute -top-60 z-0 left-[12.5rem] -rotate-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="cursor-pointer transition-transform hover:scale-105">
                        <Image
                          src={manga2}
                          alt="manga poster"
                          width={230}
                          height={330}
                          className="object-cover border-4 border-border rounded-md"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="-rotate-4">
                      <p>The Fragrant Flower Blooms with Dignity</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="absolute -top-[208px] z-2 left-1/2 -translate-x-1/2 rotate-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="cursor-pointer transition-transform hover:scale-105">
                        <Image
                          src={manga4}
                          alt="manga poster"
                          width={230}
                          height={330}
                          className="object-cover border-4 border-border rounded-md"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="rotate-2">
                      <p>Wotakoi: Love Is Hard for Otaku</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="absolute -top-[308px] z-0 right-[12.5rem] -rotate-8">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="cursor-pointer transition-transform hover:scale-105">
                        <Image
                          src={manga5}
                          alt="manga poster"
                          width={230}
                          height={330}
                          className="object-cover border-4 border-border rounded-md"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="-rotate-8">
                      <p>The Tunnel to Summer, the Exit of Goodbyes</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="absolute -top-[258px] z-0 right-0 rotate-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="cursor-pointer transition-transform hover:scale-105">
                        <Image
                          src={manga6}
                          alt="manga poster"
                          width={230}
                          height={330}
                          className="object-cover border-4 border-border rounded-md"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="rotate-4">
                      <p>One Piece</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </TooltipProvider>

            <div className="cosmic-glow relative rounded-4xl overflow-hidden border border-border backdrop-blur-sm bg-card z-50">
              <div className="p-6">
                <h1 className="text-4xl font-semibold tracking-tight text-balance">
                  Top 5 Recommended Anime by <br />
                  us to you.
                </h1>
                <p className="text-muted-foreground text-sm">
                  For us, this is one of the best pieces of work we’ve ever
                  watched, and we’re happy to recommend it to you all.
                </p>
              </div>

              <div className="flex">
                <AnimeMarquee />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

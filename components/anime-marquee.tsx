"use client";

import Image, { StaticImageData } from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

// Import anime poster images
import anime1 from "@/assets/posters/anime/1.webp";
import anime2 from "@/assets/posters/anime/2.jpg";
import anime3 from "@/assets/posters/anime/3.jpg";
import anime4 from "@/assets/posters/anime/4.jpg";
import anime5 from "@/assets/posters/anime/5.webp";
import anime6 from "@/assets/posters/anime/6.webp";
import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface AnimePoster {
  src: StaticImageData;
  alt: string;
  title: string;
  primaryGenre: string;
  type: string;
  genres: string[];
}

const animePosters: AnimePoster[] = [
  {
    src: anime1,
    alt: "Frieren: Beyond Journey's End",
    title: "Frieren: Beyond Journey's End",
    primaryGenre: "Fantasy",
    type: "TV Series",
    genres: ["Adventure", "Drama", "+2 Genre"],
  },
  {
    src: anime2,
    alt: "Attack on Titan",
    title: "Attack on Titan",
    primaryGenre: "Action",
    type: "TV Series",
    genres: ["Dark Fantasy", "Military", "+1 Genre"],
  },
  {
    src: anime3,
    alt: "Demon Slayer",
    title: "Demon Slayer",
    primaryGenre: "Action",
    type: "TV Series",
    genres: ["Supernatural", "Historical", "+2 Genre"],
  },
  {
    src: anime4,
    alt: "Jujutsu Kaisen",
    title: "Jujutsu Kaisen",
    primaryGenre: "Action",
    type: "TV Series",
    genres: ["Supernatural", "School", "+1 Genre"],
  },
  {
    src: anime5,
    alt: "Spy x Family",
    title: "Spy x Family",
    primaryGenre: "Comedy",
    type: "TV Series",
    genres: ["Action", "Slice Of Life", "+1 Genre"],
  },
  {
    src: anime6,
    alt: "Chainsaw Man",
    title: "Chainsaw Man",
    primaryGenre: "Action",
    type: "TV Series",
    genres: ["Horror", "Supernatural", "+2 Genre"],
  },
];

interface AnimeCardProps {
  poster: AnimePoster;
}

function AnimeCard({ poster }: AnimeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer flex items-center gap-4"
      initial={{ y: 0 }}
      whileHover={{ y: -124 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.4, ease: "easeOut", type: "spring" }}
    >
      {/* Image Container */}
      <motion.div
        className={cn("relative rounded-xl overflow-hidden shadow-lg")}
        transition={{ duration: 0.4 }}
      >
        <div className="relative w-[200px] h-[300px] md:w-[240px] md:h-[360px]">
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 200px, 240px"
            priority={false}
          />
          {/* Subtle overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-0 left-full ml-6 flex flex-col gap-3 min-w-[250px]"
        >
          {/* Title Link */}
          <Link
            href={`/anime/${poster.alt}`}
            className="px-4 py-2 rounded-full bg-background border border-border hover:bg-accent transition-colors flex items-center gap-2 w-fit"
          >
            <span className="text-sm font-medium whitespace-nowrap">
              {poster.title}
            </span>
            <ArrowRight className="size-4" />
          </Link>

          {/* Details */}
          <div className="flex flex-col gap-2 text-sm">
            {/* Additional Genres */}
            <div className="flex flex-wrap gap-2">
              {poster.genres.map((genre, idx) => (
                <span
                  key={idx}
                  className={cn(
                    "text-xs px-2 py-1 rounded",
                    genre.startsWith("+")
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export function AnimeMarquee() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* First row - scrolling right with extra vertical space */}
      <div>
        <Marquee pauseOnHover className="[--duration:30s] pt-36">
          {animePosters.map((poster, index) => (
            <AnimeCard key={`row1-${index}`} poster={poster} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

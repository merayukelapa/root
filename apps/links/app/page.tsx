import {
  IconFile,
  IconEdit,
  IconDownload,
  IconPolaroid,
  IconContract,
  IconUserCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Announcement } from "@/components/announcement";
import { Footer } from "@/components/footer";
import { MapCard } from "@/components/map";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as m from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const SOCIAL_MEDIA = [
  {
    name: "Tiktok",
    username: "@merayukelapa",
    href: "https://www.tiktok.com/@merayukelapa",
    src: "/icons/tiktok.svg",
  },
  {
    name: "Instagram",
    username: "@merayukelapa",
    href: "https://www.instagram.com/merayukelapa",
    src: "/icons/instagram.svg",
  },
];

const LINKS = [
  {
    icon: IconEdit,
    iconClass: "",
    title: "Open Recruitment",
    description: "Segera bergabung!",
    href: "/",
    cardClass: "bg-white",
  },
  {
    icon: IconContract,
    iconClass: "",
    title: "Surat Kesanggupan Komitmen",
    href: "/",
    cardClass: "bg-white",
  },
  {
    icon: IconUserCheck,
    iconClass: "",
    title: "Surat Izin Orang Tua",
    href: "/",
    cardClass: "bg-white",
  },
  {
    icon: IconFile,
    iconClass: "",
    title: "Guidebook",
    href: "/assets/guidebook.pdf",
  },
  {
    icon: IconPolaroid,
    iconClass: "",
    title: "Poster",
    href: "/assets/poster.png",
    download: true,
  },
];

const IMAGES = [
  "/assets/gallery1.webp",
  "/assets/gallery2.webp",
  "/assets/gallery3.webp",
  "/assets/gallery4.webp",
  "/assets/gallery5.webp",
  "/assets/gallery6.webp",
  "/assets/gallery7.webp",
  "/assets/gallery8.webp",
  "/assets/gallery9.webp",
];

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center brightness-75"
        style={{ backgroundImage: "url('/background.webp')" }}
      />

      <main className="mx-auto flex w-full max-w-md flex-col gap-8 px-6 py-10">
        {/* <Announcement /> */}

        <m.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-serif text-white text-6xl">Merayu Kelapa</h1>

          <div className="relative mx-auto mt-2 size-28">
            <Image
              src="/logo.svg"
              alt="Logo Merayu Kelapa"
              fill
              priority
              className="object-contain"
            />
          </div>

          <p className="mt-2 text-white text-sm text-muted-foreground">
            KKN-PPM UGM PERIODE II 2026 Kep. Seribu Utara, Kepulauan Seribu, DKI
            Jakarta
          </p>
        </m.div>

        <section className="space-y-1">
          <m.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            className="font-medium text-lg text-white text-center"
          >
            Tautan
          </m.h2>

          <div className="flex flex-col gap-4">
            {LINKS.map((link, i) => (
              <m.div
                key={link.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.05 + 0.05 * (i + 1),
                }}
              >
                <Link
                  href={link.href}
                  {...(link.download
                    ? { download: link.download === true ? "" : link.download }
                    : {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                >
                  <Card
                    className={cn(
                      "group py-4 ring-foreground/10 transition-all hover:ring-4 active:scale-95",
                      link.cardClass
                    )}
                  >
                    <CardContent className="flex flex-row items-center gap-2 px-4">
                      <div className="relative flex size-10 shrink-0 items-center justify-center rounded-lg bg-inherit p-1 shadow-sm ring ring-border">
                        <link.icon className={link.iconClass} />
                      </div>

                      <div className="flex flex-col transition-transform group-hover:translate-x-1">
                        <h3 className="font-medium text-sm">{link.title}</h3>
                        {link.description && (
                          <p className="text-muted-foreground text-xs">
                            {link.description}
                          </p>
                        )}
                      </div>

                      {link.download && (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="ml-auto"
                        >
                          <IconDownload />
                          <span className="max-[400px]:hidden">Unduh</span>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </m.div>
            ))}
          </div>
        </section>

        <MapCard />

        <section className="space-y-1">
          <m.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            className="font-medium text-lg text-white text-center"
          >
            Galeri
          </m.h2>

          <m.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            className="relative w-full overflow-visible rounded-2xl shadow-sm ring-1 ring-foreground/10"
          >
            <Carousel className="w-full">
              <CarouselContent>
                {IMAGES.map((src, i) => (
                  <CarouselItem key={i}>
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={src}
                        alt={`Galeri ${i + 1}`}
                        fill
                        sizes="100%"
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </m.div>
        </section>

        <section className="space-y-1">
          <m.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            className="font-medium text-lg text-white text-center"
          >
            Media Sosial
          </m.h2>

          <div className="flex flex-col gap-4">
            {SOCIAL_MEDIA.map((social, i) => (
              <m.div
                key={social.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.05 + 0.05 * (i + 1),
                }}
              >
                <SocialMediaCard {...social} />
              </m.div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function SocialMediaCard(props: {
  name: string;
  username: string;
  src: string;
  href: string;
}) {
  let colorClass = "";

  if (props.name.toLowerCase() === "instagram") {
    colorClass = "bg-[#3f60a7] hover:bg-[#3f60a7]/80";
  }

  if (props.name.toLowerCase() === "tiktok") {
    colorClass = "bg-black hover:bg-black/80";
  }

  return (
    <Link
      href={props.href}
      prefetch={false}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-row gap-2 rounded-2xl bg-white p-4 text-sm shadow-sm ring-1 ring-foreground/10 transition-all hover:ring-4 active:scale-95"
    >
      <div className="relative size-10 overflow-clip rounded-lg shadow-sm ring ring-border">
        <Image
          src={props.src}
          alt={props.name}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>

      <div className="mb-2">
        <h3>{props.name}</h3>
        <p className="text-muted-foreground text-xs">{props.username}</p>
      </div>

      <Button className={`ml-auto ${colorClass}`} size="sm">
        Follow
      </Button>
    </Link>
  );
}

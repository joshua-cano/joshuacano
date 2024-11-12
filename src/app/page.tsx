import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Download, Globe, Mail } from "lucide-react";
import Image from "next/image";
import project from "../../public/project-tracking-screenshot.png";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiPostgresql,
  SiRedux,
  SiSentry,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center space-y-8 pb-16 pt-28">
        <header className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider">
            Based in Texas
          </p>
          <p className="text-5xl font-semibold">Joshua Cano</p>
          <p className="text-lg">8+ years as a Full Stack Developer</p>
        </header>
        <div className="flex gap-3">
          <Button>
            <span>See My Work </span>
            <ChevronRight />
          </Button>
          <Button variant="outline">
            Resume <Download />
          </Button>
        </div>
        <div className="flex gap-5">
          <FaLinkedin size={20} />
          <FaGithub size={20} />
          <Mail size={20} />
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg px-8 py-8">
        <h2 className="text-2xl font-semibold">Technologies I use at work</h2>
        <p className="text-muted-foreground">
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {techWorkData.map((tech, index) => (
            <TechCard key={index} icon={tech.icon} title={tech.title} />
          ))}
        </div>

        <h2 className="mt-8 text-2xl font-semibold">
          Additional technologies I use in my freetime
        </h2>
        <p className="text-muted-foreground">
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {techFunData.map((tech, index) => (
            <TechCard key={index} icon={tech.icon} title={tech.title} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-screen-lg px-8">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <Card className="mt-8">
          <CardHeader>
            <a
              href="https://project-tracking-app-lb3e.vercel.app/"
              target="_blank"
              className="rounded-lg bg-muted/15 p-4"
            >
              <Image src={project} alt="picture" className="w-full" />
            </a>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <CardTitle>TaskFlow: Project Tracking</CardTitle>
            <CardDescription className="text-sm">
              Manage tasks, track progress, and collaborate effectively. Offers
              tools like kanban boards to organize work and prioritize tasks,
              making it ideal for agaile project management.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button asChild>
              <a
                href="https://project-tracking-app-lb3e.vercel.app/"
                target="_blank"
              >
                Website
                <Globe />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/joshua-cano/project-tracking-app"
                target="_blank"
              >
                Source
                <FaGithub />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

const techWorkData = [
  { icon: FaReact, title: "React" },
  { icon: SiTypescript, title: "Typescript" },
  { icon: SiRedux, title: "Redux" },
  { icon: FaSass, title: "Sass/CSS" },
  { icon: FaHtml5, title: "HTML" },
  { icon: TbSql, title: "SQL" },
  { icon: FaGitAlt, title: "Git" },
  { icon: SiSentry, title: "Sentry" },
];

const techFunData = [
  { icon: RiNextjsFill, title: "NextJS" },
  { icon: SiTailwindcss, title: "Tailwind" },
  { icon: FaNode, title: "NodeJS" },
  { icon: SiPostgresql, title: "Postgres" },
];

const TechCard = ({ icon: Icon, title }: { icon: IconType; title: string }) => {
  return (
    <div className="flex flex-1 items-center gap-3 rounded-lg bg-secondary p-3">
      <div className="rounded-md bg-cyan-400/20 p-3">
        <Icon size={30} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

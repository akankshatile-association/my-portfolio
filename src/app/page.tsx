/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRightIcon,
  CodeIcon,
  DownloadIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogPosts, getJSONData } from "@/lib/serverUtils";

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-violet-600" />
          <p className="text-base font-semibold text-slate-900">{eyebrow}</p>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="min-w-0 flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 shadow-[0_0_0_1px_rgba(124,58,237,0.08)]">
        <CodeIcon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xl font-extrabold tracking-tight text-violet-600 xl:text-2xl">
          {value}
        </div>
        <div className="text-xs font-medium text-slate-600 sm:text-sm">
          {label}
        </div>
      </div>
    </div>
  );
}

export default async function Home() {
  const data = await getJSONData();
  const posts = await getBlogPosts();

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Technologies" },
    { value: "5+", label: "Happy Clients" },
  ];

  const socials = [
    { href: data.contactInfo.github, label: "GitHub", icon: GitHubLogoIcon },
    { href: data.contactInfo.twitter, label: "Twitter", icon: TwitterLogoIcon },
    { href: data.contactInfo.linkedin, label: "LinkedIn", icon: LinkedInLogoIcon },
    { href: `mailto:${data.contactInfo.email}`, label: "Email", icon: EnvelopeClosedIcon },
  ];

  const techStack = [
    ...data.skills.frameworks,
    ...data.skills.databases,
    ...data.skills.tools,
  ].slice(0, 8);

  const [firstName, ...restName] = data.personalInfo.name.split(" ");

  return (
    <main className="bg-[linear-gradient(180deg,#050816_0%,#050816_52rem,#f4f6fb_52rem,#f4f6fb_100%)] text-slate-900">
      <section
        id="home"
        className="relative mx-auto max-w-[92rem] overflow-hidden px-4 pb-10 pt-16 text-white sm:px-6 lg:px-8 lg:pt-20"
      >
        <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[#050816] shadow-[0_30px_80px_rgba(5,8,22,0.35)]" />
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_75%_15%,rgba(124,58,237,0.24),transparent_0_24%),radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.18),transparent_0_20%),linear-gradient(180deg,rgba(5,8,22,0.97),rgba(5,8,22,0.92))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="relative px-6 py-8 sm:px-10 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur">
                  <span className="text-lg leading-none">👋</span>
                  <span>Hello, I&apos;m</span>
                </div>

                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  <span className="block">{firstName}</span>
                  <span className="block bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
                    {restName.join(" ")}
                  </span>
                </h1>

                <p className="mt-5 text-xl font-semibold text-slate-100 sm:text-2xl">
                  {data.personalInfo.title}
                </p>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  {data.personalInfo.bio}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {socials.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button
                        asChild
                        key={item.label}
                        variant="outline"
                        size="icon"
                        className="h-11 w-11 rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10"
                      >
                        <Link href={item.href} prefetch={false} aria-label={item.label}>
                          <Icon className="h-4 w-4" />
                        </Link>
                      </Button>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="h-12 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 text-white shadow-[0_18px_40px_rgba(124,58,237,0.32)] hover:from-violet-500 hover:to-fuchsia-400"
                  >
                    <Link href="#projects">
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      View Projects
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-xl border-white/15 bg-transparent px-6 text-white hover:bg-white/5 hover:text-white"
                  >
                    <Link href={`mailto:${data.contactInfo.email}`}>
                      <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                      Let&apos;s Talk
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:justify-end">
                <div className="absolute -right-2 top-8 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(168,85,247,0.9)]" />
                <div className="absolute -left-1 bottom-12 h-4 w-4 rounded-full bg-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.9)]" />
                <div className="absolute inset-y-10 right-0 hidden w-28 bg-[radial-gradient(circle,rgba(124,58,237,0.28)_1px,transparent_1px)] bg-[size:14px_14px] opacity-70 sm:block" />

                <div className="relative flex aspect-square w-full max-w-[360px] items-center justify-center rounded-full border border-violet-500/70 bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.22),transparent_55%),linear-gradient(180deg,rgba(15,22,51,0.95),rgba(5,8,22,0.98))] p-3 shadow-[0_0_0_1px_rgba(124,58,237,0.25),0_0_90px_rgba(124,58,237,0.22)]">
                  <div className="absolute inset-3 rounded-full border border-violet-400/35" />
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.14),transparent_65%)]" />
                  <Image
                    src="/assets/profile.jpg"
                    alt={data.personalInfo.name}
                    width={480}
                    height={480}
                    sizes="(max-width: 1024px) 280px, 360px"
                    priority
                    className="relative z-10 h-full w-full rounded-full object-cover object-center shadow-[0_0_0_8px_rgba(5,8,22,0.95)]"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-20 mt-8">
              <div className="grid grid-cols-4 gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-[0_22px_60px_rgba(15,23,42,0.12)] lg:gap-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 pt-24 sm:px-6 lg:px-8">
        <div id="experience" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Work Experience"
            title="A product-first career path across modern web stacks."
            description="The experience cards mirror the reference with clean white surfaces, crisp borders, and violet accents that keep the page visually anchored."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {data.workExperience.map((exp) => (
            <Card
              key={exp.id}
              className="border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_0_6px_rgba(124,58,237,0.12)]">
                  <CodeIcon className="h-5 w-5" />
                </div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-slate-950 md:text-2xl">
                      {exp.role}
                    </CardTitle>
                    <CardDescription className="mt-2 text-slate-500">
                      {exp.startDate} - {exp.endDate}
                    </CardDescription>
                  </div>
                  <Link
                    href={exp.companyWebsite}
                    className="text-sm font-semibold text-violet-600 hover:text-violet-500"
                    prefetch={false}
                  >
                    {exp.company}
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="grid gap-3 text-sm leading-7 text-slate-600 md:grid-cols-2">
                  {exp.keyResponsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div id="projects" className="scroll-mt-24">
          <SectionHeading
            eyebrow="My Projects"
            title="Selected builds shown as polished product cards."
            description="The cards use the same soft borders and subtle shadows as the reference, with strong image previews and compact action buttons."
            action={
              <Button
                asChild
                variant="outline"
                className="rounded-full border-violet-300 bg-white text-violet-700 hover:bg-violet-50 hover:text-violet-800"
              >
                <Link href="#blogs">
                  View All Projects
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            }
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {data.projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-950">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="border border-slate-200 bg-slate-50 text-slate-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button asChild className="rounded-xl bg-violet-600 text-white hover:bg-violet-500">
                  <Link href={project.live_url} prefetch={false}>
                    <GlobeIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  <Link href={project.code_repo_url} prefetch={false}>
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <Card className="border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-violet-600" />
            <h3 className="text-lg font-semibold text-slate-950">
              Technologies I Work With
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div id="education" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Education"
            title="Formal training paired with continuous self-directed learning."
            description="The education cards keep the same airy white layout, which helps the lighter half of the page feel consistent with the reference."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {data.education.map((ed) => (
            <Card
              key={ed.id}
              className="border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
            >
              <CardHeader>
                <CardTitle className="text-xl text-slate-950">{ed.degree}</CardTitle>
                <CardDescription className="text-violet-600">
                  {ed.institution}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-slate-600">
                  {ed.description}
                </p>
                <p className="text-sm font-medium text-slate-500">
                  {ed.startDate} - {ed.endDate}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div id="testimonials" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Testimonials"
            title="Client feedback presented as polished social proof."
            description="These cards echo the reference layout with roomy spacing, quote styling, and small avatar footers."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {data.testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
            >
              <CardHeader>
                <div className="text-4xl font-bold leading-none text-violet-500">
                  &ldquo;
                </div>
                <CardTitle className="text-lg text-slate-900">
                  {testimonial.feedback}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 ring-2 ring-violet-500/25 ring-offset-2 ring-offset-white">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-violet-500/15 text-violet-700">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-950">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.title} @ {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div id="blogs" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Blogs"
            title="Short notes from the build process."
            description="The blog cards use horizontal layouts and purple accents so the section reads like the reference while still staying data-driven."
            action={
              <Button
                asChild
                variant="outline"
                className="rounded-full border-violet-300 bg-white text-violet-700 hover:bg-violet-50 hover:text-violet-800"
              >
                <Link href="#blogs">
                  View All Blogs
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            }
          />
        </div>

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <Card
              key={post.slug}
              className="overflow-hidden border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="grid gap-0 md:grid-cols-[220px_1fr] md:items-stretch">
                <div
                  className={`relative flex min-h-44 items-center justify-center p-6 text-white ${
                    index % 2 === 0
                      ? "bg-[linear-gradient(135deg,#050816,#7c3aed)]"
                      : "bg-[linear-gradient(135deg,#7c3aed,#c084fc)]"
                  }`}
                >
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-white/75">
                      Blog
                    </p>
                    <p className="mt-3 text-3xl font-semibold">MDX</p>
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="text-2xl text-slate-950">
                    <Link href={`/blogs/${post.slug}`} prefetch={false}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-3 text-slate-600">
                    {post.description}
                  </CardDescription>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">{post.publishDate}</p>
                    <Button
                      asChild
                      variant="ghost"
                      className="rounded-full text-violet-600 hover:bg-violet-50 hover:text-violet-700"
                    >
                      <Link href={`/blogs/${post.slug}`} prefetch={false}>
                        Read More
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

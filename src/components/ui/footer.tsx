import Link from "next/link";
import { getJSONData } from "@/lib/serverUtils";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default async function Footer() {
  const data = await getJSONData();

  const links = [
    { label: "About Me", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Blogs", href: "#blogs" },
  ];

  const socials = [
    { label: "GitHub", href: data.contactInfo.github, icon: GitHubLogoIcon },
    { label: "LinkedIn", href: data.contactInfo.linkedin, icon: LinkedInLogoIcon },
    { label: "Twitter", href: data.contactInfo.twitter, icon: TwitterLogoIcon },
    { label: "Email", href: `mailto:${data.contactInfo.email}`, icon: EnvelopeClosedIcon },
  ];

  return (
    <footer className="mt-20 border-t border-slate-200 bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <div className="mb-5 text-4xl font-semibold tracking-tight text-violet-300">
              AH
            </div>
            <p className="text-sm leading-7 text-slate-300">
              Building modern web applications with a focus on clean interfaces,
              strong product thinking, and purposeful interactions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">
              Quick Links
            </h3>
            <div className="mt-5 grid gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">
              Connect
            </h3>
            <div className="mt-5 grid gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                    prefetch={false}
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">
              Let&apos;s Work Together
            </h3>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              I&apos;m currently available for freelance work and full-time opportunities.
            </p>
            <Link
              href={`mailto:${data.contactInfo.email}`}
              className="mt-5 inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.3)] transition-opacity hover:opacity-90"
            >
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              Say Hello
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Akanksha Tile. All rights reserved.</p>
          <p className="text-slate-500">Designed with care in a clean violet palette.</p>
        </div>
      </div>
    </footer>
  );
}

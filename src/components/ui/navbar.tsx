import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { getJSONData } from "@/lib/serverUtils";
import Image from "next/image";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import ThemeToggler from "@/components/ui/themeToggler";

export default async function Navbar() {
  const data = await getJSONData();
  const links = [
    { label: "Home", path: "#home" },
    ...data.visual.navbar.links,
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div className="border-b border-white/10 bg-[#050816] px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between gap-4">
          <Link href="/" className="flex items-center" prefetch={false}>
            <Image
              src="/assets/logo.png"
              height={52}
              width={52}
              alt={"devfolio logo"}
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className="text-sm font-medium text-white transition-colors hover:text-violet-300 focus:text-violet-300 active:text-violet-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggler />

            <Button
              asChild
              className="hidden rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 text-white shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:from-violet-500 hover:to-fuchsia-400 lg:inline-flex"
            >
              <Link href={`mailto:${data.contactInfo.email}`}>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 lg:hidden"
                >
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-white/10 bg-[#050816] text-white"
              >
                <div className="grid gap-6 p-6 pt-10">
                  <div className="flex items-center justify-between gap-4">
                    <Link href="/" prefetch={false} className="flex items-center">
                      <Image src="/assets/logo.png" height={56} width={56} alt={"devfolio logo"} />
                    </Link>
                    <ThemeToggler />
                  </div>

                  <div className="grid gap-4">
                    {links.map((item) => (
                      <Link
                        href={item.path}
                        key={item.path}
                        className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="grid gap-3 border-t border-white/10 pt-6">
                    <Link
                      href={data.contactInfo.github}
                      className="flex items-center gap-3 text-sm text-slate-300"
                      prefetch={false}
                    >
                      <GitHubLogoIcon className="h-4 w-4" />
                      GitHub
                    </Link>
                    <Link
                      href={data.contactInfo.linkedin}
                      className="flex items-center gap-3 text-sm text-slate-300"
                      prefetch={false}
                    >
                      <LinkedInLogoIcon className="h-4 w-4" />
                      LinkedIn
                    </Link>
                    <Link
                      href={data.contactInfo.twitter}
                      className="flex items-center gap-3 text-sm text-slate-300"
                      prefetch={false}
                    >
                      <TwitterLogoIcon className="h-4 w-4" />
                      Twitter
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-5 mx-auto flex max-w-fit items-center justify-center gap-4 rounded-full border bg-primary-foreground px-6 text-sm shadow-sm sm:gap-6 sm:text-base">
      <Link className="py-3" href="/">
        Home
      </Link>
      <Link className="py-3" href="/">
        Projects
      </Link>
      <Link className="py-3" href="/">
        Resume
      </Link>
      <Link className="py-3" href="/">
        Contact
      </Link>
    </header>
  );
};

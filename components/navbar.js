import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const navigation = [
    { name: <HomeIcon className="w-6" />, path: "/" },
    { name: "Expertise", path: "/expertise" },
    { name: "Project", path: "/project" },
    { name: "Journey", path: "/journey" },
    // { name: "Notes", path: "/notes" },
  ];
  const router = useRouter();
  const pathNav = router.pathname;

  return (
    <nav className="border-b fixed top-0 w-full z-10 bg-white text-sm">
      <div className="container px-2 mx-auto flex justify-between py-5">
        <ul className="flex items-center gap-3">
          {navigation.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className={`font-semibold ${
                  pathNav === path
                    ? "text-black"
                    : "text-black/50 hover:text-black duration-200"
                }`}
              >
                {name}{" "}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:kamil120201@gmail.com"
          className="font-light italic hidden md:flex gap-1 text-black/50 hover:text-black/70"
        >
          kamil120201@gmail.com
          <EnvelopeIcon className="w-5 -mt-1" />
        </a>
        <a
          href="mailto:kamil120201@gmail.com"
          className="text-black/50 md:hidden "
        >
          <EnvelopeIcon className="w-7 mt-1" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

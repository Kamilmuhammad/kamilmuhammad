import Image from "next/image";

function Footer() {
  const socmed = [
    { src: "/telegram.png", href: "https://t.me/Kamilmuhammad12" },
    { src: "/github.png", href: "https://github.com/Kamilmuhammad" },
    {
      src: "/instagram.png",
      href: "https://www.instagram.com/kamilmuhammad12/",
    },
    { src: "/linkedin.png", href: "www.linkedin.com/in/kamilmuhammad12" },
  ];
  return (
    <footer className="md:grid md:grid-cols-2 justify-between items-center py-10 border-t border-black/10 relative mt-6 space-y-2 ">
      <div className="flex items-center gap-3 mb-2 justify-center md:justify-end md:order-2">
        {socmed.map((item) => (
          <a
            key={item.src}
            href={item.href}
            target="_blank"
            className="hover:animate-spin"
          >
            <Image src={item.src} alt={item.src} width={20} height={20} />
          </a>
        ))}
      </div>
      <p className="text-sm text-black/60 md:order-1 md:text-left text-center">
        Kamil Muhammad &#169; 2023
      </p>
    </footer>
  );
}

export default Footer;

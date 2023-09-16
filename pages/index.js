import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout";

export default function Home() {
  function downloadPDF() {
    var pdfURL = 'https://drive.google.com/file/d/10aGis59xGe3Ba1NjJu3Wai74wFlkloyp/view?usp=drive_link';
    var a = document.createElement('a');
    a.href = pdfURL;
    a.download = 'nama_file.pdf';
    a.click();
  }

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
    <>
      <Layout>
        <section>
          <header className="lg:grid-cols-3 lg:grid text-zinc-600 gap-5 ">
            <div className="lg:order-1">
              <Image
                src={"/fotokamil.jpeg"}
                width={200}
                height={200}
                alt={"header Img"}
                className="rounded-xl lg:rounded-3xl mx-auto lg:mb-0 mb-10 aspect-[3/4] object-cover w-10/12 md:w-full"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-around lg:gap-0 gap-5 text-center lg:text-left">
              <h1 className="text-4xl lg:text-7xl font-extrabold">
                Kamil <br className="hidden lg:block" /> Muhammad
              </h1>
              <h2 className="robot text-2xl  font-extrabold italic">
                Junior Frontend Developer
              </h2>
              <p>
                I am a front-end developer dedicated to creating engaging and interactive user experiences through creative and functional web design.
              </p>
              <div className="flex items-center gap-3 mb-2 justify-center lg:justify-start">
                {socmed.map((item) => (
                  <a
                    key={item.src}
                    href={item.href}
                    target="_blank"
                    className="hover:animate-spin"
                  >
                    <Image
                      src={item.src}
                      alt={item.src}
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
              <div className="flex gap-10 justify-center md:justify-start flex-col md:flex-row">
                <a
                  href="mailto:kamil120201@gmail.com"
                  className="bg-gradient-to-l from-slate-600 to-slate-900 text-white py-3 px-2 rounded-lg shadow-2xl shadow-slate-800/70 hover:from-slate-900 hover:to-slate-800 "
                >
                  Connect with me
                </a>
                <button
                  onClick={() => downloadPDF()}
                  className="underline underline-offset-4 text-zinc-600 hover:text-red-800 duration-700 hover:blur-[0.5px]"
                >
                  See My Resume
                </button>
              </div>
            </div>
          </header>
        </section>
      </Layout>
    </>
  );
}

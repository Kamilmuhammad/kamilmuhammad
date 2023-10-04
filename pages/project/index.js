import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

function Project() {
  const projects = [
    {
      logo: "/bahagiaDay.jpg",
      name: "Bahagia.day",
      link: "bahagia.day.com",
      href: "https://bahagia.day",
      bg: "bg-amber-100",
      image: "/project/bahagiaDay.jpg",
    },
    {
      logo: "/hobiholidays.png",
      name: "Hobi Holidays",
      link: "hobiholidays.com",
      href: "https://api.hobiholidays.com",
      bg: "bg-red-100",
      image: "/project/hobiholidays.png",
    },
    {
      logo: "/epictetus.png",
      name: "epictetus",
      link: "epictetusblog.vercel.app",
      href: "https://epictetusblog.vercel.app",
      bg: "bg-purple-100",
      image: "/project/epictetus.png",
    },
    {
      logo: "/a+design.png",
      name: "a+ Design",
      link: "a-design.vercel.app",
      href: "https://a-design.vercel.app",
      bg: "bg-green-500/20",
      image: "/project/a+design.png",
    },
  ];
  return (
    <>
      <Head>
        <title>Kamil Muhammad | Project</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <section className="text-zinc-600 min-h-[50vh] bg-">
          <h1 className="text-2xl mb-10">
            <span className="font-bold">My Personal</span> project.
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`flex ${project.bg} p-4 rounded-2xl w-full flex-col gap-2`}

              >
                <a
                  target="_blank"
                  href={project.href}
                  className="underline-offset-2 underline decoration-1 font-light text-md"
                >
                  <Image
                    width={600}
                    height={600}
                    alt={project.name}
                    src={project.image}
                    className="rounded-md w-full aspect-video object-cover"
                  />
                </a>
                <div className="flex">

                  {/* <Image
                    className="rounded-md"
                    src={project.logo}
                    alt={project.name}
                    width={60}
                    height={80}
                  /> */}
                  <div className="pl-4 flex flex-col justify-around">
                    <p className="font-semibold text-xl capitalize">
                      {project.name}
                    </p>
                    <a
                      target="_blank"
                      href={project.href}
                      className="underline-offset-2 underline decoration-1 font-light text-md"
                    >
                      {project.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Project;

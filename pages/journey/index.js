import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";

function Journey() {
  const journey = [
    {
      date: "Jan 2023 - Apr 2023",
      company: "Intership",
      roles: ["Junior Front End Developer"],
      description:
        "This is my first time joining a technology company called Syabani Labs, We're a Digital Intuitive Laboratory that can help you with our Nature Driven Development. And here I join as a Junior FrontEnd Developer.",
    },
  ];
  return (
    <>
      <Head>
        <title>Kamil Muhammad | Journey</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <section className="text-zinc-500">
          <h1 className="text-2xl mb-20">
            <span className="font-bold">Precious</span> Journey
          </h1>
          {journey.map(({ date, company, roles, description }, index) => (
            <div
              key={index}
              className="bg-zinc-100 p-5 rounded-2xl mb-10 space-y-4"
            >
              <p className="font-medium">{date}</p>
              <h1 className="text-2xl font-bold">{company}</h1>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-semibold">Role</h1>
                {roles.map((role, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 p-2 border border-gray-300 rounded-2xl text-black/70 font-medium"
                  >
                    <h1>{role}</h1>
                  </div>
                ))}
              </div>
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </section>
      </Layout>
    </>
  );
}

export default Journey;

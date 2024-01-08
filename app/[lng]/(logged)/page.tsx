import { Button } from "@shadcn/button";

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Admin
            </h1>
            <Button className="mr-3" variant="default">
              <a href="https://github.com/Blazity/next-enterprise">Get started</a>
            </Button>
            <Button variant="secondary">
              <a href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise">
                Deploy Now
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3"></div>
        </div>
      </section>
    </>
  );
}

// pages/index.js
export default function Home({ formattedDate }) {
  const test = process.env.NEXT_PUBLIC_TEST
  return (
    <>
      <h1>Static page</h1>
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
        <a href="/ssr">View a server-side rendered page.</a>
      </p>
      <p>
        {test}
      </p>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}
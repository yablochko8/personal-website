import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "lui's homepage" },
    { name: "description", content: "Welcome to my homepage!" },
  ];
};

function Header() {
  return(
    <>
    <h1 className="text-3xl font-bold underline">
    lui's website
  </h1>

  <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <ul>
      <li>
        <a
          href="/about"
          rel="noreferrer"
        >
          about me
        </a>
      </li>
      <li>
        <a
          href="/projects"
          rel="noreferrer"
        >
          projects
        </a>
      </li>
      <li>
        <a
          href="/games"
          rel="noreferrer"
        >
          games
        </a>
      </li>

      <li>
        <a
          href="/words"
          rel="noreferrer"
        >
          words
        </a>
      </li>

    </ul>
  </div>
  </>
  )
  
}

export default function Index() {
  return (
    <>
    <Header />
    </>
  );
}

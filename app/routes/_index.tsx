import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "lui's homepage" },
    { name: "description", content: "Welcome to my homepage!" },
  ];
};

function HeaderButton(props){
  return(
    <a href={"/" + props.target}>
      <button className="bg-blue-300 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
        {props.title}
      </button>
    </a>
  )
}

export function Header() {
  return(
    <>
    <h1 className="text-3xl font-bold underline">
    lui's website
  </h1>
  <HeaderButton target="about" title="about" />
  <HeaderButton target="projects" title="projects" />
  <HeaderButton target="games" title="games" />
  <HeaderButton target="words" title="words" />


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

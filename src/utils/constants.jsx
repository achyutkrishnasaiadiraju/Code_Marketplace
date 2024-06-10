import { FaRegIdCard } from "react-icons/fa";
import { MdPeopleAlt, MdOutlinePeopleAlt } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";

export const navbarMenus = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/topics",
    label: "Topics",
  },
  {
    href: "/discussions",
    label: "Discussions",
  },
];

export const profileMenus = [
  {
    href: "",
    label: "Profile",
    tag: "profile",
    icon: <FaRegIdCard />,
  },
  {
    href: "followers",
    label: "Followers",
    tag: "followers",
    icon: <MdPeopleAlt />,
  },
  {
    href: "following",
    label: "Following",
    tag: "following",
    icon: <MdOutlinePeopleAlt />,
  },
  {
    href: "following-topic",
    label: "Following Topic",
    tag: "following-topic",
    icon: <GrArticle />,
  },
  {
    href: "subscribed-code",
    label: "Subscribed Code",
    tag: "subscribed-code",
    icon: <FaCode />,
  },
];

// constants.jsx
export const codingLanguages = {
  bash: "Bash",
  c: "C",
  clojure: "Clojure",
  cpp: "C++",
  csharp: "C#",
  dart: "Dart",
  elixir: "Elixir",
  elm: "Elm",
  erlang: "Erlang",
  fsharp: "F#",
  graphql: "GraphQL",
  go: "Go",
  groovy: "Groovy",
  haskell: "Haskell",
  html: "HTML",
  java: "Java",
  javascript: "JavaScript",
  jsx: "JSX",
  julia: "Julia",
  kotlin: "Kotlin",
  lisp: "Lisp",
  makefile: "Makefile",
  matlab: "MATLAB",
  objectivec: "Objective-C",
  ocaml: "OCaml",
  php: "PHP",
  python: "Python",
  r: "R",
  ruby: "Ruby",
  rust: "Rust",
  scala: "Scala",
  sql: "SQL",
  swift: "Swift",
  tsx: "TSX",
  typescript: "TypeScript",
};

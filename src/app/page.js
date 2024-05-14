import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  const routerArr = [
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about" },
    { path: "/about1" },
    { path: "/about1" },
    { path: "/about1" },
    { path: "/about" },
  ];
  return (
    <>
      <div>
        {routerArr.map((item, index) => (
          <div>
            <Link href={item.path} key={item.path}>
              {item.path}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

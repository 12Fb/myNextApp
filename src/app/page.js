import styles from "./page.module.css";
import homeCss from "./home.css";
import Link from "next/link";
export default function Home() {
  const routerArr = [{ path: "/about" }];
  return (
    <>
      <div className="Container">
        {routerArr.map((item) => (
          <div className="linkContainer">
            <Link href={item.path} key={item.path}>
              {item.path}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

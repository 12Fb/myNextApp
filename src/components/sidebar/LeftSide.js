import routerArr from "./routeData";
import leftSideCss from "./leftSide.module.css";
import Link from "next/link";
function LeftSide() {
  return (
    <>
      <div className={leftSideCss.leftSide}>
        {routerArr.map((item) => (
          <div className={leftSideCss.item}>
            <Link className={leftSideCss.link} key={item.path} href={item.path}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default LeftSide;

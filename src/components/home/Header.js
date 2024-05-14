import Image from "next/image";
import headerCss from "./header.module.css";
import logoImg from "@/assets/bigHead.jpg";
function BaseHeader() {
  return (
    <>
      <div className={headerCss.baseHeader}>
        <Image
          priority
          className={headerCss.logoImg}
          width={50}
          height={50}
          src={logoImg}
          alt="none"
        />
        <span>111</span>
        <span>222</span>
      </div>
    </>
  );
}
export default BaseHeader;

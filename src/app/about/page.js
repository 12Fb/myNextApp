import { delay } from "@/Common/utils";
import { Suspense } from "react";

function Loading() {
  return <strong>Loading...</strong>;
}
async function Temp() {
  await delay(1000);
  return <h1>{new Date().toLocaleDateString()}</h1>;
}
function sendReq() {
  fetch("http://localhost:3000/api/about").then((res) => {
    console.log(res);
  });
}
export default function Home() {
  return (
    <>
      <Suspense fallback={Loading()}>
        <Temp />
      </Suspense>
      <main>About</main>
    </>
  );
}

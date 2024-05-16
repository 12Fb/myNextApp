import { delay } from "@/Common/utils";
import { Suspense } from "react";
function Loading() {
  return <strong>Loading...</strong>;
}
async function Temp() {
  console.pathLog("ddddddddd");
  await delay(2000);
  return <h1>{new Date().toLocaleDateString()}</h1>;
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

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <header>
        <Link href="/">홈</Link>
        &nbsp;
        <Link href="/search?keyword=멍머이">검색</Link>
        &nbsp;
        <Link href="/good/1">제품1</Link>
        &nbsp;
        <Link href="/good/2">제품2</Link>
        &nbsp;
        <Link href="/good/3">제품3</Link>
        &nbsp;
        <button onClick={handleClick}>홈으로</button>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}

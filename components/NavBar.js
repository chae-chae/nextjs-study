import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link
        style={{ color: router.pathname === "/" ? "blue" : "tomato" }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/about" ? "blue" : "tomato" }}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}

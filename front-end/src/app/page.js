import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home page</h1>
      <Link href="../signup">
        <p className="font-semibold text-sm text-sky-800">Sign up</p>
      </Link>
      <Link href="../login">
        <p className="font-semibold text-sm text-sky-800">Log in</p>
      </Link>
    </main>
  );
}

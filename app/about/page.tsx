import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>About Page (App Router)</h1>
      <Link href="/">
        <button style={{ marginTop: "1rem" }}>Go Back Home</button>
      </Link>
    </div>
  );
}

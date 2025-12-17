import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ marginLeft: "80%" }}>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

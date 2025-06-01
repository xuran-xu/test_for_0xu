import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block">
      <Image src="/images/logo0xu.jpg" alt="0xU Logo" width={32} height={32} />
    </Link>
  );
}

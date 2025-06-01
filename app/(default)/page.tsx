import type { Metadata } from "next";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import OrganizationStructure from "@/components/organization-structure";
import KeyMembers from "@/components/key-members";

export const metadata: Metadata = {
  title: "Home - 0xU Hong Kong Blockchain Club",
  description: "Initiated by university students in Hong Kong, committed to cross-school cooperation and integration into the Web3 industry.",
};

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <OrganizationStructure />
      <KeyMembers />
    </>
  );
}

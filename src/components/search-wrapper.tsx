import { useUser } from "@clerk/nextjs";
import { useConfig } from "nextra-theme-docs";
export default function SearchWrapper() {
  const { user } = useUser();
  if (
    user?.publicMetadata.role !== "admin" &&
    user?.publicMetadata.role !== "premium"
  ) {
    return (
      <style jsx>{`
        .nextra-search {
          display: none !important;
        }
      `}</style>
    );
  }
  return <></>;
}

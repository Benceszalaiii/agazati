"use client";
import { useUser } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function Access() {
  const { user } = useUser();
  let furtherMessage = "";
  if (!user) {
    return <></>;
  }
  if (
    user.publicMetadata.role !== "admin" &&
    user.publicMetadata.role !== "premium"
  ) {
    furtherMessage = "For further access, contact the developer of the page";
  } else {
    furtherMessage = "You have full access to the site";
  }
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        {" "}
        Hello{" "}
        <span className="bg-gradient-to-tr text-4xl from-[#83c9bb] to-[#5952e7] font-bold bg-clip-text text-transparent">
          {user.firstName}
        </span>
        !
      </h1>
      <p>
        Your current access level is{" "}
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-tr from-[#3494E6] to-[#EC6EAD]">
          {
            (user.publicMetadata.role
              ? user.publicMetadata.role
              : "standard") as ReactNode
          }
        </span>
      </p>
      <p className="text-sm mt-4">{furtherMessage}</p>
    </>
  );
}

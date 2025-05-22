import { useUser } from "@clerk/nextjs";

export default function GreetUser({
  message,
  separator,
  fullClass,
  nameClass,
}: {
  message: string;
  separator: string | null;
  fullClass: string | null;
  nameClass: string | null;
}) {
  const { user } = useUser();
  const welcomeMessage =
    (message ? message : "Hello") + (separator ? separator : ",");
  if (!user?.id) {
    return (
      <>
        <p className={fullClass ? fullClass : "md:mt-10 mt-32 text-3xl"}>
          Welcome!
        </p>
      </>
    );
  }
  return (
    <>
      <p className={fullClass ? fullClass : "md:mt-10 mt-32 text-3xl"}>
        {welcomeMessage}{" "}
        <span
          className={
            nameClass
              ? nameClass
              : "bg-clip-text text-transparent bg-gradient-to-r from-[#834d9b] to-[#1fddff] font-bold text-4xl"
          }
        >
          {user.firstName}
        </span>
        !
      </p>
    </>
  );
}

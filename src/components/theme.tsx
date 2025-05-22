import { useUser } from "@clerk/nextjs";

export default function InjectTheme() {
  const { user } = useUser();
  if (user) {
    if (user?.unsafeMetadata.hue) {
      document.documentElement.style.setProperty(
        "--nextra-primary-hue",
        `${user.unsafeMetadata.hue}deg`
      );
    }
    if (user?.unsafeMetadata.saturation) {
      document.documentElement.style.setProperty(
        "--nextra-primary-saturation",
        `${user.unsafeMetadata.saturation}%`
      );
    }
  }
  return <></>;
}

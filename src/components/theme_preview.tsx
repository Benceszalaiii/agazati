import { useUser } from "@clerk/nextjs";
import { Toaster, toast } from "sonner";

export default function ThemePreview({ name, hueValue, saturationValue }) {
  const primaryHue = "hsl(" + hueValue + "," + saturationValue + "%,50%)";
  const secondaryHue = "hsl(" + hueValue + "," + saturationValue + "%,15%)";
  const { user } = useUser();
  const handleClick = () =>
    new Promise((resolve, reject) => {
      document.documentElement.style.setProperty(
        "--nextra-primary-hue",
        `${hueValue}deg`
      );
      document.documentElement.style.setProperty(
        "--nextra-primary-saturation",
        `${saturationValue}%`
      );
      resolve({ success: true });
      if (!user) {
        reject({ error: "No user" });
        return;
      }
      console.log("Updating theme...");
      try {
        user.update({
          unsafeMetadata: {
            hue: hueValue,
            saturation: saturationValue,
          },
        });
        resolve({ success: true });
      } catch (e) {
        reject({ error: e });
      }
    });
  return (
    <>
      <button
        onClick={() => {
          toast.promise(handleClick, {
            loading: "Updating theme...",
            success: `Theme updated to ${name}.`,
            error: (data) => {
              return `Error: ${data.error}`;
            },
          });
        }}
      >
        <h1
          className="p-3 px-5 rounded-lg border-[1.5px] hover:opacity-100 opacity-80"
          style={{
            color: primaryHue,
            backgroundColor: secondaryHue,
            borderColor: primaryHue,
          }}
        >
          {name}
        </h1>
      </button>
    </>
  );
}

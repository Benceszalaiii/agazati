import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
const slider_class =
  "w-fit bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:-mt-0.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)45%/var(--tw-text-opacity))] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:dark:bg-neutral-700 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-[nextrahue] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-neutral-100 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:dark:bg-neutral-700 [&::-moz-range-track]:w-full [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-gray-100 [&::-moz-range-track]:rounded-full";

export default function Changer() {
  const { user } = useUser();
  if (!user) {
    return <></>;
  }
  if (
    user.unsafeMetadata.hue === undefined ||
    user.unsafeMetadata.saturation === undefined
  ) {
    user.update({
      unsafeMetadata: {
        hue: "244",
        saturation: "43",
      },
    });
  }

  const [hue, setHue] = useState(
    user.unsafeMetadata.hue ? user.unsafeMetadata.hue : "244"
  );
  const [saturation, setSaturation] = useState(
    user.unsafeMetadata.saturation ? user.unsafeMetadata.saturation : "43"
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--nextra-primary-hue",
      `${hue}deg`
    );
  }, [hue]);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--nextra-primary-saturation",
      `${saturation}%`
    );
  }, [saturation]);

  const updateData = () =>
    new Promise((resolve) => {
      const hueInput = document.querySelector(
        'input[name="hue"]'
      ) as HTMLInputElement;
      const saturationInput = document.querySelector(
        'input[name="saturation"]'
      ) as HTMLInputElement;
      if (hueInput) {
        hueInput.value = user.unsafeMetadata.hue;
        setHue(user.unsafeMetadata.hue);
      }
      if (saturationInput) {
        saturationInput.value = user.unsafeMetadata.saturation;
        setSaturation(user.unsafeMetadata.saturation);
      }
      resolve({ success: true });
    });

  const saveData = () =>
    new Promise((resolve, reject) => {
      if (user) {
        if (
          user.unsafeMetadata.hue !== hue ||
          user.unsafeMetadata.saturation !== saturation
        ) {
          user.update({
            unsafeMetadata: {
              hue,
              saturation,
            },
          });
        } else {
          reject({ error: "No changes made" });
        }
      }
      resolve({ success: true });
    });

  return (
    <>
      <div className="flex flex-col gap-0 container ml-3">
        <div className="flex flex-row gap-0 align-center">
          <h1 className="text-lg">Theme settings</h1>
          <button
            title="Reset theme to cloud save"
            onClick={() => {
              toast.promise(updateData, {
                loading: "Resetting data...",
                success: () => {
                  return `Successfully reset theme to cloud save`;
                },
                error: (error) => {
                  return `Error: ${error.error}`;
                },
              });
            }}
          >
            <svg
              className="w-5 h-5 text-gray-800 dark:text-white stroke-current hover:stroke-hue "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth={2}
                strokeLinejoin="round"
                d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
              />
            </svg>
          </button>

          <button
            title="Sync theme to cloud"
            onClick={() => {
              toast.promise(saveData, {
                loading: "Saving data...",
                success: () => {
                  return `Successfully saved theme to cloud save`;
                },
                error: (error) => {
                  return `Error: ${error.error}`;
                },
              });
            }}
          >
            <svg
              className="w-5 h-5 text-gray-800 dark:text-white fill-white hover:fill-hue"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L18 3.586A2 2 0 0 0 16.586 3H5Zm3 11a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6H8v-6Zm1-7V5h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M14 17h-4v-2h4v2Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-2 items-center h-6">
          <input
            type="range"
            min="0"
            max="360"
            className={slider_class}
            step="1"
            name="hue"
            value={hue}
            onChange={(e) => {
              setHue(e.target.value);
            }}
          />
          {hue}
        </div>
        <div className="flex gap-2 items-center h-6">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            name="saturation"
            className={slider_class}
            value={saturation}
            onChange={(e) => {
              setSaturation(e.target.value);
              const value = `${e.target.value}%`;
              document.documentElement.style.setProperty(
                "--nextra-primary-saturation",
                value
              );
            }}
          />
          {saturation}
        </div>
      </div>
    </>
  );
}

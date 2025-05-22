import Link from "next/link";
import { useUser } from "@clerk/nextjs";
export default function Cards() {
  const { user } = useUser();
  const isPremium =
    user?.publicMetadata.role === "admin" ||
    user?.publicMetadata.role === "premium";
  if (isPremium) {
    return (
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-60 h-80 dark:bg-slate-900 bg-stone-100 rounded-3xl dark:text-neutral-300 text-neutral-600 p-4 flex flex-col items-start justify-center gap-3 dark:hover:bg-gray-900 hover:bg-purple-100 hover:shadow-2xl hover:shadow-purple-600 transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
            className="w-32 h-32 ml-10"
            alt="Python"
          />
          <div className="">
            <p className="font-extrabold">Python</p>
            <p className="">Dedicated section for python</p>
          </div>
          <Link className="self-center" href={"/docs/en/py"}>
            <button className="bg-purple-700 dark:text-black text-white font-extrabold p-2 px-6 rounded-xl hover:bg-violet-500 transition-colors">
              Learn
            </button>
          </Link>
        </div>

        <div className="w-60 h-80 dark:bg-slate-900 bg-stone-100 rounded-3xl dark:text-neutral-300 text-neutral-600 p-4 flex flex-col items-start justify-center gap-3 dark:hover:bg-gray-900 hover:bg-purple-100 hover:shadow-2xl hover:shadow-purple-600 transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
            className="w-32 h-32 ml-10"
            alt="HTML"
          />
          <div className="">
            <p className="font-extrabold">Web development</p>
            <p className="">Dedicated section for web development</p>
          </div>
          <Link className="self-center" href={"/docs/en/web/"}>
            <button className="bg-purple-700 dark:text-black text-white font-extrabold p-2 px-6 rounded-xl hover:bg-violet-500 transition-colors">
              Learn
            </button>
          </Link>
        </div>

        <div className="w-60 h-80 dark:bg-slate-900 bg-stone-100 rounded-3xl dark:text-neutral-300 text-neutral-600 p-4 flex flex-col items-start justify-center gap-3 dark:hover:bg-gray-900 hover:bg-purple-100 hover:shadow-2xl hover:shadow-purple-600 transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png"
            className="w-46 h-32 "
            alt="Networking"
          />
          <div className="">
            <p className="font-extrabold">Networking</p>
            <p className="">Dedicated section for networking</p>
          </div>
          <Link className="self-center" href={"/docs/en/networking/"}>
            <button className="bg-purple-700 dark:text-black text-white font-extrabold p-2 px-6 rounded-xl hover:bg-violet-500 transition-colors">
              Learn
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return null;
}

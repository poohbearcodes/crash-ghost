import { withBasePath } from "@/lib/asset-path";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
        <div className="space-y-3">
          <p className="text-lg font-black uppercase tracking-[0.2em]">Crash Ghost</p>
          <p className="text-sm text-zinc-300">Streetwear and sticker chaos for the internet underground.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold uppercase">Socials</p>
          <div className="flex gap-4 text-zinc-300">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              TikTok
            </a>
            <a href="#" className="hover:text-white">
              Discord
            </a>
          </div>
        </div>
        <form className="space-y-3">
          <label htmlFor="email" className="block text-sm font-semibold uppercase">
            Newsletter
          </label>
          <div className="flex gap-2">
            <input
              id="email"
              type="email"
              placeholder="you@domain.com"
              className="w-full rounded-full border border-white bg-transparent px-4 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="rounded-full border border-white px-4 py-2 text-xs font-bold uppercase hover:bg-white hover:text-black">
              Join
            </button>
          </div>
        </form>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Crash Ghost. All rights reserved.
      </div>
      <img
        src={withBasePath("/stickers/8-ball.png")}
        alt="8 ball sticker"
        width={130}
        height={130}
        className="absolute bottom-3 right-3 h-[130px] w-[130px] -rotate-6 object-contain opacity-95"
      />
    </footer>
  );
}

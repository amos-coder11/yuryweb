export default function LiveBadge() {
  return (
    <div className="absolute right-6 top-24 z-20 sm:right-12 sm:top-28 lg:right-16 lg:top-32">
      <div className="relative">
        <div className="absolute -top-1 left-1/2 h-3 w-0.5 -translate-x-1/2 bg-gray-400" />
        <div className="flex items-center gap-2 rounded-sm bg-yc-red-live px-3 py-1.5 shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          <span className="text-xs font-bold tracking-widest text-white">EN VIVO</span>
        </div>
      </div>
    </div>
  );
}

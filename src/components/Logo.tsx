import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size }: LogoProps) {
  return (
    <div className={`flex shrink-0 items-center ${className}`}>
      <Image
        src="/yclogo.png"
        alt="YC Noticias"
        width={size ?? 40}
        height={size ?? 40}
        priority
        className={
          size
            ? "object-contain"
            : "h-8 w-8 object-contain sm:h-10 sm:w-10"
        }
        style={size ? { width: size, height: size } : undefined}
      />
    </div>
  );
}

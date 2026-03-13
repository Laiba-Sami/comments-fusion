import Image from "next/image";

export default function DecorativeBirds() {
  return (
    <div className="relative w-full hidden sm:block">
      <Image 
        src="/images/landing-page/left_bot.svg" 
        alt="Bird left" 
        width={140} 
        height={100} 
        className="absolute left-0 animate-bounce" 
      />
      <Image 
        src="/images/landing-page/right_bot.svg" 
        alt="Bird right" 
        width={140} 
        height={100}
        className="absolute right-0 animate-bounce" 
      />
    </div>
  );
}

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function Video() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/wP5GhASVhJc"
        thumbnailSrc="/billing.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/wP5GhASVhJc"
        thumbnailSrc="/billing.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

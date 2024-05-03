import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FileText, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-28 px-20 py-6 w-full">
      <div className="mx-auto flex w-full justify-between">
        <p>&copy; {new Date().getFullYear()} Lim Zhen Yang</p>
        <div className="flex gap-4">
          <HoverCard>
            <HoverCardTrigger target="_blank" href="https://www.canva.com/design/DAGD_iyszRY/pVYOGQYkmHuvUlBQMboO9w/view?utm_content=DAGD_iyszRY&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <div className="flex gap-2 items-center">
                <FileText />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-fit flex flex-col gap-2">
              <div className="flex items-center">
                Take a look at my résumé! 👀
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger href="https://github.com/ZhnYng">
              <Github />
            </HoverCardTrigger>
            <HoverCardContent className="w-fit flex flex-col gap-2">
              <div className="flex items-center">
                Github -
                <div className="rounded-full p-4 bg-gray-400 mx-1 border border-white"></div>
                ZhnYng
              </div>
              <p className="text-gray-400 text-xs">https://github.com/ZhnYng</p>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger href="https://www.linkedin.com/in/limzhenyang-tech">
              <Linkedin />
            </HoverCardTrigger>
            <HoverCardContent className="w-fit flex flex-col gap-2">
              <div className="flex items-center">
                LinkedIn -
                <div className="rounded-full p-4 bg-gray-400 mx-1 border border-white"></div>
                {/* <Image 
                    alt="LinkedIn profile picture"
                    src="https://media.licdn.com/dms/image/D5603AQFpqaprtFYJAg/profile-displayphoto-shrink_400_400/0/1699660077611?e=1719446400&v=beta&t=tTeJhIxEBz3AVuG_UKaNBNFGdhPSKlQh0sjXtfQHUdY"
                    width={100}
                    height={100}
                  /> */}
                Lim Zhen Yang
              </div>
              <p className="text-gray-400 text-xs">https://www.linkedin.com/in/limzhenyang-tech</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </footer>
  );
};
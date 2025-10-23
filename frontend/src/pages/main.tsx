import { Dock, DockIcon } from "@/components/ui/dock"
import IPhone from "./chat"
import Navbar from "./navbar"
import { VscAccount, VscActivateBreakpoints, VscGithubAlt, VscHome } from "react-icons/vsc"
import { ThemeProvider, useTheme } from "@/components/ui/theme-provider"
import { useState } from "react"
import { HoverCard } from "@radix-ui/react-hover-card"
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Highlighter } from "@/components/ui/highlighter"

function Main() {
    
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Docker />
      <div className="mt-[3vw] ml-[3vw] mr-[3vw]">
        
        <Navbar />
        <div className="mt-[6vw]">
            <Header />
        </div>
        
        <div className="absolute right-[0vw] top-[3vw]">
            <IPhone />
        </div>

      </div>
    </ThemeProvider>
    
  )
}

export function Header() {
    return(
        <div className="w-[60vw]">
            <p className="tracking-[-0.15vw] text-[3vw]">A {" "}<span ><Highlighter action="underline" color="#FF9800" animationDuration={900}>real-time messaging platform</Highlighter> {" "}</span> with private chats and community rooms, keeping teams and communities connected seamlessly.</p>
            <MarqueeDemo />
        </div>
    )
}

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-black dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative ml-[1vw] mt-[1vw] flex w-[55vw] flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}


export function Docker() {
    const { setTheme } = useTheme();
    const [theme, setThemer] = useState(false);
    function themeHandler() {
        setThemer(!theme);
        if(theme === false) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    return(
        <div className="fixed left-[43%] bottom-[1vw] z-10">
            <Dock className="">
                <DockIcon>
                    <HoverCard openDelay={1} closeDelay={100}>
                        <HoverCardTrigger>
                            <VscHome/>
                        </HoverCardTrigger>
                        <HoverCardContent className="mt-[10vw] rounded-2xl">
                            <div className="flex flex-col">
                                <p className="font-[400] text-[1vw]">Home</p>
                                <p className="font-[300] text-[0.85vw]">Use the app at home page.</p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </DockIcon>
                <DockIcon>
                    <HoverCard openDelay={1} closeDelay={100}>
                        <HoverCardTrigger>
                            <VscActivateBreakpoints onClick={themeHandler} />
                        </HoverCardTrigger>
                        <HoverCardContent className="mt-[10vw] rounded-2xl">
                            <div className="flex flex-col">
                                <p className="font-[400] text-[1vw]">Theme Toggle</p>
                                <p className="font-[300] text-[0.85vw]">Change the theme to light / dark mode.</p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </DockIcon>
                <DockIcon>
                    <HoverCard openDelay={1} closeDelay={100}>
                        <HoverCardTrigger>
                            <VscGithubAlt />
                        </HoverCardTrigger>
                        <HoverCardContent className="mt-[10vw] rounded-2xl">
                            <div className="flex flex-col">
                                <p className="font-[400] text-[1vw]">Github</p>
                                <p className="font-[300] text-[0.85vw]">Understand how I made this websocket app.</p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </DockIcon>
                <DockIcon>
                    <HoverCard openDelay={1} closeDelay={100}>
                        <HoverCardTrigger>
                            <VscAccount />
                        </HoverCardTrigger>
                        <HoverCardContent className="mt-[10vw] rounded-2xl">
                            <div className="flex flex-col">
                                <p className="font-[400] text-[1vw]">About Me</p>
                                <p className="font-[300] text-[0.85vw]">Get to know more about me.</p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    
                </DockIcon>
            </Dock>
        </div> 
    )
}

export default Main
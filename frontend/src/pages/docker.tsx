import { Dock, DockIcon } from "@/components/ui/dock";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { useTheme } from "@/components/ui/theme-provider";
import { HoverCardContent } from "@radix-ui/react-hover-card";
import { useState } from "react";
import { VscAccount, VscActivateBreakpoints, VscGithubAlt, VscHome } from "react-icons/vsc";

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
        <div className="fixed left-[43%] bottom-[1vw]">
            <Dock className="">
                <DockIcon>
                    <HoverCard openDelay={100} closeDelay={100}>
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
                    <HoverCard openDelay={100} closeDelay={100}>
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
                    <HoverCard openDelay={100} closeDelay={100}>
                        <HoverCardTrigger>
                            <VscGithubAlt />
                        </HoverCardTrigger>
                        <HoverCardContent className=" mt-[10vw] rounded-2xl">
                            <div className="flex flex-col">
                                <p className="font-[400] text-[1vw]">Github</p>
                                <p className="font-[300] text-[0.85vw]">Understand how I made this websocket app.</p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </DockIcon>
                <DockIcon>
                    <HoverCard openDelay={100} closeDelay={100}>
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
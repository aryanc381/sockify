import IPhone from "./chat"
import Navbar from "./navbar"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Highlighter } from "@/components/ui/highlighter"
import { MarqueeDemo } from "./testimonials"
import { Docker } from "./docker"

function Main() {
    
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Docker />
      <div className="mt-[3vw] ml-[3vw] mr-[3vw]">
        
        <Navbar />
        <div className="mt-[5vw]">
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
            <div className="text-[1.25vw] mt-[2vw] text-gray-500">
              {/* <p></p>
              <img src="./react.png" alt="react" className="mt-[1vw] w-[3vw]" />
            */}</div> 
        </div>
    )
}

export default Main
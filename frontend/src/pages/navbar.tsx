import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div className="flex">
        <p className="cursor-[pointer] text-[1.5vw] mr-[2vw] mt-[0.1vw]">Sockify</p>
        <div className="flex gap-[0.75vw]">
                <Button className="w-[6vw] rounded-[3vw] cursor-pointer">Signup</Button>
                <Button className="w-[6vw] rounded-[3vw] cursor-pointer">Login</Button>
            </div>
        {/* <Dock direction="middle" className="h-[3.5vw] bg-black border-gray-700">
        <DockIcon>
            <VscHome color="white" />
        </DockIcon>
        <DockIcon>
            <VscAccount color="white" />
        </DockIcon>
        <DockIcon>
            <VscAccount color="white" />
        </DockIcon>
        <DockIcon>
            <VscAccount color="white" />
        </DockIcon>
        </Dock> */}
    
    </div>
  )
}

export default Navbar;
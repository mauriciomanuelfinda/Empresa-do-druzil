import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import Logo from "@/assets/img/logotipo.svg"
import { menuItems } from "@/lib/constants"
import { linkClasses } from "@/lib/link_classes"

export function Header() {
  const { pathname } = useLocation()
  const navigte = useNavigate()

  return (
    <header className="fixed top-0 z-50 w-full bg-black/20 backdrop-blur-sm">
      <div className="flex h-14 md:h-20  items-center justify-between w-[95%] mx-auto">
        <Link to="/" className="flex items-center justify-center space-x-3">
          <img src={Logo} alt="CriativaMente" className="h-10" />
          <h3 className="text-2xl text-white font-bold">
            <span className="text-dourado">Dura</span>mat
          </h3>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center ml-auto justify-around gap-8 text-white font-medium text-base">
          {menuItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={linkClasses(item.path, pathname)}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <Button
            onClick={() => navigte("/contact")}
            variant="outline"
            className="border-dourado text-dourado hover:bg-dourado hover:text-cinza_escuro"
          >
            Contato
          </Button>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <Search className="h-6 w-6 text-white hover:bg-[#3a3b3c]" />
          <Sheet >
            <SheetTrigger asChild>
                <Menu className="h-6 w-6 text-white hover:bg-[#3a3b3c]" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-cinza_escuro border-l border-[#3a3b3c]">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-3 mb-8 pt-4">
                  {/* <img src={Logo} alt="CriativaMente" className="h-10" /> */}
                  <h3 className="text-2xl text-white font-bold">
                    <span className="text-dourado">Dura</span>mat
                  </h3>
                </div>

                <nav className="flex-1 flex flex-col space-y-2 text-base font-medium overflow-y-auto">
                  {menuItems.map((item) => (
                    <div key={item.path} className="border-b border-[#3a3b3c] pb-2">
                      <Link
                        to={item.path}
                        className={`${linkClasses(item.path, pathname)} py-3 px-2 rounded-md hover:bg-[#3a3b3c] w-full`}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </nav>

                <div className="pt-4 border-t border-[#3a3b3c]">
                  <Button
                    className="w-full bg-dourado hover:bg-[#d9a037] text-cinza_escuro"
                    onClick={() => navigte("/contact")}
                  >
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
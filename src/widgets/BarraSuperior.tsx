import Link from "next/link"
import Logo from "../components/Logo/index"
import { IconUserCircle } from "@tabler/icons-react"
import BotaoIcone from "../components/BotaoIcone"

const BarraSuperior = () => {
    return (
        <div className="container my-6 mx-auto flex justify-between items-center">

          <Logo />

          <div className="flex gap-6">
            <Link className="font-semibold" href="/">Acomodações</Link>
            <Link className="opacity-60" href="/">Experiências</Link>
          </div>       

          <BotaoIcone
            icone={(
              <IconUserCircle 
                  aria-label="Ícone de usuário" 
                  size={22}
              />
            )}>
            Entrar
          </BotaoIcone>

          
          
        </div>
    )
}

export default BarraSuperior
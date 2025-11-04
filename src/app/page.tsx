import BarraPesquisa from "../widgets/BarraPesquisa";
import BarraSuperior from "../widgets/BarraSuperior";

export default function Home() {
  return (
    <>
      <div>
        
        <BarraSuperior />
        <BarraPesquisa />

      </div>

      <hr />


      <div className="border-green-600 border-2">
        Área Conteúdo
      </div>


      <div className="border-purple-600 border-2">
        Área Rodapé
      </div>


    </>
  );
}

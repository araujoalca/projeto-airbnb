import { fetchDataById } from "@/src/utils/api";
import AcomodacaoDepoimentos from "@/src/widgets/AcomodacaoDepoimentos";
import AcomodacaoDetalhes from "@/src/widgets/AcomodacaoDetalhes";
import BarraPesquisa from "@/src/widgets/BarraPesquisa";
import BarraSuperior from "@/src/widgets/BarraSuperior";
import Galeria from "@/src/widgets/Galeria";
import Rodape from "@/src/widgets/Rodape";
import { notFound } from "next/navigation";


interface PageProps {
  id: string
}

export default async function Page(
  { params }: { params: Promise<PageProps> }
) {
  const { id } = await params
  const acomodacao = await fetchDataById(id)

  if (!acomodacao) {
    notFound()
  }

  return (
    <div>

      <header className="container mx-auto">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-semibold pb-2">{acomodacao.title}</h1>
        <Galeria fotos={acomodacao.photos} />
        <div className="flex flex-col md:flex-row">
          <AcomodacaoDetalhes accommodation={acomodacao} />
          <AcomodacaoDepoimentos testimonials={acomodacao.testimonials} />
        </div>
      </main>

      <footer className="bg-gray-200">
        <Rodape />
      </footer>

    </div>
  );
}
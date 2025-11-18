interface PageProps {
    id: string
}

export default async function Page(
    {params} : {params: Promise<PageProps>}
) {
    const dados = await params
    return (
      <div>
        url: {dados.id}
      </div>
    );
}
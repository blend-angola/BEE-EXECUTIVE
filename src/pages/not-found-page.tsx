import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <main className="w-full h-full">
      <div className="max-w-96 mx-auto mt-4 flex flex-col gap-6 ">
        <h1 className="text-beeYellow-secondary text-3xl font-medium">
          Página não encontrada
        </h1>
        <Link
          to="/"
          className="border-[1px] border-beeWhiteSmoke/20 px-4 text-center hover:bg-beeBlack-secondary transition-all duration-200 ease-in-out text-beeWhiteSmoke rounded-xl py-2"
        >
          Voltar à página inicial
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage

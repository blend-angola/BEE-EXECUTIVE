const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        className="py-2 px-4 rounded-lg bg-transparent placeholder:text-beeWhiteSmoke border border-beeWhiteSmoke/20 text-beeWhiteSmoke"
        placeholder="Nome e sobrenome"
      />
      <input
        type="email"
        className="py-2 px-4 rounded-lg bg-transparent placeholder:text-beeWhiteSmoke border border-beeWhiteSmoke/20 text-beeWhiteSmoke"
        placeholder="Email"
      />
      <input
        type="number"
        className="py-2 px-4 rounded-lg bg-transparent placeholder:text-beeWhiteSmoke border border-beeWhiteSmoke/20 text-beeWhiteSmoke"
        placeholder="telefone"
      />
      <textarea
        rows={6}
        className="py-2 px-4 rounded-lg bg-transparent placeholder:text-beeWhiteSmoke resize-none border border-beeWhiteSmoke/20 text-beeWhiteSmoke"
        placeholder="Deixe sua mensagem aqui..."
      />
      <button
        type="submit"
        className=" px-4 py-2 rounded-lg bg-beeYellow-secondary text-beeBlack-secondary w-fit"
      >
        Submeter
      </button>
    </form>
  )
}

export default Form

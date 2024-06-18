const Form = () => {
  return (
    <form className="flex flex-col gap-4 lg:items-start items-center w-full">
      <input
        type="text"
        className="w-full py-2 px-4 rounded-lg bg-transparent outline-none placeholder:text-skin-text border border-beeBorder text-skin-text"
        placeholder="Nome e sobrenome"
      />
      <input
        type="email"
        className="w-full py-2 px-4 rounded-lg bg-transparent outline-none placeholder:text-skin-text border border-beeBorder text-skin-text"
        placeholder="Email"
      />
      <input
        type="number"
        className="w-full py-2 px-4 rounded-lg bg-transparent outline-none placeholder:text-skin-text border border-beeBorder text-skin-text"
        placeholder="telefone"
      />
      <textarea
        rows={6}
        className="py-2 px-4 w-full rounded-lg bg-transparent outline-none placeholder:text-skin-text resize-none border border-beeBorder text-skin-text"
        placeholder="Deixe sua mensagem aqui..."
      />
      <button
        type="submit"
        className=" px-4 py-2  rounded-lg bg-beeYellow-secondary text-beeBlack-secondary w-fit"
      >
        Submeter
      </button>
    </form>
  )
}

export default Form

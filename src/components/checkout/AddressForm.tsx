export function AddressForm() {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nome da empresa"
        className="flex p-3 w-full sm:w-1/2 bg-base-input text-base-label"
      />
      <input
        type="text"
        placeholder="Endereço"
        className="flex p-3 w-full bg-base-input text-base-label"
      />
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Cidade"
          className="flex p-3 w-full sm:w-1/2 bg-base-input text-base-label"
        />
        <input
          type="text"
          placeholder="CEP"
          className="flex p-3 w-full sm:w-1/3 mt-1 bg-base-input text-base-label"
        />
        <input
          type="text"
          placeholder="Número"
          className="flex p-3 w-full sm:w-1/5 mt-1 bg-base-input text-base-label"
        />
      </div>
    </div>
  )
}

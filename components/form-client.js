export function FormClient(params) {
  return (
    <div className="flex items-center h-full text-black">
      <div class="w-3/4 mx-auto">
        <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-5">
          <div class="md:col-span-3">
            <label for="full_name" className="text-[#1FBBC2]">
              Nombre Completo
            </label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Maria Garcia"
              autoComplete="off"
            />
          </div>
          <div class="md:col-span-2">
            <label for="id" className="text-[#1FBBC2]">
              Cedula
            </label>
            <input
              type="text"
              name="city"
              id="city"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="30.394.495"
              autoComplete="off"
            />
          </div>
          <div class="md:col-span-2">
            <label for="zona" className="text-[#1FBBC2]">
              Especialista
            </label>
            <select
              name="zona"
              id="zona"
              autoComplete="off"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            >
              <option value="value1">Value 1</option>
              <option value="value2" selected>
                Value 2
              </option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <div class="md:col-span-3">
            <label for="address" className="text-[#1FBBC2]">
              Dirección
            </label>
            <input
              type="text"
              name="address"
              autoComplete="off"
              id="address"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Avenida libertador"
            />
          </div>
          <div class="md:col-span-2">
            <label for="phone" className="text-[#1FBBC2]">
              Telefono
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="0412 38448453"
            />
          </div>
          <div class="md:col-span-3">
            <label for="email" className="text-[#1FBBC2]">
              Correo
            </label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              id="email"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="correo@dominio.com"
            />
          </div>

          <div class="md:col-span-5 text-right my-10">
            <div class="flex gap-3 justify-end">
              <button class="bg-[#E42220] transition ease-out duration-150 hover:bg-[#e44e20] text-white text-base py-1 px-5 rounded-full">
                Cancelar
              </button>
              <button class="bg-[#37A836] transition ease-out duration-150 hover:bg-[#64a836] text-white text-base py-1 px-5 rounded-full">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

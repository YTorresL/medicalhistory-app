export function FormHistorial(params) {
  return (
    <div className="flex items-center h-full text-black">
      <div class="w-3/4 mx-auto flex flex-col items-center gap-3">
        <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-4">
          <div class="md:col-span-2">
            <label for="full_name" className="text-[#1FBBC2]">
              Edad
            </label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="18"
              autoComplete="off"
            />
          </div>
          <div class="md:col-span-2">
            <label for="zona" className="text-[#1FBBC2]">
              Sexo
            </label>
            <select
              name="zona"
              id="zona"
              autoComplete="off"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            >
              <option value="value1">Masculino</option>
              <option value="value2" selected>
                Femenino
              </option>
              <option value="value3">Value 3</option>
            </select>
          </div>
        </div>
        <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-4 hidden">
          <div className="flex items-center col-span-4 gap-3 mt-3">
            <strong className=" text-[#1FBBC2] flex-shrink-0">
              Ojo Izquierdo
            </strong>
            <div className="h-[1px] w-full bg-[#EDEDED]"></div>
          </div>

          <div class="md:col-span-2">
            <label for="id" className="text-[#1FBBC2]">
              Esfera
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
            <label for="address" className="text-[#1FBBC2]">
              Cilindro
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
              Eje
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
          <div class="md:col-span-2">
            <label for="email" className="text-[#1FBBC2]">
              Distancia
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
          <div class="md:col-span-2">
            <label for="id" className="text-[#1FBBC2]">
              Adición
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
        </div>
        <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-4 hidden">
          <div className="flex items-center col-span-4 gap-3 mt-3">
            <strong className=" text-[#1FBBC2] flex-shrink-0">
              Ojo Derecho
            </strong>
            <div className="h-[1px] w-full bg-[#EDEDED]"></div>
          </div>
          <div class="md:col-span-2">
            <label for="id" className="text-[#1FBBC2]">
              Esfera
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
            <label for="address" className="text-[#1FBBC2]">
              Cilindro
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
              Eje
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
          <div class="md:col-span-2">
            <label for="email" className="text-[#1FBBC2]">
              Distancia
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
          <div class="md:col-span-2">
            <label for="email" className="text-[#1FBBC2]">
              Adición
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
        </div>
        <div class="w-full my-10 hidden">
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
  )
}

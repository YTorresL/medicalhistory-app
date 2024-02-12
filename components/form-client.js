"use client"
import { useEffect, useState } from "react"
import { getZona } from "./get-info"

const TEXT_FORM = {
  NOMBRE: { HEAD: "Nombre completo", ATTR: "Nombre" },
  RIF: { HEAD: "Cedula", ATTR: "Rif" },
  ZONA: { HEAD: "Especialista", ATTR: "Zona" },
  DIRECC: { HEAD: "Dirección", ATTR: "Direcc" },
  TELEF: { HEAD: "Telefono", ATTR: "Telef" },
  EMAIL: { HEAD: "Correo", ATTR: "Email" },
}

const initValues = {
  Nombre: "",
  Rif: "",
  Zona: "",
  Direcc: "",
  Telef: "",
  Email: "",
}

export function FormClient() {
  const [information, setInformation] = useState([])
  const [formValues, setFormValues] = useState(initValues)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getZona()
      setInformation(data)
    }
    fetchData()
  }, [])

  const handleChange = (event) => {
    const { value, name } = event.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="flex items-center h-full text-black">
      <div class="w-3/4 mx-auto">
        <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-5">
          <div class="md:col-span-3">
            <label for="full_name" className="text-[#1FBBC2]">
              {TEXT_FORM.NOMBRE.HEAD}
            </label>
            <input
              type="text"
              name={TEXT_FORM.NOMBRE.ATTR}
              onChange={handleChange}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Maria Garcia"
              value={formValues.Nombre}
              autoComplete="off"
            />
          </div>
          <div class="md:col-span-2">
            <label for="id" className="text-[#1FBBC2]">
              {TEXT_FORM.RIF.HEAD}
            </label>
            <input
              type="text"
              onChange={handleChange}
              name={TEXT_FORM.RIF.ATTR}
              value={formValues.Rif}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="30.394.495"
              autoComplete="off"
            />
          </div>
          <div class="md:col-span-2">
            <label for="zona" className="text-[#1FBBC2]">
              {TEXT_FORM.ZONA.HEAD}
            </label>
            <select
              name={TEXT_FORM.ZONA.ATTR}
              autoComplete="off"
              onChange={handleChange}
              value={formValues.Zona}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            >
              {information.map((item, index) => (
                <option value={item.nombre} key={index}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </div>
          <div class="md:col-span-3">
            <label for="address" className="text-[#1FBBC2]">
              {TEXT_FORM.DIRECC.HEAD}
            </label>
            <input
              type="text"
              onChange={handleChange}
              name={TEXT_FORM.DIRECC.ATTR}
              autoComplete="off"
              value={formValues.Direcc}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Avenida libertador"
            />
          </div>
          <div class="md:col-span-2">
            <label for="phone" className="text-[#1FBBC2]">
              {TEXT_FORM.TELEF.HEAD}
            </label>
            <input
              type="text"
              name={TEXT_FORM.TELEF.ATTR}
              value={formValues.Telef}
              onChange={handleChange}
              autoComplete="off"
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="0412 38448453"
            />
          </div>
          <div class="md:col-span-3">
            <label for="email" className="text-[#1FBBC2]">
              {TEXT_FORM.EMAIL.HEAD}
            </label>
            <input
              type="text"
              name={TEXT_FORM.EMAIL.ATTR}
              onChange={handleChange}
              value={formValues.Email}
              autoComplete="off"
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

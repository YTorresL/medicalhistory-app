"use client"
import { useEffect, useState } from "react"
import { getZona } from "../info/get-info"
import { customerSubmissionForm } from "./customer-submission-form"

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

export function CustomerForm({ handleCreateToggle }) {
  const [informationZona, setInformation] = useState([])
  const [formValues, setFormValues] = useState(initValues)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getZona()
      setInformation(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    // Verificar si hay datos en informationZona antes de establecer el valor inicial del campo "Zona"
    if (informationZona.length > 0 && formValues.Zona === "") {
      setFormValues((prev) => ({
        ...prev,
        Zona: informationZona[0].zona, // Establecer el valor inicial como el primer elemento de informationZona
      }))
    }
  }, [informationZona])

  const handleChange = (event) => {
    const { value, name } = event.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await customerSubmissionForm(formValues)
      console.log("Respuesta del servidor:", response)
      setFormValues(initValues)
    } catch (error) {
      console.error("Error al enviar la data:", error)
    }
  }

  return (
    <div className="flex items-center h-full text-black">
      <div class="w-3/4 mx-auto">
        <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-5">
          <div class="md:col-span-3">
            <label for={TEXT_FORM.NOMBRE.ATTR} className="text-[#1FBBC2]">
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
            <label for={TEXT_FORM.RIF.ATTR} className="text-[#1FBBC2]">
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
            <label for={TEXT_FORM.ZONA.ATTR} className="text-[#1FBBC2]">
              {TEXT_FORM.ZONA.HEAD}
            </label>
            <select
              name={TEXT_FORM.ZONA.ATTR}
              autoComplete="off"
              onChange={handleChange}
              value={formValues.Zona}
              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            >
              {informationZona.map((item, index) => (
                <option value={item.zona} key={index}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </div>
          <div class="md:col-span-3">
            <label for={TEXT_FORM.DIRECC.ATTR} className="text-[#1FBBC2]">
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
            <label for={TEXT_FORM.TELEF.ATTR} className="text-[#1FBBC2]">
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
            <label for={TEXT_FORM.EMAIL.ATTR} className="text-[#1FBBC2]">
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
              <button
                type="submit"
                class="bg-[#37A836] transition ease-out duration-150 hover:bg-[#64a836] text-white text-base py-1 px-5 rounded-full"
                onClick={onSubmit}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

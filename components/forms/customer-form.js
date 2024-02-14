"use client"
import { useEffect, useState } from "react"
import { getZona } from "../getdata/get-info"
import { DataValidation } from "../popup/data-validation"
import { customerSubmissionForm } from "../submission/customer-submission-form"
import { useOpen } from "@/hooks/useOpen"

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

export const STATE_PROCESS = {
  SUCCESS: true,
  CANCEL: false,
}

export function CustomerForm({ handleCreateToggle }) {
  const [customerZona, setCustomer] = useState([])
  const [process, setProcess] = useState(false)
  const [formValues, setFormValues] = useState(initValues)
  const [isConfirmation] = useState(false) // Estado para controlar la apertura/cierre del mostrar un numero limitado de items
  const { toggleView, getPopUpStyle } = useOpen(isConfirmation) // Usa el hook useOpen para controlar la visibilidad del límite // Usa el hook useOpen para controlar la visibilidad de la configuración

  useEffect(() => {
    const fetchData = async () => {
      const data = await getZona()
      setCustomer(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    // Verificar si hay datos en informationZona antes de establecer el valor inicial del campo "Zona"
    if (customerZona.length > 0 && formValues.Zona === "") {
      setFormValues((prev) => ({
        ...prev,
        Zona: customerZona[0].zona, // Establecer el valor inicial como el primer elemento de informationZona
      }))
    }
  }, [customerZona])

  const handleChange = (event) => {
    const { value, name } = event.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNotificationToggle = () => {
    toggleView()
    setProcess(STATE_PROCESS.SUCCESS)
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await customerSubmissionForm(formValues)
      console.log("Respuesta del servidor:", response)
      setFormValues(initValues)
      setProcess(STATE_PROCESS.CANCEL)
      handleCreateToggle()
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
              {customerZona.map((item, index) => (
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
              <button
                onClick={handleCreateToggle}
                class="bg-[#E42220] transition ease-out duration-150 hover:bg-[#e44e20] text-white text-base py-1 px-5 rounded-full"
              >
                Cancelar
              </button>
              <button
                type="submit"
                class="bg-[#37A836] transition ease-out duration-150 hover:bg-[#64a836] text-white text-base py-1 px-5 rounded-full"
                onClick={handleNotificationToggle}
              >
                Agregar
              </button>
            </div>
          </div>

          {process === STATE_PROCESS.SUCCESS && (
            <DataValidation
              getPopUpStyle={getPopUpStyle}
              handleToggle={handleNotificationToggle}
              handleConfirmation={onSubmit}
              state={STATE_PROCESS.SUCCESS}
            />
          )}
        </div>
      </div>
    </div>
  )
}

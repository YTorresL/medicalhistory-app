"use client"
import { useState } from "react"
import { IconArrowLeft, IconArrowRight, IconEye } from "../icons"
import { customerHistorySubmissionForm } from "../submission/customer-history-submission-form"
import { STATE_PROCESS } from "./customer-form"
import { DataValidation } from "../popup/data-validation"
import { useOpen } from "@/hooks/useOpen"

const FORM_STEP = {
  STEP_1: 1,
  STEP_2: 2,
  STEP_3: 3,
  STEP_4: 4,
  STEP_5: 5,
}

const TEXT_FORM = {
  EDAD: { HEAD: "Edad", ATTR: "edad" },
  SEXO: { HEAD: "Sexo", ATTR: "sexo", OPTION: ["Masculino", "Femenino"] },
  OI_ESFERA: { HEAD: "Esfera", ATTR: "OI_Esfera" },
  OI_CILINDRO: { HEAD: "Cilindro", ATTR: "OI_Cilindro" },
  OI_EJE: { HEAD: "Eje", ATTR: "OI_Eje" },
  OI_DISTANCIA: { HEAD: "Distancia", ATTR: "OI_Distancia" },
  OI_ADICION: { HEAD: "Adición", ATTR: "OI_Adicion" },
  OD_ESFERA: { HEAD: "Esfera", ATTR: "OD_Esfera" },
  OD_CILINDRO: { HEAD: "Cilindro", ATTR: "OD_Cilindro" },
  OD_EJE: { HEAD: "Eje", ATTR: "OD_Eje" },
  OD_DISTANCIA: { HEAD: "Distancia", ATTR: "OD_Distancia" },
  OD_ADICION: { HEAD: "Adición", ATTR: "OD_Adicion" },
  DNP: { HEAD: "DNP", ATTR: "DNP" },
  ALTURA: { HEAD: "Altura", ATTR: "Altura" },
  DP: { HEAD: "DP", ATTR: "DP" },
  TM: { HEAD: "TM", ATTR: "Tm" },
  PT: { HEAD: "PT", ATTR: "Pt" },
  CRISTALES: { HEAD: "Cristales", ATTR: "Cristales" },
  MONTURA: { HEAD: "Montura", ATTR: "Montura" },
  COLOR: { HEAD: "Color", ATTR: "Color" },
}

const initValues = {
  codigoCliente: "",
  edad: "",
  sexo: TEXT_FORM.SEXO.OPTION[0],
  OI_Esfera: "",
  OI_Cilindro: "",
  OI_Eje: "",
  OI_Distancia: "",
  OI_Adicion: "",
  OD_Esfera: "",
  OD_Cilindro: "",
  OD_Eje: "",
  OD_Distancia: "",
  OD_Adicion: "",
  DNP: "",
  Altura: "",
  DP: "",
  Tm: "",
  Pt: "",
  Cristales: "",
  Montura: "",
  Color: "",
}

export function CustomerHistoryForm({ customerId, handleCreateToggle }) {
  const [step, setStep] = useState(FORM_STEP.STEP_1)
  const [process, setProcess] = useState(false)
  const [formValues, setFormValues] = useState(initValues)
  const [isConfirmation] = useState(false) // Estado para controlar la apertura/cierre del mostrar un numero limitado de items
  const { toggleView, getPopUpStyle } = useOpen(isConfirmation) // Usa el hook useOpen para controlar la visibilidad del límite // Usa el hook useOpen para controlar la visibilidad de la configuración

  const handleChangeStep = (id) => {
    setStep(id)
  }

  const handleChangeForm = (event) => {
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
      const response = await customerHistorySubmissionForm(
        formValues,
        customerId,
      )
      console.log("Respuesta del servidor:", response)
      setFormValues(initValues)
      setProcess(STATE_PROCESS.CANCEL)
      handleCreateToggle()
    } catch (error) {
      console.error("Error al enviar la data:", error)
    }
  }

  return (
    <div className="flex items-center h-[90%] text-black relative">
      <div class="w-3/4 mx-auto flex flex-col items-center gap-3">
        {step === FORM_STEP.STEP_1 && (
          <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-4 animate-fade">
            <div class="md:col-span-2">
              <label for={TEXT_FORM.EDAD.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.EDAD.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.EDAD.ATTR}
                value={formValues.edad}
                onChange={handleChangeForm}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="18"
                autoComplete="off"
              />
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.SEXO.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.SEXO.HEAD}
              </label>
              <select
                name={TEXT_FORM.SEXO.ATTR}
                value={formValues.sexo}
                onChange={handleChangeForm}
                autoComplete="off"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              >
                {TEXT_FORM.SEXO.OPTION.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {step === FORM_STEP.STEP_2 && (
          <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-4 animate-fade">
            <div className="flex items-center justify-center col-span-4 gap-3 mb-5">
              <IconEye className="w-10 h-auto" fill="#1FBBC2" />
              <strong className="text-2xl text-black uppercase">
                Izquierdo
              </strong>
            </div>

            <div class="md:col-span-2">
              <label for={TEXT_FORM.OI_ESFERA.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.OI_ESFERA.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OI_ESFERA.ATTR}
                value={formValues.OI_Esfera}
                onChange={handleChangeForm}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
                autoComplete="off"
              />
            </div>

            <div class="md:col-span-2">
              <label
                for={TEXT_FORM.OI_CILINDRO.ATTR}
                className="text-[#1FBBC2]"
              >
                {TEXT_FORM.OI_CILINDRO.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OI_CILINDRO.ATTR}
                onChange={handleChangeForm}
                autoComplete="off"
                value={formValues.OI_Cilindro}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.OI_EJE.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.OI_EJE.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OI_EJE.ATTR}
                onChange={handleChangeForm}
                value={formValues.OI_Eje}
                autoComplete="off"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
            <div class="md:col-span-2">
              <label
                for={TEXT_FORM.OI_DISTANCIA.ATTR}
                className="text-[#1FBBC2]"
              >
                {TEXT_FORM.OI_DISTANCIA.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OI_DISTANCIA.ATTR}
                onChange={handleChangeForm}
                autoComplete="off"
                value={formValues.OI_Distancia}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.OI_ADICION.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.OI_ADICION.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OI_ADICION.ATTR}
                onChange={handleChangeForm}
                value={formValues.OI_Adicion}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
                autoComplete="off"
              />
            </div>
          </div>
        )}
        {step === FORM_STEP.STEP_3 && (
          <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-4 animate-fade">
            <div className="flex items-center justify-center col-span-4 gap-3 mb-5">
              <IconEye className="w-10 h-auto" fill="#1FBBC2" />
              <strong className="text-2xl text-black uppercase">Derecho</strong>
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.OD_ESFERA.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.OD_ESFERA.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OD_ESFERA.ATTR}
                onChange={handleChangeForm}
                value={formValues.OD_Esfera}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
                autoComplete="off"
              />
            </div>

            <div class="md:col-span-2">
              <label
                for={TEXT_FORM.OD_CILINDRO.ATTR}
                className="text-[#1FBBC2]"
              >
                {TEXT_FORM.OD_CILINDRO.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OD_CILINDRO.ATTR}
                onChange={handleChangeForm}
                autoComplete="off"
                value={formValues.OD_Cilindro}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.OD_EJE.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.OD_EJE.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OD_EJE.ATTR}
                onChange={handleChangeForm}
                value={formValues.OD_Eje}
                autoComplete="off"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
            <div class="md:col-span-2">
              <label
                for={TEXT_FORM.OD_DISTANCIA.ATTR}
                className="text-[#1FBBC2]"
              >
                {TEXT_FORM.OD_DISTANCIA.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OD_DISTANCIA.ATTR}
                onChange={handleChangeForm}
                autoComplete="off"
                value={formValues.OD_Distancia}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.OD_ADICION.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.OD_ADICION.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.OD_ADICION.ATTR}
                onChange={handleChangeForm}
                autoComplete="off"
                value={formValues.OD_Adicion}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
          </div>
        )}
        {step === FORM_STEP.STEP_4 && (
          <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-4 animate-fade">
            <div class="md:col-span-2">
              <label for={TEXT_FORM.DNP.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.DNP.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.DNP.ATTR}
                onChange={handleChangeForm}
                value={formValues.DNP}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
                autoComplete="off"
              />
            </div>

            <div class="md:col-span-2">
              <label for={TEXT_FORM.ALTURA.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.ALTURA.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.ALTURA.ATTR}
                onChange={handleChangeForm}
                autoComplete="off"
                value={formValues.Altura}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.DP.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.DP.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.DP.ATTR}
                value={formValues.DP}
                onChange={handleChangeForm}
                autoComplete="off"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.TM.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.TM.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.TM.ATTR}
                onChange={handleChangeForm}
                autoComplete="off"
                value={formValues.Tm}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.PT.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.PT.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.PT.ATTR}
                onChange={handleChangeForm}
                autoComplete="off"
                value={formValues.Pt}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="+1.00"
              />
            </div>
          </div>
        )}
        {step === FORM_STEP.STEP_5 && (
          <div class="grid gap-4 gap-y-2 text-sm md:grid-cols-4 animate-fade">
            <div class="md:col-span-2">
              <label for={TEXT_FORM.CRISTALES.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.CRISTALES.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.CRISTALES.ATTR}
                onChange={handleChangeForm}
                value={formValues.Cristales}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="Bifocales"
                autoComplete="off"
              />
            </div>

            <div class="md:col-span-2">
              <label for={TEXT_FORM.MONTURA.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.MONTURA.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.MONTURA.ATTR}
                onChange={handleChangeForm}
                autoComplete="off"
                value={formValues.Montura}
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="00"
              />
            </div>
            <div class="md:col-span-2">
              <label for={TEXT_FORM.COLOR.ATTR} className="text-[#1FBBC2]">
                {TEXT_FORM.COLOR.HEAD}
              </label>
              <input
                type="text"
                name={TEXT_FORM.COLOR.ATTR}
                onChange={handleChangeForm}
                value={formValues.Color}
                autoComplete="off"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="Azul"
              />
            </div>
          </div>
        )}

        <div className="absolute bottom-5 right-5">
          <div className="flex items-center gap-3 animate-fade" key={step}>
            <div className="flex gap-1">
              <strong>{step}</strong>
              <span>de</span>
              <strong>{FORM_STEP.STEP_5}</strong>
            </div>
            {(step === FORM_STEP.STEP_2 ||
              step === FORM_STEP.STEP_3 ||
              step === FORM_STEP.STEP_4 ||
              step === FORM_STEP.STEP_5) && (
              <div>
                <button
                  className="flex items-center rounded-full p-2 transition ease-out duration-150 bg-[#1FBBC2] hover:bg-[#1fafc2]"
                  onClick={() =>
                    handleChangeStep(
                      FORM_STEP.STEP_2 === step
                        ? FORM_STEP.STEP_1
                        : FORM_STEP.STEP_3 === step
                          ? FORM_STEP.STEP_2
                          : FORM_STEP.STEP_4 === step
                            ? FORM_STEP.STEP_3
                            : FORM_STEP.STEP_5 === step
                              ? FORM_STEP.STEP_4
                              : undefined,
                    )
                  }
                >
                  <IconArrowLeft className="w-6 h-6" fill="#fff" />
                </button>
              </div>
            )}
            {(step === FORM_STEP.STEP_1 ||
              step === FORM_STEP.STEP_2 ||
              step === FORM_STEP.STEP_3 ||
              step === FORM_STEP.STEP_4) && (
              <button
                className="flex items-center rounded-full p-2 transition ease-out duration-150 bg-[#1FBBC2] hover:bg-[#1fafc2]"
                onClick={() =>
                  handleChangeStep(
                    FORM_STEP.STEP_1 === step
                      ? FORM_STEP.STEP_2
                      : FORM_STEP.STEP_2 === step
                        ? FORM_STEP.STEP_3
                        : FORM_STEP.STEP_3 === step
                          ? FORM_STEP.STEP_4
                          : FORM_STEP.STEP_4 === step
                            ? FORM_STEP.STEP_5
                            : undefined,
                  )
                }
              >
                <IconArrowRight className="w-6 h-6" fill="#fff" />
              </button>
            )}
            {step === FORM_STEP.STEP_5 && (
              <div>
                <div class="flex gap-3 justify-end">
                  <button
                    onClick={handleCreateToggle}
                    class="bg-[#E42220] transition ease-out duration-150 hover:bg-[#e44e20] text-white text-base py-1 px-5 rounded-full"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleNotificationToggle}
                    class="bg-[#37A836] transition ease-out duration-150 hover:bg-[#64a836] text-white text-base py-1 px-5 rounded-full"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            )}
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
    </div>
  )
}

import { STATE_PROCESS } from "../forms/customer-form"
import { IconCheck, IconClose } from "../icons"

export function DataValidation({
  getPopUpStyle,
  handleToggle,
  handleConfirmation,
  state,
}) {
  return (
    <div
      className={`${getPopUpStyle()} z-[3000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <div
        class={`overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div class="relative p-8 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow">
            <button
              type="button"
              onClick={handleToggle}
              class="absolute top-3 end-2.5 transition ease-out duration-150 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 p-1 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="popup-modal"
            >
              <IconClose
                className="w-full text-[#1FBBC2] h-full"
                stroke="#1FBBC2"
                fill="#1FBBC2"
              />
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
              {state === STATE_PROCESS.SUCCESS && (
                <IconCheck className="w-12 text-[#1FBBC2] h-12 my-3 mx-auto" />
              )}

              <h3 class="my-5  text-gray-500 ">
                {state === STATE_PROCESS.SUCCESS &&
                  "¿Estas seguro de agregarlo al cliente?"}
              </h3>
              <div class="flex gap-3 justify-center">
                <button
                  onClick={handleToggle}
                  class="bg-gray-400 transition ease-out duration-150 hover:bg-gray-500 text-white text-base py-1 px-5 rounded-full"
                >
                  Cancelar
                </button>
                {state === STATE_PROCESS.SUCCESS && (
                  <button
                    type="submit"
                    onClick={handleConfirmation}
                    class="bg-[#E42220] transition ease-out duration-150 hover:bg-[#e44e20] text-white text-base py-1 px-5 rounded-full"
                  >
                    Aceptar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

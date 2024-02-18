"use client"
import { useContext } from "react"

import { ZonaContext } from "@/context/zona"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer"
import { HistoryAccordion } from "./customerHistoryAccordion"

export function CustomerCardInfo({ customer }) {
  const { getZona } = useContext(ZonaContext)

  return (
    <>
      <div className="bg-white rounded-l-lg shadow-lg">
        <div
          className="flex flex-col w-full gap-6 p-10 pb-16 animate-fade animate-duration-300"
          key={customer.Codigo}
        >
          <PDFDownloadLink
            document={<PrintClienteHistoria cliente={customer} />}
            fileName={`Historia-${customer.Nombre.replace(/\s/g, "-")}.pdf`}
          >
            <span className="text-[#1FBBC2] transition ease-out duration-150 hover:text-[#1fafc2] font-bold -mr-4">
              Descargar PDF
            </span>
          </PDFDownloadLink>

          <img src="./profile.png" className="w-56 h-auto mx-auto" />
          <div className="grid items-center grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Nombre</strong>
              <span className="leading-5 text-neutral-400">
                {customer.Nombre || "---"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">RIF</strong>
              <span className="text-neutral-400">{customer.Rif || "---"}</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Especialista</strong>
              <span className="text-neutral-400">
                {getZona(customer.Zona)?.descrip || "---"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Telefono</strong>
              <span className="text-neutral-400">
                {customer.Telef || "---"}
              </span>
            </div>
            <div className="flex flex-col col-span-2 gap-1">
              <strong className="text-neutral-800">Correo</strong>
              <span className="leading-5 text-neutral-400">
                {customer.Email || "---"}
              </span>
            </div>
            <div className="flex flex-col col-span-2 gap-1">
              <strong className="text-neutral-800">Dirección</strong>
              <span className="leading-5 text-neutral-400">
                {customer.Direcc || "---"}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <strong className="text-[#1FBBC2]">Historial</strong>
            <div className="flex flex-col items-center w-full">
              {customer.historias.length > 0 ? (
                <div className="w-full my-3">
                  {customer.historias.map((item, index) => (
                    <HistoryAccordion history={item} key={index} />
                  ))}
                </div>
              ) : (
                <span className="my-6 text-neutral-400">
                  No tiene historial
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Create styles to client history
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    /* backgroundColor: "#E4E4E4", */
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1FBBC2",
  },
  textHistory: {
    fontSize: 11,
    flexGrow: 1,
    padding: 10,
  },
  divider: {
    borderBottom: 2,
    borderColor: "#1FBBC2",
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})

// Create Document Component
const PrintClienteHistoria = ({ cliente }) => (
  <Document>
    <Page size="letter" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.headerContainer}>
          <Image src="./optiluz.jpg" style={styles.logo} />
          <Text style={styles.headerText}>OPTILUZ, C.A.</Text>
          <Text style={styles.headerText}>Historia del paciente</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textHistory}>
          <Text>Cliente</Text>
          <Text>Nombre: {cliente.Nombre}</Text>
          <Text>RIF: {cliente.Rif}</Text>
          <Text>Telefono: {cliente.Telef}</Text>
          <Text>Correo: {cliente.Email}</Text>
          <Text>Dirección: {cliente.Direcc}</Text>
          <Text>Historia</Text>
          <View style={styles.divider} />
          {cliente.historias.map((item, index) => (
            <View key={index}>
              <Text>Fecha: {item.fecha}</Text>
              <Text>Edad: {item.edad}</Text>
              <Text>Sexo: {item.sexo}</Text>
              <Text>Ojo Izquierdo</Text>
              <Text>Esfera: {item.OI_Esfera}</Text>
              <Text>Cilindro: {item.OI_Cilindro}</Text>
              <Text>Eje: {item.OI_Eje}</Text>
              <Text>Distancia: {item.OI_Distancia}</Text>
              <Text>Adición: {item.OI_Adicion}</Text>
              <Text>Ojo Derecho</Text>
              <Text>Esfera: {item.OD_Esfera}</Text>
              <Text>Cilindro: {item.OD_Cilindro}</Text>
              <Text>Eje: {item.OD_Eje}</Text>
              <Text>Distancia: {item.OD_Distancia}</Text>
              <Text>Adición: {item.OD_Adicion}</Text>
              <Text>DNP: {item.DNP}</Text>
              <Text>Altura: {item.Altura}</Text>
              <Text>DP: {item.DP}</Text>
              <Text>TM: {item.Tm}</Text>
              <Text>PT: {item.Pt}</Text>
              <Text>Cristales: {item.Cristales}</Text>
              <Text>Montura: {item.Montura}</Text>
              <Text>Color: {item.Color}</Text>
              <View style={styles.divider} />
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
)

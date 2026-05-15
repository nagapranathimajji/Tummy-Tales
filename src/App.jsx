import { useState } from "react"
import { motion } from "framer-motion"

import pdfData from "./data/pdfData"
import Carousel from "./components/Carousel"
import PdfViewerModal from "./components/PdfViewerModal"

export default function App() {
  const [selectedPdf, setSelectedPdf] = useState(null)

  const downloadAll = () => {
    pdfData.forEach((file) => {
      const link = document.createElement("a")
      link.href = file.pdf
      link.download = file.title
      link.click()
    })
  }

  return (
    <div className="min-h-screen bg-[#f6f2e8] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-white rounded-[40px] shadow-2xl overflow-hidden border-[10px] border-neutral-900"
      >
        <div className="bg-[#d9f0dd] p-6 text-center">
          <img
            src="/logo.png"
            className="w-40 mx-auto"
          />

          <h1 className="text-2xl font-bold mt-4 text-neutral-800">
            Tummy Tales
          </h1>

          <p className="text-sm text-neutral-600 mt-2">
            All necessary documents organized in one place.
          </p>
        </div>

        <div className="p-5">
          <Carousel
            items={pdfData}
            onOpen={setSelectedPdf}
          />

          <button
            onClick={downloadAll}
            className="w-full mt-6 bg-[#18b394] hover:bg-[#13977d] transition text-white font-semibold py-4 rounded-2xl"
          >
            Download All Documents
          </button>
        </div>
      </motion.div>

      <PdfViewerModal
        file={selectedPdf}
        onClose={() => setSelectedPdf(null)}
      />
    </div>
  )
}
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
} from "lucide-react"

import pdfData from "./data/pdfData"

export default function App() {
  const [current, setCurrent] = useState(0)

  const item = pdfData[current]

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % pdfData.length)
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? pdfData.length - 1 : prev - 1
    )
  }

  const downloadAll = () => {
    pdfData.forEach((file) => {
      const link = document.createElement("a")
      link.href = file.pdf
      link.download = file.title
      link.click()
    })
  }

  return (
    <div className="min-h-screen bg-[#f8f5ee] px-4 py-5 flex justify-center">
      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="text-center mb-5">

          <div className="bg-gradient-to-b from-[#f8f6ef] to-[#f2ede2] rounded-[32px] px-6 py-5 shadow-sm border border-[#ece6d9]">

            <img
              src="/logo.png"
              className="w-24 mx-auto mb-3"
            />

            <h1 className="text-[2.1rem] font-semibold tracking-tight text-[#232323] leading-none">
              Tummy Tales
            </h1>

            <p className="text-[#6f6a62] text-[15px] mt-3 leading-relaxed">
              Healthy meals. Happy kids.
            </p>

          </div>
        </div>

        {/* PDF CARD */}
        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-[34px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#ece7dc] overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative px-4 pt-4">

              <img
                src={item.thumbnail}
                className="w-full rounded-[28px] object-cover"
              />

              {/* LEFT */}
              <button
                onClick={prevSlide}
                className="absolute left-7 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-lg rounded-full p-2.5 active:scale-95 transition"
              >
                <ChevronLeft
                  size={20}
                  className="text-[#232323]"
                />
              </button>

              {/* RIGHT */}
              <button
                onClick={nextSlide}
                className="absolute right-7 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-lg rounded-full p-2.5 active:scale-95 transition"
              >
                <ChevronRight
                  size={20}
                  className="text-[#232323]"
                />
              </button>

            </div>

            {/* CONTENT */}
            <div className="px-5 pt-4 pb-5">

              <div className="flex items-start justify-between gap-3">

                <div>
                  <h2 className="text-[1.45rem] leading-tight font-semibold text-[#1f1f1f]">
                    {item.title}
                  </h2>

                  <p className="text-sm text-[#7b746b] mt-1">
                    View or download the document instantly
                  </p>
                </div>

                <div className="bg-[#f3efe7] text-[#7d756a] text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap">
                  PDF
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-5">

                {/* VIEW PDF */}
                <a
                  href={item.pdf}
                  target="_blank"
                  className="flex-1"
                >
                  <button className="w-full bg-[#18b394] hover:bg-[#14967d] active:scale-[0.98] transition-all text-white py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 shadow-sm">

                    <Eye size={18} />

                    View PDF

                  </button>
                </a>

                {/* DOWNLOAD */}
                <a
                  href={item.pdf}
                  download
                  className="flex-1"
                >
                  <button className="w-full bg-[#f3f1ec] hover:bg-[#ebe7df] active:scale-[0.98] transition-all text-[#2c2c2c] py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 border border-[#ebe6dd]">

                    <Download size={18} />

                    Download

                  </button>
                </a>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

        {/* DOWNLOAD ALL */}
        <button
          onClick={downloadAll}
          className="w-full mt-5 bg-[#1f1f1f] hover:bg-black active:scale-[0.99] transition-all text-white py-4 rounded-[24px] font-semibold shadow-lg"
        >
          Download All Documents
        </button>

        {/* FUTURE DOCS PLACEHOLDER */}
        <div className="mt-5 text-center text-sm text-[#8a847b] leading-relaxed px-4">

          More documents such as subscription plans and parent FAQs
          will be added soon.

        </div>

      </div>
    </div>
  )
}

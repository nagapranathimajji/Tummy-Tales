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
    <div className="min-h-screen bg-[#f7f4ee] px-5 py-4 flex justify-center">

      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="pt-2 pb-5 text-center">

          <img
            src="/logo.png"
            className="w-36 mx-auto"
          />

          <p className="text-[#6f685f] text-[15px] mt-2 font-medium tracking-tight">
            Fresh meals for school mornings.
          </p>

        </div>

        {/* PDF CARD */}
        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="bg-white rounded-[28px] overflow-hidden border border-[#eee7db] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >

            {/* THUMBNAIL */}
            <div className="relative p-4">

              <img
                src={item.thumbnail}
                className="w-full rounded-[22px] object-cover"
              />

              {/* LEFT */}
              <button
                onClick={prevSlide}
                className="absolute left-7 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md shadow-md rounded-full p-2 transition active:scale-95"
              >
                <ChevronLeft
                  size={18}
                  className="text-[#2c2c2c]"
                />
              </button>

              {/* RIGHT */}
              <button
                onClick={nextSlide}
                className="absolute right-7 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md shadow-md rounded-full p-2 transition active:scale-95"
              >
                <ChevronRight
                  size={18}
                  className="text-[#2c2c2c]"
                />
              </button>

            </div>

            {/* CONTENT */}
            <div className="px-5 pb-5">

              <div className="flex items-start justify-between gap-3">

                <div>

                  <h2 className="text-[1.28rem] leading-tight font-semibold text-[#202020]">
                    {item.title}
                  </h2>

                  <p className="text-[14px] text-[#7b746c] mt-1">
                    View or download instantly
                  </p>

                </div>

                <div className="bg-[#f4efe6] text-[#7d756b] text-[11px] px-3 py-1.5 rounded-full font-medium">
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
                  <button className="w-full bg-[#18b394] hover:bg-[#14957c] transition-all active:scale-[0.98] text-white py-3.5 rounded-[18px] font-medium flex items-center justify-center gap-2 shadow-sm">

                    <Eye size={17} />

                    View PDF

                  </button>
                </a>

                {/* DOWNLOAD */}
                <a
                  href={item.pdf}
                  download
                  className="flex-1"
                >
                  <button className="w-full bg-[#f3f1eb] hover:bg-[#ebe6dc] transition-all active:scale-[0.98] text-[#2a2a2a] py-3.5 rounded-[18px] font-medium flex items-center justify-center gap-2 border border-[#ebe5db]">

                    <Download size={17} />

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
          className="w-full mt-5 bg-[#1f1f1f] hover:bg-black transition-all active:scale-[0.99] text-white py-4 rounded-[20px] font-semibold shadow-lg"
        >
          Download All Documents
        </button>

      </div>

    </div>
  )
}

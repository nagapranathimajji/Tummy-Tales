import { useState } from "react"
import { motion } from "framer-motion"
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

  return (
    <div className="min-h-screen bg-[#f8f5ee] flex justify-center px-4 py-6">
      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="text-center mb-6">
          <img
            src="/logo.png"
            className="w-32 mx-auto mb-3"
          />

          <h1 className="text-3xl font-bold text-neutral-800">
            Tummy Tales
          </h1>

          <p className="text-neutral-500 text-sm mt-2">
            All meal documents in one place
          </p>
        </div>

        {/* MAIN CARD */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-neutral-200"
        >

          {/* THUMBNAIL */}
          <div className="relative p-4">

            <img
              src={item.thumbnail}
              className="w-full rounded-3xl object-cover"
            />

            {/* LEFT ARROW */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-full p-2"
            >
              <ChevronLeft size={24} />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-full p-2"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* CONTENT */}
          <div className="px-5 pb-5">

            <h2 className="text-xl font-semibold text-neutral-800">
              {item.title}
            </h2>

            <div className="flex gap-3 mt-5">

              {/* VIEW PDF */}
              <a
                href={item.pdf}
                target="_blank"
                className="flex-1"
              >
                <button className="w-full bg-[#18b394] hover:bg-[#13977d] transition text-white py-3 rounded-2xl font-medium flex items-center justify-center gap-2">
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
                <button className="w-full bg-neutral-100 hover:bg-neutral-200 transition text-neutral-800 py-3 rounded-2xl font-medium flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download
                </button>
              </a>

            </div>

          </div>
        </motion.div>

        {/* DOWNLOAD ALL */}
        <button
          onClick={() => {
            pdfData.forEach((file) => {
              const link = document.createElement("a")
              link.href = file.pdf
              link.download = file.title
              link.click()
            })
          }}
          className="w-full mt-6 bg-black hover:bg-neutral-800 transition text-white py-4 rounded-2xl font-semibold shadow-lg"
        >
          Download All Documents
        </button>

      </div>
    </div>
  )
}

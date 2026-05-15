import { Download } from "lucide-react"

export default function PdfCard({ item, onOpen }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-neutral-200 p-3 w-full">
      <img
        src={item.thumbnail}
        className="rounded-2xl w-full cursor-pointer"
        onClick={() => onOpen(item)}
      />

      <div className="flex justify-between items-center mt-3">
        <div>
          <p className="font-semibold text-sm text-neutral-800">
            {item.title}
          </p>

          <span className="bg-neutral-100 text-xs px-2 py-1 rounded-lg mt-2 inline-block">
            PDF
          </span>
        </div>

        <a href={item.pdf} download>
          <button className="bg-neutral-100 hover:bg-orange-100 transition p-3 rounded-full">
            <Download size={18} />
          </button>
        </a>
      </div>
    </div>
  )
}
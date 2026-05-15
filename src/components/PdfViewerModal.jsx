import { X } from "lucide-react"

export default function PdfViewerModal({ file, onClose }) {
  if (!file) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex flex-col">
      <div className="flex justify-between items-center p-4 bg-white">
        <h2 className="font-semibold text-sm">{file.title}</h2>

        <button onClick={onClose}>
          <X />
        </button>
      </div>

      <iframe
        src={file.pdf}
        className="w-full flex-1"
      />
    </div>
  )
}
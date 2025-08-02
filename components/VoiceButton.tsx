import { Mic } from 'lucide-react'

export function VoiceButton({ onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`p-4 mt-4 rounded-full shadow-xl transition duration-300 ${
        active ? 'bg-neon animate-pulse' : 'bg-peach'
      }`}
    >
      <Mic className="w-6 h-6" />
    </button>
  )
}

import { ChatBubble } from './ChatBubble'
import { VoiceButton } from './VoiceButton'

export function AssistantPanel({ messages, onMicClick, listening }) {
  return (
    <div className="min-h-screen bg-bgSoft text-white flex flex-col items-center p-6">
      <h1 className="text-neon text-3xl font-display mb-4">PEACH Assistant 🍑</h1>
      <div className="w-full max-w-md space-y-4 flex-1">
        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} text={msg.text} />
        ))}
      </div>
      <VoiceButton onClick={onMicClick} active={listening} />
    </div>
  )
}

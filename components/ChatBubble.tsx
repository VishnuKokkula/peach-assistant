type ChatBubbleProps = {
  role: string
  text: string
}

export function ChatBubble({ role, text }: ChatBubbleProps) {
  const isUser = role === 'user'
  return (
    <div
      className={`p-4 rounded-2xl max-w-xs text-sm shadow-lg ${
        isUser
          ? 'bg-peach text-black self-end ml-auto'
          : 'bg-neon text-black self-start mr-auto'
      }`}
    >
      {text}
    </div>
  )
}

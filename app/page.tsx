'use client'
import { useState } from 'react'
import { AssistantPanel } from '@/components/AssistantPanel'
import { askPeach } from '@/lib/openai'
import { speak } from '@/lib/speech'

export default function Home() {
  const [messages, setMessages] = useState<{ role: string, text: string }[]>([])
  const [listening, setListening] = useState(false)

  const handleVoiceInput = () => {
    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.lang = 'en-US'
    recognition.start()
    setListening(true)

    recognition.onresult = async (event: any) => {
      const input = event.results[0][0].transcript
      const newMessages = [...messages, { role: 'user', text: input }]
      setMessages(newMessages)

      const reply = await askPeach(input)
      speak(reply)
      setMessages([...newMessages, { role: 'assistant', text: reply }])
      setListening(false)
    }
  }

  return <AssistantPanel messages={messages} onMicClick={handleVoiceInput} listening={listening} />
}

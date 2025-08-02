export default async function handler(req, res) {
  const { prompt } = req.body

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are PEACH, an intelligent assistant for VishnuTeja. Answer helpfully and professionally.' },
        { role: 'user', content: prompt }
      ]
    })
  })

  const json = await response.json()
  res.status(200).json({ result: json.choices[0].message.content })
}

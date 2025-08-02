export async function askPeach(prompt: string): Promise<string> {
  const res = await fetch('/api/peach', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  })

  const data = await res.json()
  return data.result
}

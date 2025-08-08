export async function generateEffectDescription(effectName: string): Promise<string> {
  const response = await fetch('http://localhost:3001/api/generate-effect-description', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ effectName }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch effect description');
  }

  const data = await response.json();
  return data.description;
}

import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateRecommendations({ styleDNA, mood, occasion }) {
  if (!process.env.OPENAI_API_KEY) {
    return {
      styleDNA: styleDNA || 'Minimal + Casual + Cool tones',
      suggestions: [
        `Structured blazer + straight denim for ${occasion}`,
        `Soft monochrome knit set to feel ${mood}`,
      ],
      colors: ['navy', 'slate', 'ice blue'],
    };
  }

  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: `You are an AI stylist. styleDNA=${styleDNA}; mood=${mood}; occasion=${occasion}. Return JSON with suggestions, colors and explanation.`,
  });

  return { raw: response.output_text };
}

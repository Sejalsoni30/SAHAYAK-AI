import { supabase } from '../config/supabase.js';
import axios from 'axios';

export const handleChatMessage = async (req, res) => {
  try {
    const { message, language = 'hi' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message content is required.' });
    }

    let ragContext = [];
    let sources = [];
    
    try {
      const pyServiceUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000';
      const ragResponse = await axios.post(`${pyServiceUrl}/api/rag/search`, { query: message });
      ragContext = ragResponse.data.context || [];
      sources = ragResponse.data.sources || [];
    } catch (err) {
      console.warn('Python AI Service offline, falling back to mock context.');
    }

    const reply = language === 'hi' 
      ? `नमस्ते! आपके प्रश्न "${message}" के आधार पर, यह योजना कृषि एवं कल्याण मंत्रालय के अंतर्गत आती है। आवश्यक दस्तावेज: आधार कार्ड और निवास प्रमाण पत्र।`
      : `Hello! Based on your query "${message}", this scheme falls under public welfare guidelines. Required documents: Aadhaar card and residence proof.`;

    res.json({
      reply,
      language,
      sources: sources.length > 0 ? sources : [{ title: 'Official Welfare Guidelines Portal 2026', url: 'https://example.gov.in' }]
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal Server Error during agent reasoning.' });
  }
};
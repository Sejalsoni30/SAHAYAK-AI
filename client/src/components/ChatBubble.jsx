import React from 'react';
import { Bot, User, ShieldCheck } from 'lucide-react';

export default function ChatBubble({ sender, text, sources }) {
  const isUser = sender === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${isUser ? 'bg-blue-600 text-white' : 'bg-orange-500 text-white'}`}>
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      <div className={`flex flex-col max-w-[75%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
          isUser 
            ? 'bg-blue-600 text-white rounded-tr-none' 
            : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
        }`}>
          {text}
        </div>
        {sources && sources.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 items-center">
            {sources.map((src, idx) => (
              <a 
                key={idx} 
                href={src.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1 rounded-full border border-orange-200 transition"
              >
                <ShieldCheck size={14} />
                <span>Source: {src.title}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
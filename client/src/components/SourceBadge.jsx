import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function SourceBadge({ title, url }) {
  return (
    <a 
      href={url || '#'} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1 rounded-full border border-orange-200 transition shadow-xs"
    >
      <ShieldCheck size={14} className="text-orange-600" />
      <span>Source: {title}</span>
      <ExternalLink size={12} className="opacity-70" />
    </a>
  );
}
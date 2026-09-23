import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SchemeCard({ scheme, onSelect }) {
  return (
    <article className="scheme-item">
      <h3 className="scheme-title">{scheme.title}</h3>
      <p className="scheme-benefits">{scheme.benefits}</p>

      <div className="scheme-meta-row">
        <a
          href={scheme.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="scheme-link"
        >
          Official Guidelines <span>↗</span>
        </a>
        <span className="scheme-tag">{scheme.category || 'Welfare Scheme'}</span>
      </div>

      <div className="scheme-footer">
        <Link
          to={`/schemes/${scheme.id}`}
          onClick={onSelect ? () => onSelect(scheme) : undefined}
          className="scheme-eligibility"
        >
          <span>Check Eligibility</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
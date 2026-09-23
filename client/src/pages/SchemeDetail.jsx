import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export default function SchemeDetail() {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/schemes/${id}`)
      .then(res => setScheme(res.data.scheme))
      .catch(err => console.error(err));
  }, [id]);

  if (!scheme) return <div className="scheme-detail-loading">Loading scheme details...</div>;

  return (
    <div className="page-shell scheme-detail-page">
      <div className="page-frame detail-frame">
        <Link to="/schemes" className="detail-back-link">
          <ArrowLeft size={16} /> Back to Directory
        </Link>

        <div className="detail-content">
          <div className="detail-category">{scheme.category}</div>
          <h1 className="detail-title">{scheme.title}</h1>

          <div className="detail-section">
            <a href={scheme.source_url} target="_blank" rel="noopener noreferrer" className="detail-guidelines">
              <ShieldCheck size={14} /> Official Guidelines
            </a>
          </div>

          <div className="detail-section">
            <h3 className="detail-heading">Benefits & Overview</h3>
            <p className="detail-copy">{scheme.benefits}</p>
          </div>

          <div className="detail-section">
            <h3 className="detail-heading">Eligibility Rules</h3>
            <div className="rule-list">
              {(scheme.eligibility_rules || []).map((rule, index) => (
                <div key={index} className="rule-item">{rule}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
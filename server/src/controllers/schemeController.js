import { supabase } from '../config/supabase.js';

const fallbackSchemes = [
  {
    id: 'pm-kisan',
    title: 'PM-KISAN',
    category: 'Agriculture',
    benefits: 'Direct financial assistance to small and marginal farmer families across eligible households.',
    source_url: 'https://pmkisan.gov.in/',
    eligibility_rules: [
      'Must be a small or marginal farmer family',
      'Must maintain valid landholding records as per state norms',
      'Annual household income and residency criteria must be met'
    ]
  },
  {
    id: 'pmay',
    title: 'Pradhan Mantri Awas Yojana',
    category: 'Housing',
    benefits: 'Affordable housing support for eligible rural and urban families with subsidized construction assistance.',
    source_url: 'https://pmay-urban.gov.in/',
    eligibility_rules: [
      'Income and household category eligibility must be verified',
      'Residence and documentation requirements vary by state',
      'Applicants must not own a pucca house in their name'
    ]
  },
  {
    id: 'startup-india',
    title: 'Startup India Seed Fund',
    category: 'Business',
    benefits: 'Seed capital support for early-stage startups with scalable innovation and employment potential.',
    source_url: 'https://www.startupindia.gov.in/',
    eligibility_rules: [
      'Startup must be incorporated as a legal entity',
      'Innovative business model and growth potential required',
      'Application must align with recognized startup criteria'
    ]
  }
];

export const getAllSchemes = async (req, res) => {
  if (!supabase) {
    return res.json({ schemes: fallbackSchemes });
  }

  try {
    const { data, error } = await supabase
      .from('schemes')
      .select('id, title, category, benefits, source_url, eligibility_rules');

    if (error) throw error;
    res.json({ schemes: data?.length ? data : fallbackSchemes });
  } catch (error) {
    console.error('Fetch schemes error:', error);
    res.status(500).json({ error: error.message, schemes: fallbackSchemes });
  }
};

export const getSchemeById = async (req, res) => {
  const { id } = req.params;

  if (!supabase) {
    const scheme = fallbackSchemes.find((item) => item.id === id);
    if (!scheme) {
      return res.status(404).json({ error: 'Scheme not found' });
    }
    return res.json({ scheme });
  }

  try {
    const { data, error } = await supabase
      .from('schemes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json({ scheme: data || fallbackSchemes.find((item) => item.id === id) });
  } catch (error) {
    console.error('Fetch scheme error:', error);
    const fallback = fallbackSchemes.find((item) => item.id === id);
    if (!fallback) {
      return res.status(404).json({ error: 'Scheme not found' });
    }
    res.status(500).json({ error: error.message, scheme: fallback });
  }
};
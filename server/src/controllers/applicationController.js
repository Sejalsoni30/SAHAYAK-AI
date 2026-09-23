import { supabase } from '../config/supabase.js';

const fallbackDrafts = [
  {
    id: 'draft-1',
    user_id: 'demo-user-1',
    scheme_id: 'pm-kisan',
    status: 'Draft',
    created_at: new Date().toISOString(),
    form_data: { scheme: 'PM-KISAN', applicantName: 'Citizen' },
    schemes: { title: 'PM-KISAN', category: 'Agriculture' }
  }
];

export const createApplicationDraft = async (req, res) => {
  const { schemeId, formData } = req.body;
  const userId = req.user?.id || 'demo-user-1';

  if (!supabase) {
    const draft = {
      id: `draft-${Date.now()}`,
      user_id: userId,
      scheme_id: schemeId || 'pm-kisan',
      status: 'Draft',
      created_at: new Date().toISOString(),
      form_data: formData || {},
      schemes: { title: 'PM-KISAN', category: 'Agriculture' }
    };
    return res.json({ message: 'Application draft saved successfully', application: draft });
  }

  try {
    const { data, error } = await supabase
      .from('applications')
      .insert([{ user_id: userId, scheme_id: schemeId, form_data: formData, status: 'Draft' }])
      .select()
      .single();

    if (error) throw error;
    res.json({ message: 'Application draft saved successfully', application: data });
  } catch (error) {
    console.error('Application creation error:', error);
    res.status(500).json({ error: error.message || 'Unable to save application draft', application: fallbackDrafts[0] });
  }
};

export const getUserApplications = async (req, res) => {
  const userId = req.user?.id || 'demo-user-1';

  if (!supabase) {
    return res.json({ applications: fallbackDrafts.filter((item) => item.user_id === userId) });
  }

  try {
    const { data, error } = await supabase
      .from('applications')
      .select('*, schemes(title, category)')
      .eq('user_id', userId);

    if (error) throw error;
    res.json({ applications: data || fallbackDrafts.filter((item) => item.user_id === userId) });
  } catch (error) {
    console.error('Fetch applications error:', error);
    res.status(500).json({
      error: error.message || 'Unable to fetch applications',
      applications: fallbackDrafts.filter((item) => item.user_id === userId)
    });
  }
};
import { supabase } from '../config/supabase.js';
import jwt from 'jsonwebtoken';

export const registerOrLogin = async (req, res) => {
  try {
    const { phone, fullName, preferredLanguage } = req.body;
    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required.' });
    }

    let user = null;

    if (supabase) {
      let { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('phone', phone)
        .maybeSingle();

      if (error) throw error;
      user = data;

      if (!user) {
        const { data: newUser, error: insertError } = await supabase
          .from('profiles')
          .insert([
            {
              phone,
              full_name: fullName || 'Citizen',
              preferred_language: preferredLanguage || 'hi'
            }
          ])
          .select()
          .single();

        if (insertError) throw insertError;
        user = newUser;
      }
    } else {
      user = {
        id: 'demo-user-1',
        phone,
        full_name: fullName || 'Citizen',
        preferred_language: preferredLanguage || 'hi'
      };
    }

    const token = jwt.sign({ id: user.id, phone: user.phone }, process.env.JWT_SECRET || 'fallback_secret', {
      expiresIn: '7d'
    });

    res.json({
      message: 'Authentication successful',
      token,
      user: {
        id: user.id,
        phone: user.phone,
        full_name: user.full_name || user.fullName || 'Citizen',
        preferred_language: user.preferred_language || 'hi'
      }
    });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: error.message || 'Authentication failed' });
  }
};
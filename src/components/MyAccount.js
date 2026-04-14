import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Avatar, Paper, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({ name: 'Yash Naik', email: 'yash@mealsontheway.com', phone: '+91 98765 43210', dob: '1999-08-15' });
  const [draft, setDraft] = useState({ ...profile });

  const primary = '#ff6d00';

  return (
    <Box sx={{ bgcolor: '#f1f3f6', flex: 1, py: 6 }}>
      <Container maxWidth="md">
        {/* Back */}
        <Button onClick={() => navigate(-1)} sx={{ mb: 3, color: '#666', textTransform: 'none', fontWeight: 700 }}>← Back</Button>

        <Paper elevation={0} sx={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
          {/* Banner */}
          <Box sx={{ height: 120, background: 'linear-gradient(135deg, #ff6d00 0%, #ffb300 60%, #2c1a06 100%)' }} />

          <Box sx={{ px: 5, pb: 5, pt: 0 }}>
            {/* Avatar row */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 3, mt: '-44px', mb: 3 }}>
              <Avatar sx={{ width: 88, height: 88, fontSize: '2rem', fontWeight: 900, bgcolor: primary, border: '4px solid #fff', boxShadow: '0 4px 20px rgba(255,109,0,0.3)' }}>
                {profile.name.charAt(0)}
              </Avatar>
              <Box sx={{ flex: 1, pb: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: '#2c1a06' }}>{profile.name}</Typography>
                <Typography variant="body2" color="text.secondary">{profile.email}</Typography>
              </Box>
              <Button variant="contained" startIcon={<EditIcon />} onClick={() => setEditMode(!editMode)}
                sx={{ mb: 1, borderRadius: '10px', fontWeight: 700, textTransform: 'none', bgcolor: primary, '&:hover': { bgcolor: '#e65100' } }}>
                {editMode ? 'Editing…' : 'Edit Profile'}
              </Button>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <Grid container spacing={3}>
              {[{ label: 'Full Name', key: 'name', type: 'text' }, { label: 'Email Address', key: 'email', type: 'email' }, { label: 'Phone Number', key: 'phone', type: 'tel' }, { label: 'Date of Birth', key: 'dob', type: 'date' }].map(f => (
                <Grid item xs={12} sm={6} key={f.key}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#888', textTransform: 'uppercase', mb: 0.5, display: 'block' }}>{f.label}</Typography>
                  {editMode
                    ? <TextField fullWidth type={f.type} value={draft[f.key]} onChange={e => setDraft({ ...draft, [f.key]: e.target.value })} size="small"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px', '&.Mui-focused fieldset': { borderColor: primary } } }} />
                    : <Typography sx={{ fontWeight: 600, color: '#2c1a06' }}>{profile[f.key]}</Typography>}
                </Grid>
              ))}

              {editMode && (
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    <Button variant="contained" onClick={() => { setProfile({ ...draft }); setEditMode(false); }}
                      sx={{ borderRadius: '10px', bgcolor: primary, fontWeight: 700, textTransform: 'none', px: 4, '&:hover': { bgcolor: '#e65100' } }}>Save Changes</Button>
                    <Button variant="outlined" onClick={() => { setDraft({ ...profile }); setEditMode(false); }}
                      sx={{ borderRadius: '10px', fontWeight: 700, textTransform: 'none', px: 4, borderColor: '#e0e0e0', color: '#666' }}>Cancel</Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default MyAccount;

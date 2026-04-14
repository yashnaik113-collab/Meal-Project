import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Accordion, AccordionSummary, AccordionDetails, Button, TextField, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'How do I track my order?', a: 'Once your order is placed, you can track it in real-time from the "My Orders" section in your account. You will also receive SMS updates at every step.' },
  { q: 'Can I cancel or modify my order?', a: 'Orders can be cancelled or modified within 5 minutes of placing them. After that, the order is sent to the chef and changes cannot be made.' },
  { q: 'How does CashBack work?', a: 'You earn cashback on every order. The cashback is credited to your account within 24 hours of delivery and can be used on your next order.' },
  { q: 'What payment methods are accepted?', a: 'We accept UPI, credit/debit cards, net banking, and MealsOnTheWay Wallet. All transactions are secured with bank-level encryption.' },
  { q: 'How do I become a home chef on MealsOnTheWay?', a: 'Visit the "Join Us" page and fill out the chef registration form. Our team will review your application and get back within 48 hours.' },
];

const Help = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const primary = '#ff6d00';

  return (
    <Box sx={{ bgcolor: '#f1f3f6', flex: 1, py: 6 }}>
      <Container maxWidth="md">
        <Button onClick={() => navigate(-1)} sx={{ mb: 3, color: '#666', textTransform: 'none', fontWeight: 700 }}>← Back</Button>

        {/* Hero */}
        <Paper elevation={0} sx={{ borderRadius: '20px', mb: 4, p: 5, textAlign: 'center', background: 'linear-gradient(135deg, #ff6d00 0%, #ffb300 100%)', boxShadow: '0 4px 30px rgba(255,109,0,0.25)' }}>
          <HeadsetMicIcon sx={{ fontSize: 56, color: '#fff', mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff', mb: 1 }}>How can we help?</Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>We're here 24/7 to help you with anything</Typography>
        </Paper>

        {/* Contact Options */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[{ icon: <HeadsetMicIcon sx={{ fontSize: 32, color: primary }} />, label: 'Call Us', sub: '+91-9665 888 488', btn: 'Call Now' }, { icon: <EmailIcon sx={{ fontSize: 32, color: primary }} />, label: 'Email Us', sub: 'help@mealsontheway.com', btn: 'Send Email' }, { icon: <ChatIcon sx={{ fontSize: 32, color: primary }} />, label: 'Live Chat', sub: 'Avg response: 2 mins', btn: 'Start Chat' }].map(c => (
            <Grid item xs={12} sm={4} key={c.label}>
              <Paper elevation={0} sx={{ borderRadius: '16px', p: 3, textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 8px 30px rgba(255,109,0,0.15)' } }}>
                {c.icon}
                <Typography sx={{ fontWeight: 800, mt: 1, color: '#2c1a06' }}>{c.label}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>{c.sub}</Typography>
                <Button variant="outlined" size="small" sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 700, borderColor: primary, color: primary, '&:hover': { bgcolor: '#fff3e0', borderColor: primary } }}>{c.btn}</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* FAQs */}
        <Paper elevation={0} sx={{ borderRadius: '20px', p: 4, mb: 4, boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
          <Typography variant="h6" sx={{ fontWeight: 900, mb: 3, color: '#2c1a06' }}>Frequently Asked Questions</Typography>
          {faqs.map((faq, i) => (
            <Accordion key={i} expanded={expanded === i} onChange={() => setExpanded(expanded === i ? false : i)}
              elevation={0} sx={{ border: '1px solid #f0f0f0', borderRadius: '12px !important', mb: 1, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: primary }} />}>
                <Typography sx={{ fontWeight: 700, color: '#2c1a06', fontSize: '14px' }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>

        {/* Support Ticket */}
        <Paper elevation={0} sx={{ borderRadius: '20px', p: 4, boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
          <Typography variant="h6" sx={{ fontWeight: 900, mb: 3, color: '#2c1a06' }}>Raise a Support Ticket</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Your Name" size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px', '&.Mui-focused fieldset': { borderColor: primary } } }} /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Email" size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px', '&.Mui-focused fieldset': { borderColor: primary } } }} /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Subject" size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px', '&.Mui-focused fieldset': { borderColor: primary } } }} /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Describe your issue" multiline rows={4} sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px', '&.Mui-focused fieldset': { borderColor: primary } } }} /></Grid>
            <Grid item xs={12}><Button variant="contained" sx={{ borderRadius: '10px', bgcolor: primary, fontWeight: 700, textTransform: 'none', px: 5, py: 1.5, '&:hover': { bgcolor: '#e65100' } }}>Submit Ticket</Button></Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Help;

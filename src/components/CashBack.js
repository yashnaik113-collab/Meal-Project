import React from 'react';
import { Box, Container, Typography, Paper, Grid, Button, Chip, Divider } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useNavigate } from 'react-router-dom';

const history = [
  { label: 'Order #MOW1042 Cashback', date: 'Apr 12, 2026', amount: '+₹28', type: 'credit' },
  { label: 'Order #MOW1038 Cashback', date: 'Apr 10, 2026', amount: '+₹20', type: 'credit' },
  { label: 'Redeemed on Order #MOW1029', date: 'Apr 5, 2026', amount: '-₹50', type: 'debit' },
  { label: 'Referral Bonus', date: 'Mar 28, 2026', amount: '+₹100', type: 'credit' },
];

const CashBack = () => {
  const navigate = useNavigate();
  const primary = '#ff6d00';

  return (
    <Box sx={{ bgcolor: '#f1f3f6', flex: 1, py: 6 }}>
      <Container maxWidth="md">
        <Button onClick={() => navigate(-1)} sx={{ mb: 3, color: '#666', textTransform: 'none', fontWeight: 700 }}>← Back</Button>

        {/* Balance Card */}
        <Paper elevation={0} sx={{ borderRadius: '20px', mb: 4, overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
          <Box sx={{ background: 'linear-gradient(135deg, #ff6d00 0%, #ffb300 100%)', p: 5, display: 'flex', alignItems: 'center', gap: 3 }}>
            <MonetizationOnIcon sx={{ fontSize: 64, color: '#fff', opacity: 0.9 }} />
            <Box>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total CashBack Balance</Typography>
              <Typography variant="h2" sx={{ fontWeight: 900, color: '#fff', lineHeight: 1 }}>₹98</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.5 }}>Available to redeem on your next order</Typography>
            </Box>
          </Box>

          {/* Refer Banner */}
          <Box sx={{ p: 3, bgcolor: '#fff8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <CardGiftcardIcon sx={{ color: primary, fontSize: 32 }} />
              <Box>
                <Typography sx={{ fontWeight: 800, fontSize: '15px', color: '#2c1a06' }}>Refer & Earn ₹200!</Typography>
                <Typography variant="caption" color="text.secondary">Invite friends and earn cashback on every referral</Typography>
              </Box>
            </Box>
            <Button variant="contained" sx={{ borderRadius: '10px', bgcolor: primary, fontWeight: 700, textTransform: 'none', flexShrink: 0, '&:hover': { bgcolor: '#e65100' } }}>
              Refer Now →
            </Button>
          </Box>
        </Paper>

        {/* History */}
        <Paper elevation={0} sx={{ borderRadius: '20px', p: 4, boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
          <Typography variant="h6" sx={{ fontWeight: 900, mb: 3, color: '#2c1a06' }}>Transaction History</Typography>
          {history.map((h, i) => (
            <Box key={i}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#2c1a06' }}>{h.label}</Typography>
                  <Typography variant="caption" color="text.secondary">{h.date}</Typography>
                </Box>
                <Chip label={h.amount} size="small"
                  sx={{ fontWeight: 900, fontSize: '13px', bgcolor: h.type === 'credit' ? '#e8f5e9' : '#fce4ec', color: h.type === 'credit' ? '#2e7d32' : '#c62828' }} />
              </Box>
              {i < history.length - 1 && <Divider />}
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default CashBack;

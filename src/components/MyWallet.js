import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Button, TextField, Divider, Chip } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const txns = [
  { label: 'Added via UPI', date: 'Apr 13, 2026', amount: '+₹500', type: 'credit' },
  { label: 'Order #MOW1042 Payment', date: 'Apr 12, 2026', amount: '-₹280', type: 'debit' },
  { label: 'Added via Net Banking', date: 'Apr 9, 2026', amount: '+₹1000', type: 'credit' },
  { label: 'Order #MOW1038 Payment', date: 'Apr 10, 2026', amount: '-₹195', type: 'debit' },
  { label: 'Referral Bonus Added', date: 'Mar 28, 2026', amount: '+₹100', type: 'credit' },
];

const quickAmounts = [100, 200, 500, 1000];

const MyWallet = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const primary = '#ff6d00';

  return (
    <Box sx={{ bgcolor: '#f1f3f6', flex: 1, py: 6 }}>
      <Container maxWidth="md">
        <Button onClick={() => navigate(-1)} sx={{ mb: 3, color: '#666', textTransform: 'none', fontWeight: 700 }}>← Back</Button>

        {/* Balance + Add Money */}
        <Paper elevation={0} sx={{ borderRadius: '20px', mb: 4, overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
          <Box sx={{ background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 60%, #5c6bc0 100%)', p: 5, display: 'flex', alignItems: 'center', gap: 3 }}>
            <AccountBalanceWalletIcon sx={{ fontSize: 64, color: '#fff', opacity: 0.9 }} />
            <Box>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Wallet Balance</Typography>
              <Typography variant="h2" sx={{ fontWeight: 900, color: '#fff', lineHeight: 1 }}>₹1,125</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.5 }}>Use this balance for faster checkout</Typography>
            </Box>
          </Box>

          {/* Add Money */}
          <Box sx={{ p: 4 }}>
            <Typography sx={{ fontWeight: 800, mb: 2, color: '#2c1a06' }}>Add Money</Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
              {quickAmounts.map(q => (
                <Button key={q} variant="outlined" onClick={() => setAmount(String(q))}
                  sx={{ borderRadius: '10px', fontWeight: 700, textTransform: 'none', borderColor: amount === String(q) ? primary : '#e0e0e0', color: amount === String(q) ? primary : '#666', bgcolor: amount === String(q) ? '#fff3e0' : 'transparent' }}>
                  ₹{q}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                placeholder="Enter custom amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                size="small"
                type="number"
                sx={{ flex: 1, '& .MuiOutlinedInput-root': { borderRadius: '10px', '&.Mui-focused fieldset': { borderColor: primary } } }}
                InputProps={{ startAdornment: <Typography sx={{ mr: 0.5, fontWeight: 700 }}>₹</Typography> }}
              />
              <Button variant="contained" startIcon={<AddIcon />}
                sx={{ borderRadius: '10px', bgcolor: primary, fontWeight: 700, textTransform: 'none', px: 4, '&:hover': { bgcolor: '#e65100' } }}>
                Add Money
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Transaction History */}
        <Paper elevation={0} sx={{ borderRadius: '20px', p: 4, boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
          <Typography variant="h6" sx={{ fontWeight: 900, mb: 3, color: '#2c1a06' }}>Transaction History</Typography>
          {txns.map((t, i) => (
            <Box key={i}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#2c1a06' }}>{t.label}</Typography>
                  <Typography variant="caption" color="text.secondary">{t.date}</Typography>
                </Box>
                <Chip label={t.amount} size="small"
                  sx={{ fontWeight: 900, fontSize: '13px', bgcolor: t.type === 'credit' ? '#e8f5e9' : '#fce4ec', color: t.type === 'credit' ? '#2e7d32' : '#c62828' }} />
              </Box>
              {i < txns.length - 1 && <Divider />}
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default MyWallet;

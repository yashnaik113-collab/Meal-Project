import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Chip, Button, Divider, Tabs, Tab } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';

const allOrders = [
  { id: '#MOW1042', date: 'Apr 12, 2026', items: 'Special Thali × 2', total: '₹560', status: 'Delivered', icon: <CheckCircleIcon sx={{ fontSize: 14 }} />, color: '#2e7d32', bg: '#e8f5e9' },
  { id: '#MOW1038', date: 'Apr 10, 2026', items: 'Jain Thali × 1, Rice Combo × 1', total: '₹390', status: 'Delivered', icon: <CheckCircleIcon sx={{ fontSize: 14 }} />, color: '#2e7d32', bg: '#e8f5e9' },
  { id: '#MOW1029', date: 'Apr 5, 2026', items: 'Protein Meal × 3', total: '₹720', status: 'Delivered', icon: <CheckCircleIcon sx={{ fontSize: 14 }} />, color: '#2e7d32', bg: '#e8f5e9' },
  { id: '#MOW1055', date: 'Apr 14, 2026', items: 'Deluxe Thali × 1', total: '₹320', status: 'On the Way', icon: <LocalShippingIcon sx={{ fontSize: 14 }} />, color: '#1565c0', bg: '#e3f2fd' },
  { id: '#MOW1060', date: 'Apr 14, 2026', items: 'Healthy Combo × 2', total: '₹480', status: 'Preparing', icon: <AccessTimeIcon sx={{ fontSize: 14 }} />, color: '#e65100', bg: '#fff3e0' },
];

const MyOrders = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const primary = '#ff6d00';

  const filtered = tab === 0 ? allOrders : tab === 1 ? allOrders.filter(o => o.status !== 'Delivered') : allOrders.filter(o => o.status === 'Delivered');

  return (
    <Box sx={{ bgcolor: '#f1f3f6', flex: 1, py: 6 }}>
      <Container maxWidth="md">
        <Button onClick={() => navigate(-1)} sx={{ mb: 3, color: '#666', textTransform: 'none', fontWeight: 700 }}>← Back</Button>

        <Paper elevation={0} sx={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
          {/* Header */}
          <Box sx={{ background: 'linear-gradient(135deg, #ff6d00 0%, #ffb300 100%)', p: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: '#fff' }}>My Orders</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.5 }}>{allOrders.length} orders placed so far</Typography>
          </Box>

          {/* Tabs */}
          <Tabs value={tab} onChange={(_, v) => setTab(v)} TabIndicatorProps={{ style: { backgroundColor: primary, height: 3 } }} sx={{ px: 2, borderBottom: '1px solid #f0f0f0' }}>
            {['All Orders', 'Active', 'Past'].map((t, i) => (
              <Tab key={t} label={t} sx={{ fontWeight: 700, textTransform: 'none', fontSize: '13px', color: tab === i ? primary : '#666', minHeight: 52 }} />
            ))}
          </Tabs>

          {/* Order List */}
          <Box sx={{ p: 4 }}>
            {filtered.length === 0
              ? <Typography color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>No orders found.</Typography>
              : filtered.map((order, i) => (
                <Box key={order.id}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2.5 }}>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                        <Typography sx={{ fontWeight: 800, fontSize: '15px', color: '#2c1a06' }}>{order.id}</Typography>
                        <Chip label={order.status} size="small" icon={order.icon}
                          sx={{ bgcolor: order.bg, color: order.color, fontWeight: 700, fontSize: '11px', height: 22, '& .MuiChip-icon': { color: order.color } }} />
                      </Box>
                      <Typography variant="body2" color="text.secondary">{order.items}</Typography>
                      <Typography variant="caption" color="text.secondary">{order.date}</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography sx={{ fontWeight: 900, color: primary, fontSize: '17px' }}>{order.total}</Typography>
                      <Button size="small" variant="outlined"
                        sx={{ mt: 0.5, textTransform: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: 700, borderColor: '#e0e0e0', color: '#666', '&:hover': { borderColor: primary, color: primary } }}>
                        Reorder
                      </Button>
                    </Box>
                  </Box>
                  {i < filtered.length - 1 && <Divider />}
                </Box>
              ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default MyOrders;

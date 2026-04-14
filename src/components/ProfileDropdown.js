import React from 'react';
import { useNavigate } from 'react-router-dom';

/* ── SVG Icon Components matching screenshot style ── */
const IconLines = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="15" y2="18"/>
  </svg>
);
const IconAddress = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconGift = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);
const IconWallet = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <path d="M16 11h2"/>
  </svg>
);
const IconHelp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4"/>
    <circle cx="12" cy="17" r=".5" fill="#444"/>
  </svg>
);
const IconCart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);
const IconLogout = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

/* ── Simple QR Code SVG (decorative) ── */
const QRCode = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" style={{ display: 'block' }}>
    {/* Top-left finder */}
    <rect x="2" y="2" width="18" height="18" rx="2" fill="none" stroke="#000" strokeWidth="2"/>
    <rect x="6" y="6" width="10" height="10" rx="1" fill="#000"/>
    {/* Top-right finder */}
    <rect x="44" y="2" width="18" height="18" rx="2" fill="none" stroke="#000" strokeWidth="2"/>
    <rect x="48" y="6" width="10" height="10" rx="1" fill="#000"/>
    {/* Bottom-left finder */}
    <rect x="2" y="44" width="18" height="18" rx="2" fill="none" stroke="#000" strokeWidth="2"/>
    <rect x="6" y="48" width="10" height="10" rx="1" fill="#000"/>
    {/* Data modules */}
    <rect x="24" y="2" width="4" height="4" fill="#000"/>
    <rect x="30" y="2" width="4" height="4" fill="#000"/>
    <rect x="36" y="2" width="4" height="4" fill="#000"/>
    <rect x="24" y="8" width="4" height="4" fill="#000"/>
    <rect x="36" y="8" width="4" height="4" fill="#000"/>
    <rect x="24" y="14" width="8" height="4" fill="#000"/>
    <rect x="24" y="22" width="4" height="4" fill="#000"/>
    <rect x="30" y="22" width="4" height="4" fill="#000"/>
    <rect x="36" y="22" width="4" height="4" fill="#000"/>
    <rect x="42" y="22" width="4" height="4" fill="#000"/>
    <rect x="48" y="22" width="4" height="4" fill="#000"/>
    <rect x="54" y="22" width="4" height="4" fill="#000"/>
    <rect x="2" y="24" width="4" height="4" fill="#000"/>
    <rect x="8" y="24" width="4" height="4" fill="#000"/>
    <rect x="14" y="24" width="4" height="4" fill="#000"/>
    <rect x="2" y="30" width="4" height="4" fill="#000"/>
    <rect x="14" y="30" width="4" height="4" fill="#000"/>
    <rect x="24" y="30" width="4" height="4" fill="#000"/>
    <rect x="36" y="30" width="8" height="4" fill="#000"/>
    <rect x="50" y="30" width="4" height="4" fill="#000"/>
    <rect x="2" y="36" width="4" height="4" fill="#000"/>
    <rect x="8" y="36" width="8" height="4" fill="#000"/>
    <rect x="24" y="36" width="4" height="4" fill="#000"/>
    <rect x="30" y="36" width="8" height="4" fill="#000"/>
    <rect x="44" y="36" width="4" height="4" fill="#000"/>
    <rect x="54" y="36" width="4" height="4" fill="#000"/>
    <rect x="24" y="44" width="4" height="4" fill="#000"/>
    <rect x="30" y="44" width="4" height="4" fill="#000"/>
    <rect x="42" y="44" width="4" height="4" fill="#000"/>
    <rect x="50" y="44" width="4" height="4" fill="#000"/>
    <rect x="24" y="50" width="4" height="4" fill="#000"/>
    <rect x="36" y="50" width="4" height="4" fill="#000"/>
    <rect x="44" y="50" width="4" height="4" fill="#000"/>
    <rect x="54" y="50" width="4" height="4" fill="#000"/>
    <rect x="24" y="56" width="8" height="4" fill="#000"/>
    <rect x="36" y="56" width="4" height="4" fill="#000"/>
    <rect x="48" y="56" width="8" height="4" fill="#000"/>
  </svg>
);

const ProfileDropdown = ({ onClose }) => {
  const navigate = useNavigate();

  const go = (path) => {
    onClose();
    navigate(path);
  };

  const menuItems = [
    { icon: <IconLines />,   label: 'My Account',        path: '/my-account' },
    { icon: <IconAddress />, label: 'Manage Addresses',  path: '/my-account' },
    { icon: <IconGift />,    label: 'CashBack',          path: '/cashback',   badge: '0' },
    { icon: <IconWallet />,  label: 'My Wallet',         path: '/my-wallet' },
    { icon: <IconHelp />,    label: 'Help',              path: '/help' },
    { icon: <IconCart />,    label: 'My Orders',         path: '/my-orders' },
  ];

  return (
    <div style={{
      position: 'absolute',
      top: 'calc(100% + 12px)',
      right: 0,
      width: 300,
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 6px 32px rgba(0,0,0,0.18)',
      zIndex: 3000,
      overflow: 'hidden',
      animation: 'profDropIn 0.18s ease',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <style>{`
        @keyframes profDropIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .pd-item { display: flex; align-items: center; justify-content: space-between; padding: 11px 18px; cursor: pointer; transition: background 0.15s; }
        .pd-item:hover { background-color: #f7f7f7 !important; }
      `}</style>

      {/* ── Header: person icon + phone ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 18px 16px' }}>
        <div style={{
          width: 54, height: 54, borderRadius: '50%',
          border: '1.5px solid #ccc',
          backgroundColor: '#f5f5f5',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <span style={{ fontSize: '17px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '-0.2px' }}>9321763903</span>
      </div>

      <div style={{ height: '1px', backgroundColor: '#ebebeb' }} />

      {/* ── Refer & Earn Banner ── */}
      <div style={{ margin: '12px 14px', borderRadius: '10px', backgroundColor: '#ffd600', overflow: 'hidden', position: 'relative', minHeight: 110 }}>
        <div style={{ padding: '14px 16px', paddingRight: 80 }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#333', marginBottom: 2 }}>Refer &amp; Earn</div>
          <div style={{ fontSize: '30px', fontWeight: 900, color: '#111', lineHeight: 1.1 }}>₹200!</div>
          <div style={{ fontSize: '9.5px', color: '#444', marginTop: 4, marginBottom: 10, lineHeight: 1.4 }}>
            Invite friends —<br />you both get ₹200 when they order!
          </div>
          <button style={{ background: '#1a1a2e', color: '#fff', border: 'none', borderRadius: '6px', padding: '5px 11px', fontSize: '11px', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.02em' }}>
            Refer Now ↗
          </button>
        </div>
        {/* Decorative right side */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 82, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.12)' }}>
          <div style={{ fontSize: '34px', lineHeight: 1 }}>🤲</div>
          <div style={{ fontSize: '16px', marginTop: -4 }}>✨</div>
          <button style={{ position: 'absolute', bottom: 8, right: 6, background: '#1a1a2e', color: '#fff', border: 'none', borderRadius: '4px', padding: '3px 7px', fontSize: '9px', cursor: 'pointer', fontWeight: 600 }}>
            More Details
          </button>
        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: '#ebebeb', margin: '4px 0' }} />

      {/* ── Menu Items ── */}
      {menuItems.map((item) => (
        <div key={item.label} className="pd-item" onClick={() => go(item.path)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
            <span style={{ display: 'flex', alignItems: 'center', width: 20, flexShrink: 0 }}>{item.icon}</span>
            <span style={{ fontSize: '14px', fontWeight: 400, color: '#1a1a1a' }}>{item.label}</span>
          </div>
          {item.badge !== undefined && (
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a' }}>{item.badge}</span>
          )}
        </div>
      ))}

      {/* ── Logout ── */}
      <div className="pd-item" onClick={() => go('/login')} style={{ borderTop: '1px solid #ebebeb', marginTop: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <span style={{ display: 'flex', alignItems: 'center', width: 20, flexShrink: 0 }}><IconLogout /></span>
          <span style={{ fontSize: '14px', fontWeight: 400, color: '#1a1a1a' }}>Logout</span>
        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: '#ebebeb' }} />

      {/* ── QR Code Footer ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px' }}>
        <div style={{ flexShrink: 0 }}><QRCode /></div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.4, marginBottom: 3 }}>
            Get fresh homemade meals from your neighborhood.
          </div>
          <div style={{ fontSize: '11px', color: '#888', lineHeight: 1.4 }}>
            Scan the QR code and download Mealsontheway app
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;

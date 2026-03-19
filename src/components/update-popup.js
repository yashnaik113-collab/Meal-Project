const fs = require('fs');

const files = [
  'PunjabiPage.js', 'GujaratiPage.js', 'SouthPage.js', 'KashmiriPage.js',
  'MaharashtrianPage.js', 'BihariPage.js', 'NorthPage.js', 'BengaliPage.js', 'RajasthaniPage.js'
];

const importsStr = `import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";`;

const setupStr = `  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleTryNow = (dish) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setSelectedDish(dish);
      setQuantity(1);
    }
  };

  const handleClose = () => {
    setSelectedDish(null);
  };`;

const dialogStr = `      {/* ── RECIPE DIALOG ── */}
      <Dialog open={Boolean(selectedDish)} onClose={handleClose} maxWidth="sm" fullWidth>
        {selectedDish && (
          <>
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 1 }}>
              <Typography variant="h5" fontWeight="bold">Add to Cart</Typography>
              <IconButton onClick={handleClose} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 4 }}>
              <Box
                sx={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <Typography sx={{ fontSize: "5rem", lineHeight: 1 }}>{selectedDish.emoji}</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: "#333" }}>{selectedDish.name}</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                ₹{selectedDish.price} per plate
              </Typography>
              
              <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: "12px", overflow: "hidden" }}>
                <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))} sx={{ borderRadius: 0, p: 2, color: "#d32f2f" }}>
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ px: 4, fontWeight: "bold", fontSize: "1.5rem" }}>{quantity}</Typography>
                <IconButton onClick={() => setQuantity(quantity + 1)} sx={{ borderRadius: 0, p: 2, color: "#2d8659" }}>
                  <AddIcon />
                </IconButton>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, justifyContent: "space-between", backgroundColor: "#f9f9f9" }}>
              <Typography sx={{ fontWeight: "800", fontSize: "1.4rem", pl: 2, color: "#111" }}>
                Total: ₹{selectedDish.price * quantity}
              </Typography>
              <Button 
                variant="contained" 
                onClick={() => {
                  alert(\`Added \${quantity} x \${selectedDish.name} to cart!\`);
                  handleClose();
                }}
                sx={{ 
                  backgroundColor: "#0d6efd", 
                  "&:hover": { backgroundColor: "#0b5ed7" }, 
                  borderRadius: "8px", 
                  px: 4, 
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  textTransform: "none"
                }}
              >
                Add Item
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};`;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');

  // Insert imports
  if(!content.includes('DialogTitle')) {
    content = content.replace(/import \{ Link \} from "react-router-dom";/, importsStr);
  }

  // Insert states
  if(!content.includes('handleTryNow')) {
    content = content.replace(/\s*const \[hoveredId, setHoveredId\] = useState\(null\);/, '\n' + setupStr);
  }

  // Replace Try Now link behavior
  content = content.replace(/component=\{Link\}\s*to="\/login"/g, 'onClick={() => handleTryNow(dish)}');

  // Insert Dialog
  if(!content.includes('RECIPE DIALOG')) {
    content = content.replace(/\s*<\/Box>\s*<\/Box>\s*\);\s*\};/m, '\n' + dialogStr);
  }

  fs.writeFileSync(f, content);
  console.log('Processed ' + f);
});

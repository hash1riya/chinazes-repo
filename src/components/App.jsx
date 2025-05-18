import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Parfumes />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/haircare" element={<Haircare />} />
        <Route path="/aromatherapy" element={<Aromatherapy />} />
        <Route path="/candles" element={<Candles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;

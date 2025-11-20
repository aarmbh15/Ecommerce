// src/pages/About.jsx

// --- COLOR PALETTE DEFINITION ---
// Primary: Bottle Green
const COLOR_PRIMARY = '#006A4E'; 
// Accent: Muted Gold/Bronze
const COLOR_ACCENT = '#CD7F32';
// Dark Text
const COLOR_TEXT = '#1F2937';

const AboutContent = () => (
  <div className="max-w-4xl mx-auto p-8 lg:p-12 space-y-6" style={{ color: COLOR_TEXT }}>
    <h2 className="text-4xl font-bold" style={{ color: COLOR_PRIMARY }}>Our Vision in Green</h2>
    <p>
      VERDANT Threads was founded on the principle of sustainable, quality fashion that doesn't compromise on personal style. We believe that clothing should fit not just your body, but your personality and lifestyle. Our name, derived from the rich green of the natural world, reflects our commitment to eco-conscious practices and timeless designs.
    </p>
    <p className="p-4 rounded-lg border-l-4 font-semibold" style={{ borderColor: COLOR_ACCENT, backgroundColor: '#FEF3C7' }}>
      **Innovation in Fit:** Our journey led us to develop the customized 'Visual Fit' technology. This unique tool in our customized section allows you to visually test how colors and patterns interact with your complexion and features before you buy, ensuring every piece you purchase is a perfect match.
    </p>
    <h3 className="text-2xl font-bold mt-8" style={{ color: COLOR_PRIMARY }}>Quality & Commitment</h3>
    <ul className="list-disc list-inside space-y-2 pl-4">
      <li>**Sustainable Fabrics:** Prioritizing organic cottons and recycled materials.</li>
      <li>**Ethical Sourcing:** Ensuring fair wages and safe working conditions globally.</li>
      <li>**Customer Focus:** Dedicated to a seamless shopping experience, from browsing to delivery.</li>
    </ul>
  </div>
);

export default AboutContent;
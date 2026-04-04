import React from "react";
import "./App.css";
import foto from "./aset/m.jpg";

function App() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">

      {/* ========== HEADER ========== */}
      <nav className = "nav">
        <h2 className = "logo">𝒹𝓃𝓁𝒾𝒶 𝓅𝒶𝑔𝑒 ⋆˚꩜｡</h2>
        <div>
          <button onClick={() => scrollTo("Tentang")} className = "navBtn">Tentang Saya</button>
          <button onClick={() => scrollTo("Pendidikan")} className = "navBtn">Pendidikan</button>
          <button onClick={() => scrollTo("Kontak")} className = "navBtn">Kontak</button>
          <button onClick={() => scrollTo("Sosial Media")} className = "navBtn">Sosial Media</button>
          
        </div>
      </nav>

      {/* ========== PROFIL ========== */}
      <div className = "profile">
        <img src={foto} alt="foto" className = "img"/>
        <h1>˚｡⋆🫧𝓓𝓲𝓷𝓭𝓪 𝓐𝓾𝓵𝓲𝓪 𝓝𝓾𝓻 𝓦𝓪𝓺𝓲𝓭𝓲𝔂𝓪𝓱🫧⋆｡˚</h1>
        <p className = "subtitle">A genius woman who loves knowledge ✨</p>
      </div>

      {/* ========== ABOUT ME ========== */}
      <section id = "Tentang" className = "card">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah seorang pelajar yang memiliki minat dalam ilmu agama, 
          dengan terus belajar dan membagikan ilmu agama yang saya miliki, 
          saya berharap dapat memberikan manfaat bagi orang lain dan menjadi pribadi yang lebih baik setiap harinya. 
          Saya memiliki cita-cita menjadi seorang Ustadzah dan bisa berkuliah di universitas ternama di Arab Saudi,
          walau terasa mustahil, saya tetap berusaha untuk terus belajar dan mengembangkan diri, dengan tekad dan semangat yang kuat, 
          juga doa dan dukungan orang sekitar saya, saya yakin suatu saat nanti saya bisa meraih impian tersebut. 
          Saya memiliki prinsip bahwa tidak ada yang mustahil di dunia ini bila Allah sudah berkehendak. Jadi, 
          saya akan terus berusaha dan berdoa untuk mencapai cita-cita saya, serta memberikan manfaat bagi orang lain dengan iklas dan tulus.
        </p>
      </section>

      {/* ========== PENDIDIKAN ========== */}
      <section id = "Pendidikan" className = "card">
        <h2>Pendidikan</h2>
        <ol>
          <li>SDN Kragan</li>
          <li>SMPN 1 Gedangan</li>
          <li>SMKN 2 Buduran</li>
        </ol>
      </section>

      {/* ========== KONTAK ========== */}
      <section id = "Kontak" className = "card">
        <h2>Kontak</h2>
        <p>Email: dindaaulia@email.com</p>
        <p>WhatsApp: 081234567890</p>
      </section>

      {/* ========== SOSIAL MEDIA ========== */}
      <section id = "Sosial Media" className = "card">
        <h2>Media Sosial</h2>
        <p>Instagram & Tiktok: @ndaulwa</p>
        <p>GitHub: github.com/dnlia</p>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className = "footer">
        © 2026 - Dinda Aulia 💙
      </footer>

    </div>
  );
} 

export default App;
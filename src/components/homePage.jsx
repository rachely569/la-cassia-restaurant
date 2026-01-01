import React from "react"
import './homePage.css'
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  
  const navigate = useNavigate();
  return (
    <div className="dark-luxury-page">
      <header className="hero-section">
        <div className="hero-image-wrapper">
          <img src="/imgs/תמונה רקע מסעדה.webp" alt="La Cassia Interior" className="main-hero-img" />
          <div className="hero-overlay-content">
            <span className="est-text">EST. 1983</span>
            <h1 className="brand-name-gold">La Cassia</h1>
            <div className="ornament-line"></div>
            <p className="hero-tagline">חוויה קולינרית של שקט ואיכות</p>
          </div>
        </div>
      </header>

      <main className="content-container">
        <section className="about-luxury">
          <h2 className="section-title-gold">הסיפור שלנו</h2>
          <p className="story-p">
           המסע של La Caccia החל בשנת 1983, מתוך תשוקה עמוקה למסורת הקולינרית האיטלקית ולחומרי הגלם המשובחים ביותר. מה שהתחיל כחזון של איכות ודיוק, צמח לאורך עשורים לכדי מוסד המעניק מטבח עילי וחווית גורמה לכל אורח.

במשך למעלה מארבעה עשורים, אנו מקפידים לשמר את הטעמים הקלאסיים לצד חדשנות יצירתית. בכל מנה שיוצאת מהמטבח שלנו מושקעים עשרות שנים של ניסיון, אהבה לאוכל ומחויבות בלתי מתפשרת למצוינות. אנו מזמינים אתכם לקחת חלק בסיפור שלנו וליהנות מחוויה שמשלבת היסטוריה קולינרית עם אירוח מודרני ויוקרתי.
          </p>
        </section>

        <section className="experience-categories">
          <div className="luxury-card">
            <h3 className="card-title">BREAKFAST</h3>
            <p>ארוחות בוקר בניחוח אירופאי</p>
          </div>
          <div className="luxury-card">
            <h3 className="card-title">DINING</h3>
            <p>מנות שף המבוססות על טריות המשק</p>
          </div>
          <div className="luxury-card">
            <h3 className="card-title">WINERY</h3>
            <p>אוסף יינות נדיר וקוקטיילים קלאסיים</p>
          </div>
        </section>

        <div className="button-wrapper">
         <button className="gold-action-btn" onClick={() => navigate('/foods')}>
    לצפייה בתפריט המלא
</button>
        </div>
      </main>

      <footer className="footer-elegant">
        <p className="signature-gold">צוות La Cassia</p>
      </footer>
    </div>
  )
}
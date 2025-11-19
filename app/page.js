import './globals.css';

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">StudyAI</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#" className="cta-button">Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Your AI-Powered Study Companion</h1>
        <p>Plan homework, ace exams, and manage your study schedule effortlessly with intelligent assistance</p>
        <button className="primary-button">Start Free Trial</button>
      </section>

      {/* Benefits Section */}
      <section id="features" className="benefits">
        <h2>Why Students Love StudyAI</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon">📅</div>
            <h3>Smart Scheduling</h3>
            <p>Automatically organize your assignments and study sessions based on deadlines and priorities</p>
          </div>
          <div className="benefit-card">
            <div className="icon">🎯</div>
            <h3>Exam Planning</h3>
            <p>Create personalized study plans that optimize your prep time for maximum results</p>
          </div>
          <div className="benefit-card">
            <div className="icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Visualize your learning journey with insights and recommendations to stay on track</p>
          </div>
          <div className="benefit-card">
            <div className="icon">🤖</div>
            <h3>AI Assistance</h3>
            <p>Get instant help breaking down complex topics and understanding difficult concepts</p>
          </div>
          <div className="benefit-card">
            <div className="icon">⏰</div>
            <h3>Smart Reminders</h3>
            <p>Never miss a deadline with intelligent notifications tailored to your schedule</p>
          </div>
          <div className="benefit-card">
            <div className="icon">📚</div>
            <h3>Resource Library</h3>
            <p>Access curated study materials and tips for every subject and learning style</p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="screenshots">
        <h2>See It In Action</h2>
        <div className="screenshots-grid">
          <div className="screenshot-card">
            <div className="screenshot-placeholder dashboard">
              <div className="mock-header">
                <div className="mock-nav-item"></div>
                <div className="mock-nav-item"></div>
                <div className="mock-nav-item"></div>
              </div>
              <div className="mock-content">
                <div className="mock-card"></div>
                <div className="mock-card"></div>
                <div className="mock-card"></div>
              </div>
            </div>
            <h4>Dashboard Overview</h4>
            <p>See all your tasks and upcoming exams at a glance</p>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder calendar">
              <div className="calendar-grid">
                <div className="cal-item"></div>
                <div className="cal-item"></div>
                <div className="cal-item active"></div>
                <div className="cal-item"></div>
                <div className="cal-item"></div>
                <div className="cal-item active"></div>
                <div className="cal-item"></div>
              </div>
            </div>
            <h4>Study Calendar</h4>
            <p>Visual timeline of your entire academic schedule</p>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder planner">
              <div className="task-list">
                <div className="task-item"></div>
                <div className="task-item"></div>
                <div className="task-item"></div>
                <div className="task-item"></div>
              </div>
            </div>
            <h4>AI Study Planner</h4>
            <p>Intelligent recommendations for optimal study sessions</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <h2>Choose Your Plan</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Free</h3>
            <div className="price">$0<span>/month</span></div>
            <ul className="features-list">
              <li>✓ Basic task scheduling</li>
              <li>✓ Up to 5 subjects</li>
              <li>✓ Simple reminders</li>
              <li>✓ Mobile app access</li>
            </ul>
            <button className="outline-button">Get Started</button>
          </div>
          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <h3>Student</h3>
            <div className="price">$9<span>/month</span></div>
            <ul className="features-list">
              <li>✓ Everything in Free</li>
              <li>✓ Unlimited subjects</li>
              <li>✓ AI study plans</li>
              <li>✓ Exam preparation mode</li>
              <li>✓ Progress analytics</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="primary-button">Start Free Trial</button>
          </div>
          <div className="pricing-card">
            <h3>Premium</h3>
            <div className="price">$19<span>/month</span></div>
            <ul className="features-list">
              <li>✓ Everything in Student</li>
              <li>✓ Advanced AI tutoring</li>
              <li>✓ Custom study strategies</li>
              <li>✓ Group study coordination</li>
              <li>✓ Offline mode</li>
              <li>✓ 1-on-1 coaching sessions</li>
            </ul>
            <button className="outline-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Study Routine?</h2>
        <p>Join thousands of students achieving their academic goals</p>
        <button className="primary-button large">Start Your Free Trial</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>StudyAI</h4>
            <p>Your intelligent study companion</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 StudyAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

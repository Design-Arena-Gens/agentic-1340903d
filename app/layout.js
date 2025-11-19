export const metadata = {
  title: 'StudyAI - Your AI-Powered Study Companion',
  description: 'Plan homework, ace exams, and manage your study schedule effortlessly with intelligent assistance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

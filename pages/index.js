import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (!question.trim()) return;
    setAnswer("📘 بناءً على المادة (36) من الدستور القطري، الحرية الشخصية مكفولة ولا يجوز تقييدها إلا وفق القانون.");
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f7fafd'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '14px',
        boxShadow: '0 4px 18px rgba(0,0,0,0.07)',
        maxWidth: 480,
        width: '100%'
      }}>
        <h1 style={{ fontSize: '2.2rem', color: '#0B2D4A', marginBottom: 8, textAlign: 'center' }}>MUHAMI AI</h1>
        <p style={{ color: '#345C72', fontSize: 18, textAlign: 'center', marginBottom: 24 }}>مساعدك القانوني الذكي وفق الدستور القطري</p>
        <textarea
          style={{
            width: '100%',
            minHeight: 100,
            fontSize: 18,
            padding: 14,
            borderRadius: 8,
            border: '1px solid #e1e5ef',
            marginBottom: 18,
            resize: 'vertical'
          }}
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="اكتب سؤالك القانوني هنا..."
        />
        <button
          style={{
            width: '100%',
            background: '#0B2D4A',
            color: '#fff',
            fontSize: 20,
            padding: '12px 0',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            marginBottom: answer ? 24 : 0
          }}
          onClick={handleSubmit}
        >
          تحليل
        </button>
        {answer && (
          <div style={{
            background: '#F1F5F9',
            color: '#0B2D4A',
            marginTop: 18,
            borderRadius: 8,
            padding: 16,
            fontSize: 18,
            textAlign: 'right'
          }}>
            <strong>الإجابة:</strong>
            <div style={{ marginTop: 10 }}>{answer}</div>
          </div>
        )}
      </div>
      <p style={{ marginTop: 24, color: '#aaa', fontSize: 15 }}>© 2025 MUHAMI AI</p>
    </div>
  );
}
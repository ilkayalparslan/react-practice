import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main
        className='container'
        style={{ minHeight: '60vh', padding: 'var(--space-16) 0' }}
      >
        <h1>Home page coming next...</h1>
        <p style={{ marginTop: 'var(--space-4)' }}>
          Header sticky çalışıyor mu test etmek için scroll yap.
        </p>
        {/* Scroll için placeholder içerik */}
        <div style={{ marginTop: 'var(--space-16)' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} style={{ marginBottom: 'var(--space-6)' }}>
              Placeholder paragraph {i + 1}. Bu içerik sadece footer'ı görmek ve
              sticky header'ı scroll'da test etmek için.
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
export default App;

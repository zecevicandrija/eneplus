'use client';

// Global Not Found (outside locale)
// Designed to look similar to the main app design

export default function NotFound() {
    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8fcf9',
            fontFamily: 'sans-serif',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60%',
                height: '70%',
                background: 'radial-gradient(ellipse at center, rgba(74, 222, 128, 0.15) 0%, transparent 70%)',
                filter: 'blur(100px)',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                padding: '4rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px',
                width: '90%',
                position: 'relative',
                zIndex: 10
            }}>
                <div style={{ marginBottom: '2rem' }}>
                    <span style={{
                        display: 'block',
                        fontSize: '6rem',
                        fontWeight: '900',
                        color: 'transparent',
                        WebkitTextStroke: '2px #4ade80',
                        lineHeight: '1',
                        opacity: '0.8',
                        letterSpacing: '-2px'
                    }}>404</span>
                    <span style={{
                        display: 'block',
                        fontSize: '2rem',
                        fontWeight: '800',
                        color: '#1a1a1a',
                        textTransform: 'uppercase',
                        marginTop: '0.5rem'
                    }}>STRANICA NIJE PRONAĐENA</span>
                </div>

                <p style={{
                    color: '#4b5563',
                    margin: '0 auto 2.5rem',
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    maxWidth: '500px'
                }}>
                    Žao nam je, stranica koju tražite ne postoji ili je premeštena.
                </p>

                <a href="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    boxShadow: '0 10px 20px -5px rgba(34, 197, 94, 0.4)',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    letterSpacing: '1px'
                }}>
                    <span>POVRATAK NA POČETNU</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

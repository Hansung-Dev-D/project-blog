export const styles = {
    // ... 기존에 Login 페이지에 있던 styles 객체의 내용 ...

        universal: {
            boxSizing: 'border-box',
        },
        //전체 div
        body: {
            // background: '#f6f5f7',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontFamily: "'Montserrat', sans-serif",
            height: '100vh',
            margin: '-20px 0 50px',
        },
        //확인 버튼
        button: {
            borderRadius: '20px',
            border: '1px solid #96d5ff',
            backgroundColor: '#96d5ff',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '12px 45px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'transform 80ms ease-in',
            margin: '8px 0 20px 0',
        },
        buttonActive: {
            transform: 'scale(0.95)',
        },
        buttonFocus: {
            outline: 'none',
        },
        buttonGhost: {
            backgroundColor: 'transparent',
            borderColor: '#FFFFFF',
        },
        form: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '0 50px',
            height: '100%',
            textAlign: 'center',
        },
        //아이디 비번 입력 창
        input: {
            backgroundColor: '#eee',
            border: 'none',
            padding: '12px 15px',
            margin: '8px 0 20px 0', // 아래쪽 여백을 20px로 조정
            width: '100%',
        },
        //로그인 폼 테두리
        container: {
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            position: 'relative',
            overflow: 'hidden',
            width: '768px',
            maxWidth: '100%',
            minHeight: '480px',
        },
        formContainer: {
            position: 'absolute',
            top: 0,
            height: '100%',
            transition: 'all 0.6s ease-in-out',
        },
        overlayContainer: {
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '50%',
            height: '100%',
            overflow: 'hidden',
            transition: 'transform 0.6s ease-in-out',
            zIndex: 100,
        }

};


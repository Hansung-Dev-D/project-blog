import React, {useEffect, useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const styles = {
    universal: {
        boxSizing: 'border-box',
    },
    //전체 div
    body: {
        background: '#f6f5f7',
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
    },
};


function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        // 로그인 데이터요청페이지 바꿔주기 백엔드 api 이용
            .get('https://confident-craft-384109.du.r.appspot.com/loginData')
            .then((res) => {
                const loginData = res.data;
                const isValidUser = loginData.some((user) => user.id === inputId && user.pw === inputPw);

                if (isValidUser) {
                    setIsLoggedIn(true); // 로그인 상태 업데이트
                    localStorage.setItem('id', inputId);
                    navigate('/');
                } else if (inputId === '' && inputPw === '') {
                    alert('아이디와 비밀번호를 입력하세요.');
                } else {
                    alert('아이디와 비밀번호를 확인하세요.');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onClickSignup = () => {
        navigate('/signup');
    };

    const onClickFindId = () => {
        // Handle find ID logic
        alert('아이디를 찾습니다.');
    };

    const onClickFindPassword = () => {
        // Handle find password logic
        alert('비밀번호를 찾습니다.');
    };


    return (
        <div>
            <div className="login wrap" >
                <h1 style={{ marginBottom: '40px', fontSize: '35px' }}>LOGIN</h1>
                <Form onSubmit={handleSubmit}>
                    <div className="id_pw_align">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control
                            type="text"
                            name="input_id"
                            value={inputId}
                            onChange={handleInputId}
                            style={styles.input} />
                        <Form.Label htmlFor="inputPassword5">비밀번호</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            name="input_pw"
                            value={inputPw}
                            onChange={handleInputPw}
                            style={styles.input}
                        />
                    </div>
                    <Button variant="outline-success" size="large" style={styles.button} type="submit">
                        확인
                    </Button>
                </Form>
                <hr></hr>
                <div style={{ fontSize: '15px', textAlign: 'center' }}>
          <span variant="link" onClick={onClickFindId} style={{marginRight: "20px"}}>
            아이디 찾기
          </span>{' '}
                    <span variant="link" onClick={onClickFindPassword}>
            비밀번호 찾기
          </span>
                </div>
                <div style={{ marginTop: '13%' }}>
                    <Button variant="outline-success" size="large" style={styles.button} onClick={onClickSignup}>
                        회원가입
                    </Button>
                </div>
                {isLoggedIn && <p>로그인되었습니다.</p>}
            </div>
        </div>
    );
}

export default Login;

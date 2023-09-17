import React from 'react';
import '../App.css';
import main from '../images/main.png';
// import content1 from '../images/content1.png';




function Main() {
    // 더 알아보기 버튼 누르면 content-section으로 이동
    const scrollToContent = () => {
        const contentElement = document.getElementById("content-section");
        contentElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="main-container">
            {/* 메인 섹션 */}
            <div className="main-section">
                <img src={main} alt="main" className="main-image"/>
                <h1>환영합니다!</h1>
                <p>코드 부기스에 오신 것을 환영합니다.</p>
                <button className="main-button" onClick={scrollToContent}>더 알아보기</button>
            </div>

            {/* Content Section */}
            <dv className="content-section" id="content-section">
                <h2>서비스 소개</h2>
                <p>서비스의 기본 설명을 추가</p>
                {/*<img src={content1} alt="content1" className="content1-image"/>*/}
            </dv>
        </div>
    );
}

export default Main;

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
            <div className="content-box" id="content-section">
                <h2>코드 부기스는?</h2>
                <p className="content-detail">코딩과 관련된 모든 질문을 할 수 있는 공간입니다</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                {/*<img src={content1} alt="content1" className="content1-image"/>*/}
            </div>
        </div>
    );
}

export default Main;

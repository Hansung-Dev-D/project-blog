// React의 기본적인 훅과 컴포넌트 라이브러리를 가져옵니다.
import React, { useState, useEffect } from 'react';
// Axios는 HTTP 요청을 쉽게 만들 수 있는 라이브러리입니다.
import axios from 'axios';
import {FaSearch} from "react-icons/fa";

const Question = () => {
    // 질문 데이터를 관리하는 state를 초기화합니다.
    const [data, setData] = useState([]);
    // 검색 또는 정렬 후의 데이터를 관리하는 state를 초기화합니다.
    const [filteredData, setFilteredData] = useState([]);
    // 검색어를 관리하는 state를 초기화합니다.
    const [searchTerm, setSearchTerm] = useState('');

    // 컴포넌트가 마운트될 때 JSON 데이터를 가져오는 함수를 실행합니다.
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 상대 경로를 사용하여 JSON 데이터를 가져옵니다.
                const response = await axios.get('/testdata.json');
                // 응답 데이터를 state에 저장합니다.
                setData(response.data.questions);
                setFilteredData(response.data.questions);
            } catch (error) {
                console.error('오류', error);
            }
        };
        fetchData();
    }, []);

    // 정렬 타입을 받아 해당 타입에 따라 데이터를 정렬하는 함수입니다.
    const handleSort = (type) => {
        let sortedData = [...filteredData];
        switch (type) {
            case 'recent':
                sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'answers':
                sortedData.sort((a, b) => b.answers_count - a.answers_count);
                break;
            case 'likes':
                sortedData.sort((a, b) => b.likes - a.likes);
                break;
            case 'views':
                sortedData.sort((a, b) => b.views - a.views);
                break;
            default:
                break;
        }
        setFilteredData(sortedData);
    };

    // 검색어가 변경될 때마다 데이터를 필터링하는 함수입니다.
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = data.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredData(filtered);
    };

    // 버튼 스타일
    const buttonStyle = {
        backgroundColor: "#FFEB99", // 파스텔톤의 노란색
        borderRadius: "15px",       // 모서리 둥글게
        padding: "10px 15px",       // 패딩
        border: "none",             // 테두리 없애기
        marginBottom: '10px',      // 버튼 사이 간격
        cursor: 'pointer',          // 마우스를 올렸을 때 포인터 모양
        display: 'flex'
    };

    const searchBoxStyle = {
        display: 'flex', // 아이콘과 텍스트 박스를 가로로 배치
        alignItems: 'center', // 세로 정렬
        border: '1px solid #ccc',
        borderRadius: '15px',
        padding: '10px',

        margin : '10px'

    };

    const programmingLanguageStyle = {
        fontSize: '20px', // 큰 글씨로
        fontWeight: 'bold', // 볼드체로
        backgroundColor: 'lightgrey', // 배경색
        padding: '5px', // 패딩 추가
        borderRadius: '5px', // 모서리 둥글게
        marginRight: '10px', // 오른쪽 여백 추가
        display: 'inline' // inline 형태로 표시
    };

    const handleKeyUp = (e) => {
        // 엔터 키의 keyCode는 13입니다.
        if (e.keyCode === 13) {
            const filtered = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredData(filtered);
        }
    };



    return (
        // <div style={{ display: 'flex',
        //     flexDirection: 'row',
        //      alignItems: 'center',
        //     justifyContent: 'center'}}>
            <div style={{display: 'flex', width: '100%', marginTop: '20px'}}>
                {/* 버튼들이 위치할 왼쪽 컨테이너 */}
            {/* 왼쪽 정렬 버튼들 */}
            <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '15%' }}>
                {/*여기가 왼쪽 여백 조절해주는 거였음*/}

            {/*<div style={{ width: '20%', padding: '20px',}}> /!* 버튼들이 20%의 너비를 차지하게 변경 *!/*/}
                <button style={buttonStyle} onClick={() => handleSort('recent')}>최신순</button>
                <button style={buttonStyle} onClick={() => handleSort('answers')}>답변순</button>
                <button style={buttonStyle} onClick={() => handleSort('likes')}>좋아요순</button>
                <button style={buttonStyle} onClick={() => handleSort('views')}>조회순</button>
            </div>

            <div style={{ width: '70%', backgroundColor: '#F5F5F5', justifyContent: 'center', minHeight: '420px' }}> {/* 배경색을 옅은 파란색으로 설정 */}
                {/* 이 부분에서 display와 justifyContent 속성을 사용해 내용을 중앙에 위치시킵니다. */}
            {/* 검색창 */}
            <div style={searchBoxStyle}>
                <FaSearch />
                <input type="text" placeholder="질문 검색하기" style={{ border: 'none', marginLeft: '10px',backgroundColor:'#F5F5F5' }}
                       value={searchTerm}
                       onChange={handleSearch}
                       onKeyUp={handleKeyUp}
                />
            </div>

                {/* 테이블 컨테이너 */}
            {/*<div style={{   flex: 1 ,width: '100%', marginTop: '20px'}}> /!* 전체를 flex로 변경하여 왼쪽 버튼들과 본문 영역을 구분합니다 *!/*/}
                <div style={{ width: '80%', marginLeft: '10%', marginRight: '10%' }}>
                    {/* 여기에 테이블 관련 코드가 위치합니다. */}
                {/* 데이터 목록 */}

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                            {/* 첫 번째 열: 프로그래밍 언어 */}
                            <td style={{ padding: '10px' }}>
                                <span style={programmingLanguageStyle}>#{item.programming_language}</span>
                            </td>

                            {/* 두 번째 열: 제목 및 작성자 */}
                            <td style={{ padding: '10px' }}>
                                <strong style={{ display: 'block', margin: '5px 0' }}>{item.title}</strong>
                                <small style={{ display: 'block', marginBottom: '10px' }}>작성자 {item.author}</small>
                            </td>

                            {/* 세 번째 열: 답변, 좋아요, 조회수 */}
                            <td style={{ padding: '10px', textAlign: 'right' }}>
                                <span> 답변 {item.answers_count}</span>
                                <span> 좋아요 {item.likes}</span>
                                <span> 조회수 {item.views}</span>
                            </td>
                        </tr>
                    ))}

                             {/*/!* 구분선 (HR) *!/*/}
                            {/*<hr style={{ margin: '20px 0' }} /> /!* HR 선 margin 조절 *!/*/}


                    </tbody>
                </table>
                </div>




                {/*/// 오른쪽 빈 여백*/}
                <div style={{ width: '15%' }}></div>
            </div>
        </div>
    );
};

export default Question;

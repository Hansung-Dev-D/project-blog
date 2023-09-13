import 'bootstrap/dist/css/bootstrap.min.css'; // Add this to the top of your file
import logo from './logo.svg';
import heartboogie from './images/heartboogie.png';  // 상상부기 이미지를 import 합니다.
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaBell, FaUserCircle, FaSearch  } from 'react-icons/fa'; // Import the icons
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.js';
import Footers from './components/Footers';
import Signup from './pages/Signup';
import Question from './pages/Question';
import axios from "axios";

function App() {
  return (
      <Router>
      <div className="App">
          <nav className="navbar navbar-expand-lg custom-navbar" style={{backgroundColor: "#e3f2fd"}}>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>
              <img src={heartboogie} alt="한성대학교 상상부기" style={{ marginRight: '10px', height: '30px', width: '30px' }} />  {/* 이미지를 참조합니다. */}
              코드부기스
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/question">질문하기</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">프로젝트</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">스터디</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">코딩테스트</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">공부하기</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="검색" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  <FaSearch />
                </button>
              </form>

              <Nav>
                <Nav.Link href="/notifications">
                  <FaBell />
                </Nav.Link>
                <Nav.Link href="/login">
                  <FaUserCircle />
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/question" element={<Question />} />
        </Routes>
        <Footers/>
      </div>
      </Router>
  );
}

export default App;

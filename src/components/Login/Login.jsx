
import React, { useState } from "react";
import { FaBitbucket, FaGithub, FaGitlab, FaMicrosoft } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import "./Login.css";

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("saas"); // Default selection

  return (
    <div className="main-login">
      <div className="left-login">
        <img src="./sidebar.png" alt="sidebar" />
      </div>

      <div className="right-login">
        <img src="./logo.png" alt="Logo" />
        <h1>Welcome to CodeAnt AI</h1>

        <div className="option-btns">
          <button
            className={selectedOption === "saas" ? "selected" : ""}
            onClick={() => setSelectedOption("saas")}
          >
            SaaS
          </button>
          <button
            className={selectedOption === "self" ? "selected" : ""}
            onClick={() => setSelectedOption("self")}
          >
            Self Hosted
          </button>
        </div>

        {selectedOption === "saas" && (
          <div className="login-btns">
            <button>
              <FaGithub size={20} color="#333" style={{ marginRight: "10px" }} />
              Sign with Github
            </button>
            <button>
              <FaBitbucket size={20} color="#0052CC" style={{ marginRight: "10px" }} />
              Sign with Bitbucket
            </button>
            <button>
              <FaMicrosoft size={20} color="#F25022" style={{ marginRight: "10px" }} />
              Sign with Azure DevOps
            </button>
            <button>
              <FaGitlab size={20} color="#FC6D26" style={{ marginRight: "10px" }} />
              Sign with GitLab
            </button>
          </div>
        )}

        {selectedOption === "self" && (
          <div className="self-btns">
            <button>
              <RiGitRepositoryPrivateFill size={20} color="#555" style={{ marginRight: "10px" }} />
              Self Hosted GitLab
            </button>
            <button>
              <FiKey size={20} color="#FFAB00" style={{ marginRight: "10px" }} />
              Sign with SSO
            </button>
          </div>
        )}
        <p className="privacy">
          By signing up you agree to the <strong>Privacy Policy.</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { links } from "./data";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Wrapper>
      <nav>
        <h1>Logo</h1>
        <ul>
          {links.map((link) => {
            const { id, text, url, sublinks } = link;

            if (text === "Services") {
              return (
                <li
                  key={id}
                  className="dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <NavLink
                    to={url}
                    className={({ isActive }) => (isActive ? "active" : "")}>
                    {text}
                    <FaCaretDown className="dropdown-icon" />
                  </NavLink>

                  {isDropdownOpen && sublinks && (
                    <div className="dropdown-menu">
                      {sublinks.map((sublink) => (
                        <NavLink
                          key={sublink.id}
                          to={sublink.url}
                          className={({ isActive }) =>
                            isActive ? "active" : "dropdown-link"
                          }
                          onClick={closeDropdown} // Close dropdown on sublink click
                        >
                          {sublink.text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) => (isActive ? "active" : "")}>
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    margin: .5em 5em;
  }

  ul {
    display: flex;
    gap: 3em;
    list-style: none;
  }

  li {
    position: relative; /* Needed for dropdown positioning */
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 300;
  }

  .active {
    border-bottom: 3px solid var(--primary-yellow-color);
    padding-bottom: 0.4em;
    color: var(--primary-yellow-color);
  }

  /* Dropdown Styles */
  .dropdown {
    cursor: pointer;
  }

  .dropdown-icon {
    margin-left: 5px;
    font-size: 12px;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%; /* Show below the link */
    left: 0;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 10;
    padding: 0.5em 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 160px;
  }

  .dropdown-link {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    padding: 0.5em 0;
    transition: color 0.3s;

    &:hover {
      color: var(--primary-yellow-color);
    }
  }
`;

export default Navbar;

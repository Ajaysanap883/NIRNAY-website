import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { Menu, MenuItem, MenuButton, MenuList } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import "primeicons/primeicons.css";

// import backdesign from "../assests/design.png";

export default function navbar() {
  const txtstyles = {
    fontWeight: "semibold",
  };

  return (
    <div class="navbar">
      <div class="background">
        <nav>
          <span>
            <Box borderBottom="4px solid purple" borderRadius={"4px"}>
              <HashLink to={"/#home"}>Home</HashLink>
            </Box>

            <Box
              borderBottom="4px solid transparent"
              borderRadius={"4px 4px"}
              transition="border-color 0.3s"
              _hover={{
                borderColor: "purple",
                transition: "border-color 0.1s  ease-in .3s",
              }}
            >
              <HashLink to={"/#about"}>About us</HashLink>
            </Box>

            <Box
              borderBottom="4px solid transparent"
              borderRadius={"4px 4px"}
              transition="border-color 0.3s"
              _hover={{
                borderColor: "purple",
                transition: "border-color 0.1s  ease-in .3s",
              }}
            >
              <Link to={"/"}>KPIs</Link>
            </Box>

            <Box>
              <Menu>
                <MenuButton
                  borderRadius={"4px 4px"}
                  borderBottom="4px solid transparent"
                  transition="border-color 0.3s"
                  _hover={{
                    borderColor: "purple",
                    transition: "border-color 0.1s  ease-in .3s",
                  }}
                  sx={txtstyles}
                >
                  Reports{" "}
                  <i
                    className="pi  pi-angle-down"
                    style={{ fontSize: "1.5vw" }}
                  ></i>
                </MenuButton>
                <MenuList color={"black"} bg={"white"}>
                  <MenuItem _hover={{ color: "purple" }} bg={"white"}>
                    <Link to={"/download"}>download</Link>
                  </MenuItem>
                  <MenuItem _hover={{ color: "purple" }} bg={"white"}>
                    <Link to={"/copy"}>create copy</Link>
                  </MenuItem>
                  <MenuItem _hover={{ color: "purple" }} bg={"white"}>
                    <Link to={"/draft"}>draft</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Box
              borderBottom="4px solid transparent"
              borderRadius={"4px 4px"}
              transition="border-color 0.3s"
              _hover={{
                borderColor: "purple",
                transition: "border-color 0.1s  ease-in .3s",
              }}
            >
              {/* <Link to={"/meetings"}>Meetings</Link> */}
              <HashLink to={"/#meetings"}>Meetings</HashLink>
            </Box>
            <Box
              borderRadius={"4px 4px"}
              borderBottom="4px solid transparent"
              transition="border-color 0.3s"
              _hover={{
                borderColor: "purple",
                transition: "border-color 0.1s  ease-in .3s",
              }}
            >
              <HashLink to={"/#documents"}>Documents</HashLink>
            </Box>
          </span>
          <Button colorScheme="purple" mx={"50px"} variant="ghost">
            <Link to={"/login"}>Login</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}

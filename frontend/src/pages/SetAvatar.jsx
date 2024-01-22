import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Buffer } from "buffer";
import Loader from "../assets/loader.gif";
import { setAvatarRoute } from "../utils/APIRouts";

function SetAvatar() {
  const api = `https://api.multiavatar.com/4645646`;
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const toastOptions = {
    position: "top-right",
    autoClose: "8000",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const setProfilePicture = async () => {};
  // useEffect(() => {
  //   const data = [];
  //   for (let i = 0; i < 4; i++) {
  //     const image = await axios.get(
  //       `${api}/${Math.round(Math.random() * 1000)}`
  //     );
  //     const buffer = new Buffer(image.data);
  //     data.push(buffer.toString("base64"));
  //   }
  //   setAvatars(data);
  //   setIsLoading(false);
  // }, []);

  const fetchData = async () => {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`
      );
      data.push(image.data);
    }
    setAvatars(data);
    setIsLoading(false);
  };

  // const fetchData = async () => {
  //   const data = [];
  //   let retries = 0;

  //   while (retries < 3) {
  //     // You can adjust the maximum number of retries
  //     try {
  //       const image = await axios.get(
  //         `${api}/${Math.round(Math.random() * 1000)}`
  //       );
  //       data.push(image.data);
  //       break; // Break out of the loop if the request is successful
  //     } catch (error) {
  //       if (error.response && error.response.status === 429) {
  //         // Rate limit exceeded, apply exponential backoff
  //         const delay = Math.pow(2, retries) * 1000; // Exponential backoff in milliseconds
  //         await new Promise((resolve) => setTimeout(resolve, delay));
  //         retries++;
  //       } else {
  //         // Handle other types of errors
  //         throw error;
  //       }
  //     }
  //   }

  //   setAvatars(data);
  //   setIsLoading(false);
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <div className="title-container">
          <h1>Pick an avatar as your profile picture</h1>
        </div>
        <div className="avatars">
          {avatars.map((avatar, index) => {
            return (
              <div
                key={index}
                className={`avatar ${
                  selectedAvatar === index ? "selected" : ""
                }`}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt="avatar"
                  // key={avatar}
                  onClick={() => setSelectedAvatar(index)}
                />
              </div>
            );
          })}
        </div>
        <button className="submit-btn" onClick={setProfilePicture}>
          {" "}
          Set as a profile picture
        </button>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;

  .loader {
    max-inline-size: 100%;
  }

  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;

    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 4rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;

export default SetAvatar;

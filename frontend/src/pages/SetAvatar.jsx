import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loader from "../assets/loader.gif";
import { setAvatarRoute } from "../utils/APIRouts";
import { Buffer } from "buffer";

function SetAvatar() {
  return <div>Set</div>;
}

export default SetAvatar;

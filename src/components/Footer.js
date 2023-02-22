import React from "react";
import { useNavigate } from 'react-router-dom'

export default function Footer() {

  // GeNt the history object
  const navigate = useNavigate();




  return (
    <footer>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Forward</button>
    </footer>
  );
}

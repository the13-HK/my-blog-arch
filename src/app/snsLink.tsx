"use client";
import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import styled from "@emotion/styled";

export default SnsLink: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <a
        href="https://x.com/chopperharu_IT"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <img src="/twitter.svg" alt="twitter" /> */}
      </a>
      <a href="" target="_blank" rel="noopener noreferrer"></a>
    </div>
  );
};

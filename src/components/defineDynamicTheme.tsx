import React, { useState, useEffect } from 'react'

const defineDynamicTheme = (color: any) => {
  const createStyleTag = document.createElement("style");
  createStyleTag.className = "dynamic-theme";
  const headTag = document.querySelector("head");
  const dynamicTheme = document.querySelector(".dynamic-theme");
  if (headTag && !dynamicTheme) headTag.appendChild(createStyleTag);
  if (dynamicTheme)
    dynamicTheme.innerHTML = `
    body,.App{background-color:#${color[0]}!important;}
    h1{color:#${color[1]}!important;}
    h4, p{color:#${color[2]}!important;}
    button,a.btn{background-color: #${color[3]}!important;border-color:#${color[0]}!important;color:#${color[0]}!important;}
    .btn.detail{background-color: #${color[4]}!important;}
    `;
}

export default defineDynamicTheme
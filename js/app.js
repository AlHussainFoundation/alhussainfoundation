{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /* ===== Al Hussain Foundation JS ===== */\
const hamburger = document.querySelector('.hamburger');\
const navMenu   = document.querySelector('.navbar ul');\
\
/* Mobile Nav Toggle */\
hamburger.addEventListener('click', () => \{\
  navMenu.classList.toggle('show');\
  hamburger.classList.toggle('open');\
\});\
\
/* Simple Donation Form Validation */\
const donationForm = document.getElementById('donation-form');\
if (donationForm) \{\
  donationForm.addEventListener('submit', (e) => \{\
    e.preventDefault();\
    const amount = document.getElementById('amount').value;\
    if (Number(amount) <= 0) \{\
      alert('Please enter a valid donation amount.');\
      return;\
    \}\
    alert('Thank you for your generous contribution!');\
    donationForm.reset();\
  \});\
\}\
}
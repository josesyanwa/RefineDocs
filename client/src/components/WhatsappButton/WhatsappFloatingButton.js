// components/WhatsappFloatingButton.js
"use client";
import React from 'react';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

const WhatsappFloatingButton = () => {
  return (
    <FloatingWhatsApp
        phoneNumber='+254726462757' // Required
        accountName='CAWA Kenya Tours & Travel' // Optional
        avatar='/images/avatar.webp' // Optional
        initialMessageByServer='Hi there! How can I assist you?' 
        statusMessage='Available' 
        placeholder='Write here...' 
        allowEsc={true} 
        // style={{ left: '20px', right: 'unset' }}
        // buttonStyle={{ left: '20px', right: 'unset' }}
        
      />
  );
};

export default WhatsappFloatingButton;

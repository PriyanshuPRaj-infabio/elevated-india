"use client";

import React from 'react';
import Lottie from 'lottie-react';
import scrollIndicatorData from '../../public/lottie/scroll-indicator.json';

export default function LottieScroll() {
  return (
    <div style={{ width: 30, height: 50, margin: '0 auto' }}>
      <Lottie animationData={scrollIndicatorData} loop={true} />
    </div>
  );
}

import JSConfetti from 'js-confetti';
import React from 'react';
import './index.less';

const confetti = new JSConfetti();

export function showConfetti() {
  confetti.addConfetti({
    confettiNumber: 30,
    confettiRadius: 8,
  });
}

function Confetti() {
  return <div>Confetti</div>;
}

export default Confetti;

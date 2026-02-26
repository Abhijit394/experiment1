  const runawayBtn = document.getElementById('runaway-btn');
  const stayBtn = document.getElementById('Stay');
  const contentWrapper = document.getElementById('content-wrapper');
  const successMsg = document.getElementById('success-msg');

  // Move the "No" button randomly on hover
  runawayBtn.addEventListener('mouseover', () => {
    // Switch to fixed position so it can fly anywhere on screen
    runawayBtn.style.position = 'fixed';
    
    const padding = 50;
    const maxX = window.innerWidth - runawayBtn.offsetWidth - padding;
    const maxY = window.innerHeight - runawayBtn.offsetHeight - padding;

    // Ensure it doesn't just stay in the top-left
    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);

    runawayBtn.style.left = randomX + 'px';
    runawayBtn.style.top = randomY + 'px';
  });

  // Action for "Yes" button
  stayBtn.addEventListener('click', () => {
    // 1. Open a new website (Replace the URL with whatever you like)

    // 2. Change the current screen UI
    contentWrapper.style.display = 'none';
    runawayBtn.style.display = 'none';
    successMsg.style.display = 'block';
    document.getElementById('Box').style.borderColor = '#00ffcc';
    document.body.style.background = 'radial-gradient(circle, #00221a 0%, #000 100%)';
  });
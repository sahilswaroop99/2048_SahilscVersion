document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareButton');
    const scoreContainer = document.querySelector('.score-container');
  
    shareButton.addEventListener('click', async () => {
      const score = scoreContainer.innerText;
      const shareData = {
        title: '2048 Game',
        text: `I scored ${score} points in the 2048 game! Can you beat my score?`,
        url: window.location.href
      };
  
      try {
        await navigator.share(shareData);
        console.log('Score shared successfully');
      } catch (err) {
        console.error('Error sharing score:', err);
      }
    });
  });
  
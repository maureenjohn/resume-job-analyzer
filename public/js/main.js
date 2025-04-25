document.addEventListener('DOMContentLoaded', function() {
    // Get started button event listener
    const getStartedButton = document.getElementById('getStarted');
    if (getStartedButton) {
      getStartedButton.addEventListener('click', function() {
        alert('Welcome to the Resume Job Analyzer! This feature is coming soon.');
      });
    }
    
    // Initialize any components or fetch data
    initApp();
  });
  
  function initApp() {
    console.log('Resume Job Analyzer initialized');
    
    // Check if API is available
    fetch('/api/frontend-components')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('API not available');
      })
      .then(data => {
        console.log('Available components:', data.availableComponents);
      })
      .catch(error => {
        console.error('Error connecting to API:', error);
      });
  }
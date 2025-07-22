// Add an event listener for the download button on the homepage
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Redirect to download page
            window.location.href = 'download.html';
        });
    }
});
// Function to open the relevant modal based on the clicked option
function openMoodTrackerModal() {
    document.getElementById('moodTrackerModal').style.display = 'block';
}

function openDiaryModal() {
    document.getElementById('diaryModal').style.display = 'block';
}

function openWeeklyCheckinModal() {
    document.getElementById('weeklyCheckinModal').style.display = 'block';
}

function openMoodAnalysisModal() {
    document.getElementById('moodAnalysisModal').style.display = 'block';
}

function openRelaxationModal() {
    document.getElementById('relaxationModal').style.display = 'block';
}

function openEmergencyContactModal() {
    document.getElementById('emergencyContactModal').style.display = 'block';
}

// Close the modal when the user clicks on the close button
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Event listeners for menu items to open corresponding modals
document.getElementById('moodTrackerBtn').addEventListener('click', openMoodTrackerModal);
document.getElementById('diaryBtn').addEventListener('click', openDiaryModal);
document.getElementById('weeklyCheckinBtn').addEventListener('click', openWeeklyCheckinModal);
document.getElementById('moodAnalysisBtn').addEventListener('click', openMoodAnalysisModal);
document.getElementById('relaxationBtn').addEventListener('click', openRelaxationModal);
document.getElementById('emergencyBtn').addEventListener('click', openEmergencyContactModal);

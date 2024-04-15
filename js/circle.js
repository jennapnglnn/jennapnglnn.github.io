document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    const skillsList = ['Web Design', 'Graphic Design', 'UI/UX Design', 'Drawing', 'Photoshop', 'Premier',
    'Web Design', 'Graphic Design', 'UI/UX Design', 'Drawing', 'Photoshop', 'Premier'];

    const intervalIds = [];

    skills.forEach((skill, index) => {
        const number = skill.querySelector('.number');
        const outerCircle = skill.querySelector('.outer');
        const innerCircle = skill.querySelector('.outer .inner');
        const percentage = parseInt(skill.dataset.num);
        let counter = 0;

        // Skill Color
        const color = '#EA3791';

        const i = index; 

        // Error handling: check if elements exist before accessing them
        if (number && outerCircle && innerCircle) {
            const intervalId = setInterval(() => {
                if (counter === percentage) {
                    clearInterval(intervalId);
                    number.innerHTML = skillsList[i];
                } else {
                    counter += 1;
                    const rotation = (counter / 100) * 360; // Calculate rotation angle
                    const gradient = `conic-gradient(${color} ${rotation}deg, transparent ${rotation}deg 360deg)`;
                    outerCircle.style.background = gradient;
                }
            }, 20);
    
            intervalIds.push(intervalId); 
    
            // Set a solid color for the inner circle
            innerCircle.style.backgroundColor = '#FFFFFF'; 
        }
    });
});

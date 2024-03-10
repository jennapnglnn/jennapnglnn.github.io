// const skills = document.querySelectorAll('.skill');

// skills.forEach((skill, index) => {
//     const number = skill.querySelector('.number');
//     const outerCircle = skill.querySelector('.outer');
//     const innerCircle = skill.querySelector('.outer .inner');
//     const percentage = parseInt(skill.dataset.num);
//     let counter = 0;
//     let i = 0;

//     // Define colors for each skill
//     const color = '#EA3791';
//     const skillsList = ['Web Design', 'Graphic Design', 'UI/UX Design', 'Drawing', 'Photoshop', 'Premier']

//     setInterval(() => {
//         if (counter === percentage) {
//             clearInterval(counter);
//             number.innerHTML = skillsList[i];
//             i += 1;

//         } else {
//             counter += 1;
            

//             const rotation = (counter / 100) * 360; // Calculate rotation angle
//             const gradient = `conic-gradient(
//                 ${color} ${rotation}deg,
//                 transparent ${rotation}deg 360deg)`;
//             outerCircle.style.background = gradient;
//         }
//     }, 20);

//     // Set a solid color for the inner circle
//     innerCircle.style.backgroundColor = '#FFFFFF'; // Replace with your desired inner color
// });

const skills = document.querySelectorAll('.skill');
const skillsList = ['Web Design', 'Graphic Design', 'UI/UX Design', 'Drawing', 'Photoshop', 'Premier'];

const intervalIds = [];

skills.forEach((skill, index) => {
    const number = skill.querySelector('.number');
    const outerCircle = skill.querySelector('.outer');
    const innerCircle = skill.querySelector('.outer .inner');
    const percentage = parseInt(skill.dataset.num);
    let counter = 0;

    // Define colors for each skill
    const color = '#EA3791';

    const i = index; // Store the index

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

    intervalIds.push(intervalId); // Store the interval ID in the array

    // Set a solid color for the inner circle
    innerCircle.style.backgroundColor = '#FFFFFF'; // Replace with your desired inner color
});



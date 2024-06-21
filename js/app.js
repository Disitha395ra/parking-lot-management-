const graph = {
    gate1: { A: 210, B: 345, C: 365, D: 495, D: 910, E: 525, E:880, F:605, F:740, G:665, G:670, G:585, G:915, H:770, H:315, H:950, H:1065 },
    gate2: { A: 645, B: 510, C:490, D:635, D:755, D:720, E:760, E:785, E:750, E:1015, F:1105, F:905, F:925, F:890, F:1035, G:485, G:525, H:85},
    gate3: { A: 260, B: 345, C:415, D:345, D:600, D:910, E:575, E:570, E:940, F:430, F:715, G:1050, G:1100, G:850, G:715, G:670, H:820, H:1250, H:1342 },
    A: { gate1: 280, gate2: 645, gate3: 260, B: 135, c: 155, D: 285, D: 600, E: 315, E:670, F:395, F:530, G:455, G:460, G:375, G:705, H:560, H:105, H:740, H:855 },
    B: { gate1: 345, gate2: 510, gate3: 275, A: 135, C: 20, D: 145, D: 460, E: 175, E:530, F:255, F:390, G:315, G:320, G:235, G:565, H:420, H:35, H:470, H:585 },
    C: { gate1: 365, gate2: 490, gate3: 415, A: 135, B: 20, D: 125, D: 440, E: 155, E:510, F:235, F:370, G:295, G:300, G:215, G:545, H:400, H:15, H:450, H:565 },
    D: { gate1: 665, gate1: 675, gate2: 890, gate3: 740, A: 390, B: 535, C: 555, E: 220, E:575, F:300, F:435, G:360, G:365, G:280, G:610, H:465, H:80, H:515, H:630 },
    E: { gate3: 512, gate2: 435, gate3: 675, gate1: 845, A: 315, B: 240, C: 260, D: 390, D: 705, F: 125, F: 260, G: 185, G: 190, G: 105, G: 435, H: 290, H:95, H:330, H:445 },
    F: { gate3: 762, gate2: 447, gate3: 567, gate1: 895, gate2: 577, A: 390, B: 380, C: 400, D: 530, D: 845, E: 125, E:480, G: 125, G: 130, G: 45, G: 375, H: 230, H:145, H:280, H:395 },
    G: { gate1: 854, gate2: 943, gate3: 689, A: 410, B: 275, C: 305, D: 250, E: 280, F: 420 , H: 145, H: 260, H:375 },
    H: { gate1: 623, gate2: 644, gate3: 751, A: 410, B: 275, C: 305, D: 250, E: 280, F: 420 , G: 400}
};

const initialParkingSlots = [
    { id: 'A', capacity: 10, occupied: 0 },
    { id: 'B', capacity: 10, occupied: 0 },
    { id: 'C', capacity: 10, occupied: 0 },
    { id: 'D', capacity: 10, occupied: 0 },
    { id: 'E', capacity: 10, occupied: 0 },
    { id: 'F', capacity: 10, occupied: 0 },
    { id: 'G', capacity: 10, occupied: 0 },
    { id: 'H', capacity: 10, occupied: 0 }
];


let parkingSlots = JSON.parse(localStorage.getItem('parkingSlots')) || initialParkingSlots;

function saveParkingSlots() {
    localStorage.setItem('parkingSlots', JSON.stringify(parkingSlots));
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    const validUsername = "Admin";
    const validPassword = "123";

    if (username === validUsername && password === validPassword) {
        
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    
    window.location.href = 'index.html';
}
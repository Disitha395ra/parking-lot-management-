
# Parking Lot Management System -UoV

This is a web-based Parking Slot Management System that helps manage parking slots efficiently. The system uses algorithms like Dijkstra to find the nearest available parking slot and allows users to mark their arrival, updating the parking slot status in real-time.

## Features
- User authentication (username: Admin, password: 123)
- Bidirectional weighted graph for parking slots
- Pathfinding using Dijkstra's algorithm
- Persistent state of parking slots using localStorage
- User logout functionality


## Steps To Run

- Clone the Repository
	git clone https://github.com/your-username/ParkingSlotManagement.git
	cd ParkingSlotManagement
- Open the Login Page
	Open the index.html file in your preferred web browser. You can do this by double-clicking the file or by right-clicking and 	selecting "Open with" and then choosing your browse


## Usage/Examples

```javascript
gate1: { A: 210, B: 345, C: 365, D: 495, D: 910, E: 525, E:880, F:605, F:740, G:665, G:670, G:585, G:915, H:770, H:315, H:950, H:1065 }
```
Gate Nodes (gate1, gate2, gate3): These nodes have edges connecting them to nearby parking slots (A, B, C, D, E, F, G, H) with specified distances as weights.
Example: gate1 is connected to A with a distance of 210 units and to B with a distance of 345 units.

```javascript
{ id: 'A', capacity: 10, occupied: 0 }
```
- id: The identifier for the parking slot (e.g., A, B).
- capacity: The total number of vehicles that the parking slot can accommodate (e.g., 10).
- occupied: The current number of vehicles parked in the slot (initially set to 0).

```javascript
function login() {
    /*
                */
    const validUsername = "Admin";
    const validPassword = "123";

    if (username === validUsername && password === validPassword) {
        
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
}
```
This allows only username-"Admin" password-"123" because this system only for university staff and students

```javascript
function logout() {
    
    window.location.href = 'index.html';
}
```
Logout function that redirect users to login page(index.html)

```javascript
function markArrived(slotId) {
    const slot = parkingSlots.find(slot => slot.id === slotId);
    if (slot && slot.occupied < slot.capacity) {
        slot.occupied += 1;
        saveParkingSlots();
        alert(`Vehicle parked at slot ${slot.id}. Occupied: ${slot.occupied}/${slot.capacity}`);
        if (slot.occupied === slot.capacity) {
            alert(`Slot ${slot.id} is now full.`);
        }
        
        logout();
    }
}
```
The markArrived function finds the specified parking slot by slotId, checks if it has capacity, increments its occupied count, saves this updated state, alerts the user about the current occupancy, notifies if the slot is full, and then logs the user out by redirecting them to the login page.

```javascript
function findNearestSlot(gate) {
    /*

            */
}
```
The findNearestSlot function is used to determine and display the nearest available parking slot when a user arrives at a specific gate. It starts by calculating the shortest distance from the selected gate to all parking slots using Dijkstra's algorithm. Then, it iterates through the list of parking slots to find the closest one that isn't fully occupied. Once the nearest available slot is identified, the function updates the user interface by clearing any previous arrival buttons and displaying the nearest slot's ID, the distance from the gate, and a button for marking the arrival. If no slots are available, it informs the user that there are no available parking slots from the selected gate. This function is called when the user clicks on one of the gate buttons on the dashboard.

```javascript
function dijkstra(start) {
    /*

             */
}
```
The dijkstra function is used to find the shortest path from a starting node to all other nodes in a weighted graph. It initializes distances from the start node to all other nodes as infinity, with the distance to the start node itself set to zero. Using a priority queue, it processes nodes by the shortest known distance, updating the shortest paths to neighboring nodes as it goes. It continues this process until all nodes have been visited, ensuring the shortest path to each node is determined. The function returns an object containing the shortest distances from the start node to all other nodes in the graph.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Tech Stack

**FrontEnd:** HTML, CSS

**BackEnd** JavaScript

## FAQ

#### What is the purpose of the Parking Slot Management System?

The Parking Slot Management System is designed to efficiently manage parking slots by finding the nearest available slot for users based on their entry gate. It helps in reducing the time spent searching for parking and ensures optimal use of available parking spaces.

####  How do I log in to the system?

To log in, use the following credentials:

- Username: Admin
- Password: 123

#### How does the system find the nearest parking slot?

The system uses Dijkstra's algorithm to calculate the shortest distance from the selected entry gate to all available parking slots. It then selects the nearest slot that is not fully occupied.

#### What happens when I click the "Arrived" button?

When you click the "Arrived" button, the system marks the selected parking slot as occupied by incrementing its count. If the slot reaches its full capacity, it will no longer be available for new arrivals.

#### How is the parking slot status stored?

The status of each parking slot (occupied count) is stored using the browser's localStorage. This ensures that the data persists even if the page is refreshed or the browser is closed and reopened.

#### Can I log out after marking my arrival?

Yes, after marking your arrival, you can log out of the system. The occupancy status of the parking slots will remain updated in the localStorage.

#### How do I reset the parking slot status?

To reset the parking slot status, you can clear the browser's localStorage. This can be done through the browser's developer tools or settings.

#### What should I do if the nearest parking slot is full?

If the nearest parking slot is full, the system will automatically find and suggest the next nearest available slot.

#### How can I contribute to this project?

If you would like to contribute, please fork the repository, make your changes, and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

#### Who can I contact for support or questions?

For support or questions, please contact [teamZ6@gmail.com].

## Authors

- [@manuka8](https://github.com/manuka8)
- [@Apsara](https://github.com/Apsara2001)
- [@bingusala](https://github.com/Bingusala)
- [@userlasa](https://github.com/UserLasa73)
- [@RuwandiPerera](https://github.com/RuwandiPerera)
- [@Disitha395ra](https://github.com/Disitha395ra)

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)



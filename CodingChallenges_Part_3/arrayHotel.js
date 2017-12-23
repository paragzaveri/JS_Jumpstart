/*

Find Vacant Rooms - Challege - Part 1

-------------------------------------------


In this challenge, we'll be using an array to manage the occupancy of a hotel called The Array Hotel.

Each room in the hotel will be represented with a `"vacant"` or `"occupied"` string in the array. The **index** of the string in the array is the room number. 

For example, for a hotel with an occupancy array of `["occupied", "vacant", "occupied", "vacant"]`, we can determine that Rooms 0 and 2 are occupied and Rooms 1 and 3 are free.

Your job is to write a function called `findVacantRooms` to help the owner of the hotel find which rooms are vacant. This function should return an array of the room numbers that are vacant.


----------------------------------------------------------------

EXAMPLE:


- INPUT: findVacantRooms(["vacant", "occupied", "occupied", "vacant", "vacant"]);
- OUTPUT: [0,3,4] since those are the vacant rooms



-----------------------------------------------------------------


CHALLENGE 2: Find the cheapest vacant room

Assume now that instead of just "vacant" and "occupied", the occupancy array has the price of the room listed for the vacant rooms. For example, an example occupancy array could be as follows: `[112, "occupied", 150, 175, "occupied"]`.

This would mean that Rooms 0, 2 and 3 are available for stay at prices $112, $150 and $175 for the night. 

Make a function to help someone find the **cheapest** available room in the hotel. Return the room number and it's price.

----------------------------------------------------------------

EXAMPLE:

```js
- INPUT: findCheapestVacantRoom([112, "occupied", 150, 175, "occupied"])
- OUTPUT: [0, 112] // since the cheapest vacant room is Room 0 at $112/night.

- INPUT: findCheapestVacantRoom(["occupied", 820, "occupied", 700, 455, 722])
- OUTPUT: [4, 455] // since the cheapest vacant room is Room 4 at $455/night.
```


*/

// Write Code Below


function findVacantRooms(array){
	var roomNumbers = [];
	for (var i = 0; i < array.length; i++){
		if(array[i] !== "occupied"){
			roomNumbers.push(i);
		}
	}
	return roomNumbers;
}

function findCheapestVacantRoom(array){
	var cheapestRoom = [0,0];
	for (var i = 0; i < array.length; i++){
		if (array[i] !== "occupied"){

			if (cheapestRoom[1] !== 0 && array[i] <  cheapestRoom[1]){
				cheapestRoom[0] = i;
				cheapestRoom[1] = array[i];
			} else if (cheapestRoom[1] === 0) {
				cheapestRoom[0] = i;
				cheapestRoom[1] = array[i];
			}
		}

		if (cheapestRoom[0] === 0 && cheapestRoom[1] === 0) {
			cheapestRoom.pop();
			cheapestRoom.pop();
		}
	}
	return cheapestRoom;
}






































































































































































// describe('findVacantRooms', function(){
// 	it('findVacantRooms is a function', function(){
// 		expect(typeof findVacantRooms).toEqual('function');
// 	});

// 	it('findVacantRooms returns an Array', function(){
// 		expect(Array.isArray(findVacantRooms("codepen"))).toEqual(true);
// 	});

// 	it('findVacantRooms returns an array of vacant room numbers', function(){
// 		expect(findVacantRooms(['vacant', 'occupied', 'occupied', 'vacant', 'vacant'])).toEqual([0,3,4]);
// 	});

// 	it('findVacantRooms returns an empty array if all rooms are vacant', function(){
// 		expect(findVacantRooms(['occupied', 'occupied'])).toEqual([]);	
// 	});

// 	it('findVacantRooms adds the index number to the array if the room is vacant', function(){
// 		expect(findVacantRooms(['vacant', 'vacant', 'occupied', 'vacant'])).toEqual([0,1,3]);
// 	});

// });




// describe('findCheapestVacantRoom', function(){
// 	it('findCheapestVacantRoom is a function', function(){
// 		expect(typeof findCheapestVacantRoom).toEqual('function');
// 	});

// 	it('findCheapestVacantRoom returns an Array', function(){
// 		expect(Array.isArray(findCheapestVacantRoom("codepen"))).toEqual(true);
// 	});

// 	it('findCheapestVacantRoom returns an array with the room number and price of the room', function(){
// 		expect(findCheapestVacantRoom([112, 'occupied', 150, 175, 'occupied'])).toEqual([0,112]);
// 	});

// 	it('findCheapestVacantRoom returns an empty array if all rooms are occupied', function(){
// 		expect(findCheapestVacantRoom(['occupied', 'occupied', 'occupied', 'occupied'])).toEqual([]);
// 	});
// });
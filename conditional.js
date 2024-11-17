// the road trip planner
let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;
//check that there's enough room for everyone
if( seatsInCar >= passengers && infantSeats >= infants ){
console.log( 'ready for road trip' );
if( fullTank ){
    console.log( 'ready to hit the highway' );
} //end fullTank
else{
    console.log( 'must gas up before on Interstate' );
}
} //end enough seats & gas
else{
console.log( 'not ready. check car, passengers, and equipment' );
} // end not enough seats
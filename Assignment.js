



// calculate Kilometer to Meter

function kilometerToMeter(kilometer) {
    if (Math.sign(kilometer) <= 0){
        console.log("Please input positive vale");
        return meter; 
    }   
    else{
        let meter = kilometer * 1000;
        return meter;
    }
}


// Calculate Budget Cost

    let watchPrice = 50;
    let phonePrice = 100;
    let laptopPrice = 500;

function budgetCalculator(watch, phone, laptop) {
    if (Math.sign(watch, phone, laptop) < 0) {
        console.log("Please input positive vale")
        return; 
    }
    else{
        let totalWatchPrice = watchPrice * watch;
        let totalPhonePrice = phonePrice * phone;
        let totalLaptopPrice = laptopPrice * laptop;

        let totalBudget = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

        return totalBudget
    }
}




// calculation Hotel Cost

    let firstTenDaysPerNightRate = 100;
    let secondTenDaysPerNightRate = 80;
    let remainingDaysPerNightRate = 50;

    function hotelCost(days) {
        if (days <= 0) {
            console.log("Please input positive day");
            return;
            
        }
        else{
            if (days <= 10) {
                var totalRent = firstTenDaysPerNightRate * days;
                return totalRent;
            }
        else{
            if (days <= 20) {
                var firstTenDaysRent = firstTenDaysPerNightRate * 10;
                var remainingDaysRent = secondTenDaysPerNightRate * (days-10)
                var totalRent= firstTenDaysRent + remainingDaysRent;
                return totalRent;
                
            }
        else{
            var firstTenDaysRent = firstTenDaysPerNightRate * 10;
            var secondTenDaysPerNightRent = secondTenDaysPerNightRate * 10;
            var remainingDaysRent = remainingDaysPerNightRate * (days-20);
            var totalRent = firstTenDaysRent + secondTenDaysPerNightRent + remainingDaysRent;
            return totalRent;       
            
        }
        }
        }
        
    }

    
// Find the Mega Friend

   
    let megaFriends = [];
function megaFriend() {
        let maxLength = 0;
    for (let i = 0; i < friends.length; i++) {
       if (maxLength<friends[i].length) {
           maxLength = friends[i].length;   
       }        
    }    
    for (let m = 0; m < friends.length; m++) {
        if (friends[m].length == maxLength) {
            megaFriends.push(friends[m]);           
        }
    }
    if(megaFriends.length == 1){
        return megaFriends[0]
    }
    else{
        return megaFriends;
    }
}
let friends = ["Ataya", "Fakhrul", "hannan", "Suvo"];
let result = megaFriend(friends);
console.log(result);
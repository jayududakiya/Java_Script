// // Function to calculate electricity cost based on provided rate slabs
// function calculateElectricityCost(unitsConsumed) {
//     // Define the rates for different slab ranges in rupees
//     const rateSlabs = [
//         { min: 0, max: 50, rate: 3.05 },
//         { min: 51, max: 100, rate: 3.5 },
//         { min: 101, max: 250, rate: 4.15 },
//         { min: 251, max: Infinity, rate: 5.20 }
//     ];

//     let totalCost = 0;

//     // Iterate through each slab range
//     for (let i = 0; i < rateSlabs.length; i++) {
//         const slab = rateSlabs[i];

//         // Calculate the units within this slab range
//         let unitsInThisSlab = Math.min(unitsConsumed, slab.max) - slab.min;

//         // If unitsInThisSlab is negative, it means we're beyond this slab range
//         if (unitsInThisSlab <= 0) continue;

//         // Calculate the cost for this slab
//         let costForThisSlab = unitsInThisSlab * slab.rate;

//         // Add the cost to the total
//         totalCost += costForThisSlab;

//         // Update unitsConsumed for the next iteration
//         unitsConsumed -= unitsInThisSlab;

//         // If unitsConsumed is zero or less, we've covered all the units
//         if (unitsConsumed <= 0) break;
//     }

//     return totalCost;
// }

// // Input units consumed
// const unitsConsumed = 80;

// // Calculate the electricity cost
// const cost = calculateElectricityCost(unitsConsumed);

// // Output the result
// console.log("Electricity cost for", unitsConsumed, "units is ₹", cost.toFixed(2));


// Function to calculate electricity cost based on government billing method
function calculateElectricityCost(unitsConsumed) {
    let totalCost = 0;

    // First 50 units
    if (unitsConsumed <= 50) {
        totalCost += unitsConsumed * 2.65;
        return totalCost;
    } else {
        totalCost += 50 * 2.65;
        unitsConsumed -= 50;
    }

    // Next 50 units
    if (unitsConsumed <= 50) {
        totalCost += unitsConsumed * 3.10;
        return totalCost;
    } else {
        totalCost += 50 * 3.10;
        unitsConsumed -= 50;
    }

    // Next 150 units
    if (unitsConsumed <= 150) {
        totalCost += unitsConsumed * 3.75;
        return totalCost;
    } else {
        totalCost += 150 * 3.75;
        unitsConsumed -= 150;
    }

    // Remaining units
    totalCost += unitsConsumed * 4.90;

    return totalCost;
}

// Input units consumed
const unitsConsumed = 80;

// Calculate the electricity cost
const cost = calculateElectricityCost(unitsConsumed);

// Output the result
console.log("Electricity cost for", unitsConsumed, "units is ₹", cost.toFixed(2));

//Basic Syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // month = march so it execute and break tells the switch to stop completely.
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

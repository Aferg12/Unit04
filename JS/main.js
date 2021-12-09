function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min; 
}



function getMonthName(month){
    let name 
    switch (month) {
        case 1:
          name = "January"
            break;
            case 2:
                name = "February"
                  break;
          case 3:
             name = "March"
             break;
             case 4:
                name = "April"
                break;
                case 5:
                    name = "May"
                    break;
                    case 6:
                        name = "June"
                        break;
                        case 7:
                            name = "July"
                            break;
                            case 8:
                            name = "August"
                            break;
                            case 9:
                                name = "September"
                                break;
                                case 10:
                                    name = "October"
                                    break;
            case 11:
             name = "November"
             break;
             case 12:
             name = "December"
             break;
                  default:
                      name = "Not a Month"
            break;
    }
    return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = "You've won a vacation to the Caribbean!"
            break;
        case 2:
            message = "Your love of your life will suddenly appear in front of you!"
            break;
        case 3:
            message = "Be featured in a Hallmark Movie"
            break;
        case 4:
            message = "Become a judge on The Voice"
            break; 
        case 5:
            message = "Win 1.5 million dollars from random Idaho lottery"
            break;
        default:
            message = "Error Occurred"
            break;
        }
        return message
}


let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1,5)
let day = getRandomIntInclusive(1,30)

const monthName = getMonthName(month)
fate = getFortune(fate)

const fortuneRevealed = `On ${monthName} ${day} , you will ${fate}`
document.querySelector('#fortune').innerText = fortuneRevealed
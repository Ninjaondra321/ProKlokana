var output = 0


function make_branches(input) {
    let branches = []
    if (input.reduce((a, b) => a + b, 0) === 0) {
        output += 1
    } else {
        for (let i = 0; i < input.length; i++) {
            
            if (input[i] !== 0) {
                let input_copy = Array.from(input)
                input_copy[i] -= 1
                
                branches.push(input_copy)
            }
        }
    
    }


    let len = branches.length

    for (let i = 0; i < len; i++) {
        make_branches(branches[i])
        
    }
}

var factorial = n => (n <= 0) ? 1: n * factorial(n - 1);

function calculate_prsteny_albi(input) {
    largestNumber = Math.max(... input)


    let runningTotal = 1

    for (let i = 0; i < input.reduce((partialSum, a) => partialSum + a, 0) - largestNumber; i++) {
        let pakVymaz = largestNumber + i
        runningTotal *= (largestNumber + i)  
        console.log('Runing total -- multiplied by: ' + pakVymaz + "což je: " + runningTotal)
    }

    let delitel = 0

    for (let i = 0; i < input.length; i++) {
        delitel += factorial(input[i])
        console.log(delitel)
    }
    
    delitel -= factorial(largestNumber)

    console.info("Nahore: " + runningTotal)
    console.info("Dole: " + delitel)


    runningTotal = runningTotal / delitel
    console.warn(runningTotal)

    return runningTotal


}


function test_kombinatoriky_moje (input) {
    console.log(input)

    let soucet = input.reduce((partialSum, a) => partialSum + a, 0);

    console.log(soucet)

    soucet = factorial(soucet)

    for (let i = 0; i < input.length; i++) {
        soucet /= factorial(input[i])
    }
    


    document.getElementById('vysledek-albi').value = soucet
    return soucet
    
}



function calculate_prsteny () {
    let raw_input = document.getElementById('klokan_prsteny_input').value.split(' ')
    output = 0 
    

    
    var input = []
    for (let i = 0; i < raw_input.length; i++) {
        input.push(parseInt(raw_input[i]))
    }

    
    // document.getElementById('vysledek-albi').value = test_kombinatoriky_moje(input)
    test_kombinatoriky_moje(input)

    console.log(input)
    make_branches(input)


    console.error(output)

    document.getElementById('vysledek-bruteforce').value = output


}
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



function calculate_prsteny () {
    let raw_input = document.getElementById('klokan_prsteny_input').value.split(' ')
    var input = []

    output = 0 


    for (let i = 0; i < raw_input.length; i++) {
        input.push(parseInt(raw_input[i]))
    }

    console.log(input)
    make_branches(input)


    console.error(output)

    document.getElementById('vysledek').value = output


}
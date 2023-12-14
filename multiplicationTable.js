// Program to Display the Multiplication Table

function multiplicationTable(number, n){

    for( let i=1; i<=n; i++){
        const result = number * i ;
        console.log(`${number} x ${i} = ${result}`)
    }
}
multiplicationTable(5, 10)

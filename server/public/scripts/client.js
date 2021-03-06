//document.ready
$(ready);

//ready function
function ready() {
    //on reload => getResults
    getResults();
    //clear inputs
    $('#clear').on('click', clearInputs);
    //grab input
    $('#submit').on('click', grabInputs);
    //add operator
    $('.operator').on('click', addOperator);
}

let operator;
// adding operator
function addOperator() {
    //grab button's text
    operator = $(this).text();
    //return operator so we get its value
    return operator;
}

function grabInputs() {
    //currentCalc object
    let currentObj = {
        num1: Number($('#num1').val()),
        operator: operator,
        num2: Number($('#num2').val()),
    };

    //stretch goal
    if (!num1 || !num2 || !operator) {
        alert('We did a stretch goal!');
    }

    // POST => sending currentObj to server.js
    $.ajax({
        url: '/home',
        method: 'POST',
        data: currentObj,
    })
        .then(function (response) {
            console.log(response);
            //create currentCalc object
            getResults();

            //display to DOM
            render(response);

            //clear input fields
            clearInputs();
        })
        .catch(function (error) {
            console.log(`ERROR in /POST request`);
        });
}

//clear inputs
function clearInputs() {
    $('input').val('');
}

//GET request to server
function getResults() {
    // GET => retrieve newObj
    $.ajax({
        url: '/home',
        method: 'GET',
    }) //if sucessful, then...
        .then((response) => {
            console.log(`Received a response from server!`);
            // display to DOM
            render(response);
        })
        .catch((err) => {
            //404, 500, etc
            console.log(err);
            alert('ERROR IN GET /home');
        });
}

//display to DOM
function render(response) {
    if (response.length === 0) {
        console.log(`Nothing in the array yet!`);
    } else {
        //empty DOM
        $('ul').empty();

        //loop and append to DOM
        for (let i of response) {
            // include the i.answer
            let li = `<li>${i.num1} ${i.operator} ${i.num2} = ${i.answer}</li>`;
            // don't use 'main' for targeting the append element => returns undefined
            $('ul').append(li);
        }
    }
}

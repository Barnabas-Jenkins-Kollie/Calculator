const display = document.getElementById('display')

function append_to_display(input){
    display.value += input
}

function calculate(){
    try {
        display.value =  eval(display.value) 
    } catch (error) {
        display.value = 'Error'
    }

}

function clear_display(){
    display.value = ''

}
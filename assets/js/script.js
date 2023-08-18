var currentDate = document.querySelector('#currentDate');
var currentHour = dayjs().format('H');
// var scheduel = localStorage.getItem() || [];

function dateTime(){
    var time = setInterval(function () {
        currentHour = dayjs().format('H');
        currentDate.textContent = "It is currently: " + dayjs().format('MMM D, h:mm a');

    },1000);

}
dateTime();


// saves the inputed note
document.addEventListener('click', {
});

$('.timeBlock').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(blockHour);

    if (blockHour < currentHour){
        $(this).addClass('past');
    } else if (blockHour == currentHour){
        $(this).removeClass('past');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');

    }
})

$('.save').on('click', function(){
    var values = $(this).siblings('.description').val();
    // var values = document.querySelectorAll('.description');
    // console.log(values.value);
    var currentHour = $(this).parent().attr('id');
    console.log(currentHour);
    localStorage.setItem(currentHour, values);

})


$('#timeBlock-9 .description').val(localStorage.getItem('timeBlock-9'))
$('#timeBlock-10 .description').val(localStorage.getItem('timeBlock-10'))
$('#timeBlock-11 .description').val(localStorage.getItem('timeBlock-11'))
$('#timeBlock-12 .description').val(localStorage.getItem('timeBlock-12'))
$('#timeBlock-13 .description').val(localStorage.getItem('timeBlock-13'))
$('#timeBlock-14 .description').val(localStorage.getItem('timeBlock-14'))
$('#timeBlock-15 .description').val(localStorage.getItem('timeBlock-15'))
$('#timeBlock-16 .description').val(localStorage.getItem('timeBlock-16'))
$('#timeBlock-17 .description').val(localStorage.getItem('timeBlock-17'))
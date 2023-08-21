var currentDate = document.querySelector('#currentDate');
var currentHour = dayjs().format('H');
// var scheduel = localStorage.getItem() || [];

// sets the date and time
function dateTime(){
    var time = setInterval(function () {
        currentHour = dayjs().format('H');
        currentDate.textContent = "It is currently: " + dayjs().format('MMM D, h:mm a');

    },1000);

}
dateTime();

// chenges the bgnd colors for the tiles depending on time
$('.timeBlock').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    console.log('blockHour ' + blockHour);

    if (blockHour < currentHour){
        $(this).addClass('past');
        $(this).children().eq(2).addClass('past-btn');
    } else if (blockHour == currentHour){
        $(this).removeClass('past');
        $(this).children().eq(2).removeClass('past-btn');
        $(this).addClass('present');
        $(this).children().eq(2).addClass('present-btn');
    } else {
        $(this).removeClass('past');
        $(this).children().eq(2).removeClass('past-btn');
        $(this).removeClass('present');
        $(this).children().eq(2).addClass('present-btn');
        $(this).addClass('future');
        $(this).children().eq(2).addClass('future-btn');

    }
})

// saves the inputed note
$('.save').on('click', function(){
    var values = $(this).siblings('.description').val();
    var currentHour = $(this).parent().attr('id');
    localStorage.setItem(currentHour, values);

})

// Retrieves the data from local storage for the input fields
$('#timeBlock-9 .description').val(localStorage.getItem('timeBlock-9'))
$('#timeBlock-10 .description').val(localStorage.getItem('timeBlock-10'))
$('#timeBlock-11 .description').val(localStorage.getItem('timeBlock-11'))
$('#timeBlock-12 .description').val(localStorage.getItem('timeBlock-12'))
$('#timeBlock-13 .description').val(localStorage.getItem('timeBlock-13'))
$('#timeBlock-14 .description').val(localStorage.getItem('timeBlock-14'))
$('#timeBlock-15 .description').val(localStorage.getItem('timeBlock-15'))
$('#timeBlock-16 .description').val(localStorage.getItem('timeBlock-16'))
$('#timeBlock-17 .description').val(localStorage.getItem('timeBlock-17'))
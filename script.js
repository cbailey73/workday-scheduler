function currentTime () {
  var today = dayjs();
  $('#current-time').text(today.format('dddd, MMMM D, h A'));
}

setInterval(currentTime, 10);

function init() {
  var hour1 = localStorage.getItem('hour-1');
  $('#hour-1').children().eq(1).text(hour1);
  var hour2 = localStorage.getItem('hour-2');
  $('#hour-2').children().eq(1).text(hour2);
  var hour3 = localStorage.getItem('hour-3');
  $('#hour-3').children().eq(1).text(hour3);
  var hour4 = localStorage.getItem('hour-4');
  $('#hour-4').children().eq(1).text(hour4);
  var hour5 = localStorage.getItem('hour-5');
  $('#hour-5').children().eq(1).text(hour5);
  var hour6 = localStorage.getItem('hour-6');
  $('#hour-6').children().eq(1).text(hour6);
  var hour7 = localStorage.getItem('hour-7');
  $('#hour-7').children().eq(1).text(hour7);
  var hour8 = localStorage.getItem('hour-8');
  $('#hour-8').children().eq(1).text(hour8);
  var hour9 = localStorage.getItem('hour-9');
  $('#hour-9').children().eq(1).text(hour9);
  var hour10 = localStorage.getItem('hour-10');
  $('#hour-10').children().eq(1).text(hour10);
  var hour11 = localStorage.getItem('hour-11');
  $('#hour-11').children().eq(1).text(hour11);
  var hour12 = localStorage.getItem('hour-12');
  $('#hour-12').children().eq(1).text(hour12);
  var hour13 = localStorage.getItem('hour-13');
  $('#hour-13').children().eq(1).text(hour13);
  var hour14 = localStorage.getItem('hour-14');
  $('#hour-14').children().eq(1).text(hour14);
  var hour15 = localStorage.getItem('hour-15');
  $('#hour-15').children().eq(1).text(hour15);
  var hour16 = localStorage.getItem('hour-16');
  $('#hour-16').children().eq(1).text(hour16);
  var hour17 = localStorage.getItem('hour-17');
  $('#hour-17').children().eq(1).text(hour17);
  var hour18 = localStorage.getItem('hour-18');
  $('#hour-18').children().eq(1).text(hour18);
  var hour19 = localStorage.getItem('hour-19');
  $('#hour-19').children().eq(1).text(hour19);
  var hour20 = localStorage.getItem('hour-20');
  $('#hour-20').children().eq(1).text(hour20);
  var hour21 = localStorage.getItem('hour-21');
  $('#hour-21').children().eq(1).text(hour21);
  var hour22 = localStorage.getItem('hour-22');
  $('#hour-22').children().eq(1).text(hour22);
  var hour23 = localStorage.getItem('hour-23');
  $('#hour-23').children().eq(1).text(hour23);
  var hour24 = localStorage.getItem('hour-24');
  $('#hour-24').children().eq(1).text(hour24);
}

$(function () {
  var today = dayjs();
  var timeNow = parseInt(today.format('HH'));
  $('.time-block').each(function() {
    var timeBlock = $(this).attr('id').split('-')[1];
    if (timeNow == timeBlock) {
      $(this).addClass('present');
    } else if (timeNow < timeBlock) {
      $(this).removeClass('present');
      $(this).addClass('future');
    } else if (timeNow > timeBlock) {
      $(this).removeClass('future');
      $(this).addClass('past');
    }
  })
});

function saveActivity(event) {
  event.preventDefault();
  var eventContent = $(this).siblings('.description').val();
  var eventTime = $(this).parent().attr('id');
  localStorage.setItem(eventTime, eventContent);
}

$('.saveBtn').on('click', saveActivity);

init();

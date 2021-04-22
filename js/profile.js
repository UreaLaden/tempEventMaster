var calendarEl = $('#calendar');

calendarEl.fullCalendar({
// header: 
//     {
//         // left: 'prev,next today',
//         // center: 'title',
//         // right: 'listMonth,listWeek,listDay'
//     },
    defaultView: 'listWeek',
    events: [
    {
        title: 'All Day Event',
        start: '2021-04-20'
    },
    {
        title: 'Long Event',
        start: '2020-04-21',
        end: '2020-04-24'
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: '2020-12-09T16:00:00'
    }]});

    // TODO: ON CLICK SHOULD HIDE MEMBER BTN AND SHOW ADD MEMBER FORM
 $('.member-btn').click(function(){  
     $('#member-btn').toggle();
     $('#member-form').toggle();
    });
 

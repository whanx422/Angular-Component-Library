// Modals JS 
$('#langPopUp').on('shown.bs.modal', function () {
  $('#langModalBtn').trigger('focus')
})

// Login Invalid Alert
window.setTimeout(function() {
$("#login-invalid-alert").fadeTo(500, 0) 
}, 4000);

// Maintain Sidebar Scroll Position
if (typeof localStorage !== 'undefined') {
  if (localStorage.getItem('sidebar-left-position') !== null) {
      var initialPosition = localStorage.getItem('sidebar-left-position'),
          sidebarLeft = document.querySelector('#sidebar-left .nano-content');
      
      sidebarLeft.scrollTop = initialPosition;
  }
}

// Toggle Password Visibility
$(function(){

$('#togglePassword').click(function(){
   
    if($(this).hasClass('fa-eye-slash')){
       
      $(this).removeClass('fa-eye-slash');
      
      $(this).addClass('fa-eye');
      
      $('#inputPassword').attr('type','text');
        
    }else{
     
      $(this).removeClass('fa-eye');
      
      $(this).addClass('fa-eye-slash');  
      
      $('#inputPassword').attr('type','password');
    }
});
});


// Date Range Picker 
$(function () {
$('input[name="daterange"]').daterangepicker({
  autoUpdateInput: false,
  opens: 'right',
  applyButtonClasses: 'btn-darkgrey',
  cancelButtonClasses: 'btn-lightgrey',
  showDropdowns: true,
  minYear: 1901,
  maxYear: parseInt(moment().format('YYYY'), 10)
}, function (start, end, label) {
  console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});

$('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
  $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
});

$('input[name="daterange"]').on('cancel.daterangepicker', function (ev, picker) {
  $(this).val('');
});

$('input[name="datepicker"]').daterangepicker({
  singleDatePicker: true,
  autoUpdateInput: false,
  opens: 'left',
  applyButtonClasses: 'btn-darkgrey',
  cancelButtonClasses: 'btn-lightgrey',
  showDropdowns: true,
  minYear: 1901,
  maxYear: parseInt(moment().format('YYYY'), 10)
}, function (start, end, label) {
  console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});

});


//jQuery Code which Select/Deselect Multiple Checkboxes
jQuery(function($) {
$('body').on('click', '#selectall', function() {
    $('.singlechkbox').prop('checked', this.checked);
});

$('body').on('click', '.singlechkbox', function() {
    if($('.singlechkbox').length == $('.singlechkbox:checked').length) {
        $('#selectall').prop('checked', true);
    } else {
        $("#selectall").prop('checked', false);
    }

});
});   


// select with filter 
$(function () {
$('select.selectfilter').selectize({
  plugins: ['no_results'],
});
});

// Input Group with Prepend country code selection
$('#country_code').selectize({
valueField: 'id',
searchField: 'title',
options: [{
      id: 1,
      title: 'Malaysia',
      code: '60'      },
  {
      id: 2,
      title: 'Singapore',
      code: '65'      },
  {
      id: 3,
      title: 'Thailand',
      code: '66'      },
],
items: [
  2  ],
render: {
  option: function (data, escape) {
      return '<div class="option">' +'<span class="">'+ escape(data.title) + '</span>' +'<span class=""> (+'+ escape(data.code) + ' )</span>' +              '</div>';
  },
  item: function (data, escape) {
      return '<div class="item">' + escape(data.code) + '</div>';
  }
},
});

//Single select with option subtext
$('#single_option_template').selectize({
valueField: 'id',
searchField: 'title',
options: [{
    id: 1,
    title: 'Text',
    des: 'Having or using both alphabetical and numerical symbols.'
},
{
    id: 2,
    title: 'Phone',
    des: 'Will format the numbers for a phone number for your country'
},
{
    id: 3,
    title: 'Email',
    des: 'Will format the email address.'
},
{
  id: 4,
  title: 'Title1',
  des: 'Short Descriptions'
},
{
  id: 5,
  title: 'Title2',
  des: 'Short Descriptions'
},
{
  id: 6,
  title: 'Title3',
  des: 'Short Descriptions'
},
],
render: {
option: function (data, escape) {
    return '<div class="option">' +
        '<span class="select_title">' + escape(data.title) + '</span>' + '<br>' +
        '<span class="select_description">' + escape(data.des) + '</span>' +
        '</div>';
},
item: function (data, escape) {
    return '<div class="item">' + escape(data.title) + '</div>';
}
},
});

//multiple select with option subtext
$('#multi_option_template').selectize({
maxItems: null,
valueField: 'id',
searchField: 'title',
options: [{
    id: 1,
    title: 'Text',
    des: 'Having or using both alphabetical and numerical symbols.'
},
{
    id: 2,
    title: 'Phone',
    des: 'Will format the numbers for a phone number for your country'
},
{
    id: 3,
    title: 'Email',
    des: 'Will format the email address.'
},
],
render: {
option: function (data, escape) {
    return '<div class="option">' +
        '<span class="select_title">' + escape(data.title) + '</span>' + '<br>' +
        '<span class="select_description">' + escape(data.des) + '</span>' +
        '</div>';
},
item: function (data, escape) {
    return '<div class="item">' + escape(data.title) + '</div>';
}
},
});


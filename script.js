let lpages=['.page2', '.page3', '.page4', '.page5'];
let lhide=['.page1', '.page2', '.page3', '.page4', '.page5'];
let l =-1;

// Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Something went wrong!',
//     footer: '<a href="">Why do I have this issue?</a>'
//   })

$('.next').click(function(){
l++;
$(lhide[l]).hide();
$(lpages[l]).show();
});
$('.prev').click(function(){
    l--;
    $(lhide[4]).hide();
    $(lpages[l]).show();
});

var phoneMask = IMask(
    document.getElementById('phone'), {
      mask: '+{880}0000000000'
    });
var phoneMask2 = IMask(
        document.getElementById('lphone'), {
          mask: '+{880}0000000000'
});

$(document).ready(function(){
    $('select').formSelect();
});

// Reg Form 
$('#reg').on('submit', e=> {
    e.preventDefault();
    let d = new Date();
    d = d.toString();
    let data = {
        name: $('#reg')[0].username.value,
        phone: $('#reg')[0].phone.value,
        college: $('#reg')[0].college.value,
        city: $('#reg')[0].city.value,
        gender: $('#reg')[0].gender.value,
        live: {
            score: 0,
            exam: 0
        },
        practice: {
            score: 0,
            exam: 0,
        },
        notification: {
            status: true,
            notifications: {
                key1235:{
                    text: 'Welcome to Britto!',
                    time: d
                }
            }

        }
    }
    db.ref('britto/users/'+$('#reg')[0].phone.value+'/phone').once('value', snap=> {
        if(snap.exists()){
// console.log('Phone number was registered before!');
Swal.fire(
    'রেজিস্ট্রেশন করা হয়েছিল আগে!',
    'এখন লগইন করো!',
    'error'
  );
        }else{
            db.ref('britto/users/'+ $('#reg')[0].phone.value).update(data);
            Swal.fire(
                'রেজিস্ট্রেশন সম্পন্ন!',
                'এখন লগইন করো!',
                'success'
              );
            $(lhide[4]).hide();
            $(lhide[3]).show();
        }
    });
    
});


$('#login').on('submit', e=> {
    e.preventDefault();
db.ref('britto/users/'+$('#login')[0].lphone.value+'/phone').once('value', snap=> {
        if(snap.exists()){
            Swal.fire(
                'লগইন সম্পন্ন!',
                '',
                'success'
              );
            $(lhide[4]).hide();
            $(lhide[3]).show();
        }else{
            Swal.fire(
                'রেজিস্ট্রেশন করা হয়নি।',
                'রেজিস্ট্রেশন করো!',
                'error'
              );
     }
});
})
// document.querySelector(".btn").addEventListener('click',function(){
//     alert("Thanks")
//     let name = document.getElementById("name").value
//     let addres = document.getElementById("address").value
//     let mail = document.getElementById("email").value
//     // let name = document.getElementById("name").value
//     // let name = document.getElementById("name").value
//     // let name = document.getElementById("name").value
//     // let name = document.getElementById("name").value
//     // let name = document.getElementById("name").value
//     // window.location = "output.html"
//     document.getElementById("nm").innerHTML = name;
//     document.getElementById("ad").innerHTML = addres;
//     document.getElementById("ma").innerHTML = mail;
    
// })



const querry = document.querySelector(".btn")//.addEventListener('click',myFunction)

function myFunction(){
    //alert("Thanks!!!")
    // Personal Data Input
     let fullname = document.getElementById("name").value
     let addres = document.getElementById("address").value
     let pno = document.getElementById("phone-no").value
     let mail = document.getElementById("email").value
     // Education Input
     let uni = document.getElementById("uni").value
     let cert = document.getElementById("deg").value
     let second = document.getElementById("sec").value
     let cert2 = document.getElementById("deg2").value
     // Skills Input
     let skil1 = document.getElementById("skill1").value
     let skil2 = document.getElementById("skill2").value
     let skil3 = document.getElementById("skill3").value
     let skil4 = document.getElementById("skill4").value
     let skil5 = document.getElementById("skill5").value
     //Working Experience input
     let work1 = document.getElementById("working1").value
     let work2 = document.getElementById("working2").value
     let work3 = document.getElementById("working3").value
     let work4 = document.getElementById("working4").value
     let work5 = document.getElementById("working5").value
     //Achievements and Responsibilites Input
     let ach1 = document.getElementById("achiev1").value
     let ach2 = document.getElementById("achiev2").value
     let ach3 = document.getElementById("achiev3").value
     let ach4 = document.getElementById("achiev4").value
     let ach5 = document.getElementById("achiev5").value
     //Professional Certificate Input
     let pro1 = document.getElementById("profe1").value
     let pro2 = document.getElementById("profe2").value
     let pro3 = document.getElementById("profe3").value
     let pro4 = document.getElementById("profe4").value
     let pro5 = document.getElementById("profe5").value
     // Hobbies & Interest Input
     let hob1 = document.getElementById("hobbies1").value
     let hob2 = document.getElementById("hobbies2").value
     let hob3 = document.getElementById("hobbies3").value

     alert("Thanks")
     let ct = setTimeout(msg(),3000)


     // Personal Data Output
     document.getElementById("nm").innerHTML = fullname;
     document.getElementById("ad").innerHTML = addres;
     document.getElementById("number").innerHTML = pno;
     document.getElementById("ma").innerHTML = mail;
     //Education Output
     document.getElementById("univer").innerHTML = uni;
     document.getElementById("cer").innerHTML = cert;
     document.getElementById("secon").innerHTML = second;
     document.getElementById("cer2").innerHTML = cert2;
     //Skills Output
     document.getElementById("skill1").innerHTML = skil1;
     document.getElementById("skill2").innerHTML = skil2;
     document.getElementById("skill3").innerHTML = skil3;
     document.getElementById("skill4").innerHTML = skil4;
     document.getElementById("skill5").innerHTML = skil5;
     //Working Experience Output
     document.getElementById("wk1").innerHTML = work1;
     document.getElementById("wk2").innerHTML = work2;
     document.getElementById("wk3").innerHTML = work3;
     document.getElementById("wk4").innerHTML = work4;
     document.getElementById("wk5").innerHTML = work5;
     //Achievements and Responsibilites Output
     document.getElementById("ar1").innerHTML = ach1;
     document.getElementById("ar2").innerHTML = ach2;
     document.getElementById("ar3").innerHTML = ach3;
     document.getElementById("ar4").innerHTML = ach4;
     document.getElementById("ar5").innerHTML = ach5;
     //Professional Certificate Output
     document.getElementById("pc1").innerHTML = pro1;
     document.getElementById("pc2").innerHTML = pro2;
     document.getElementById("pc3").innerHTML = pro3;
     document.getElementById("pc4").innerHTML = pro4;
     document.getElementById("pc5").innerHTML = pro5;
     //Hobbies & Interest Output
     document.getElementById("hob1").innerHTML = hob1;
     document.getElementById("hob2").innerHTML = hob2;
     document.getElementById("hob3").innerHTML = hob3;


    console.log(fullname)
    console.log(addres)
    console.log(mail)

     
}


function msg(){
    //alert("Thanks")
    window.location="http://127.0.0.1:5500/output.html"
}

querry.addEventListener('click',myFunction)


// function myFunction(){
//     document.getElementById("nm").innerHTML = fullname;
//     document.getElementById("ad").innerHTML = addres;
//     document.getElementById("number").innerHTML = pno;
//     document.getElementById("ma").innerHTML = mail;
//     document.getElementById("univer").innerHTML = uni;
//     document.getElementById("cer").innerHTML = cert;
//     document.getElementById("secon").innerHTML = second;
//     document.getElementById("cer2").innerHTML = cert2;
//     document.getElementById("skill1").innerHTML = skil1;
//     document.getElementById("skill2").innerHTML = skil2;
//     document.getElementById("skill3").innerHTML = skil3;
//     document.getElementById("skill4").innerHTML = skil4;
//     document.getElementById("skill5").innerHTML = skil5;

//     document.getElementById("wk1").innerHTML = work1;
//     document.getElementById("wk2").innerHTML = work2;
//     document.getElementById("wk3").innerHTML = work3;
//     document.getElementById("wk4").innerHTML = work4;
//     document.getElementById("wk5").innerHTML = work5;

//     document.getElementById("ar1").innerHTML = ach1;
//     document.getElementById("ar2").innerHTML = ach2;
//     document.getElementById("ar3").innerHTML = ach3;
//     document.getElementById("ar4").innerHTML = ach4;
//     document.getElementById("ar5").innerHTML = ach5;

//     document.getElementById("pc1").innerHTML = pro1;
//     document.getElementById("pc2").innerHTML = pro2;
//     document.getElementById("pc3").innerHTML = pro3;
//     document.getElementById("pc4").innerHTML = pro4;
//     document.getElementById("pc5").innerHTML = pro5;

//     document.getElementById("hob1").innerHTML = hob1;
//     document.getElementById("hob2").innerHTML = hob2;
//     document.getElementById("hob3").innerHTML = hob3;
// }
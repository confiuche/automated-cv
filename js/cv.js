const generateCv = document.querySelector(".btnGenerate")

function myCv(){
    //alert("Thanks!!!")
    // Personal Data Input
     let fullname = document.querySelector(".name").value
     let addres = document.querySelector(".address").value
     let pno = document.querySelector(".phone-no").value
     let mail = document.querySelector(".email").value

     // Education Data Input
     let schname1 = document.querySelector(".sch1").value
     let year1 = document.querySelector(".yr1").value
     let degree1 = document.querySelector(".dg1").value
     let schname2 = document.querySelector(".sch2").value
     let year2 = document.querySelector(".yr2").value
     let degree2 = document.querySelector(".dg2").value



     // Personal Data Output
     document.querySelector(".pp").innerHTML=""
     document.getElementById("name").innerHTML = fullname;
     document.getElementById("address").innerHTML = addres;
     document.getElementById("phone-no").innerHTML = pno;
     document.getElementById("email").innerHTML = mail;

     // Personal Data Output
     document.querySelector("#sch1").innerHTML=schname1
     document.getElementById("schyr1").innerHTML = year1;
     document.getElementById("degr1").innerHTML = degree1;
     document.getElementById("sch2").innerHTML = schname2;
     document.getElementById("schyr2").innerHTML = year2;
     document.getElementById("degr2").innerHTML = degree2;

     document.querySelector(".btnGenerate").style.display="none"
     document.querySelector(".btnDownload").style.display="block"
}
generateCv.addEventListener('click',myCv);
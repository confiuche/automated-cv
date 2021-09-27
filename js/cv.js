const generateCv = document.querySelector(".btnGenerate")

function myCv(){
    //alert("Thanks!!!")
    // Personal Data Input
     let fullname = document.querySelector(".name").value
     let addres = document.querySelector(".address").value
     let pno = document.querySelector(".phone-no").value
     let mail = document.querySelector(".email").value

     // Personal Data Output
     document.querySelector(".pp").innerHTML=""
     document.getElementById("name").innerHTML = fullname;
     document.getElementById("address").innerHTML = addres;
     document.getElementById("phone-no").innerHTML = pno;
     document.getElementById("email").innerHTML = mail;
     


     //Objective Input
     let objective = document.querySelector(".obj").value;

     //Objective Output
     document.getElementById("objOutput").innerHTML = objective;




     // Education Data Input

     //Tertiary output
     let schname1 = document.querySelector(".sch1").value
     let year1 = document.querySelector(".yr1").value
     let degree1 = document.querySelector(".dg1").value
     let schname2 = document.querySelector(".sch2").value
     let year2 = document.querySelector(".yr2").value
     let degree2 = document.querySelector(".dg2").value

     // Personal Data Output

     //Tertiary output
     document.querySelector("#sch1").innerHTML=schname1
     document.getElementById("schyr1").innerHTML = year1;
     document.getElementById("degr1").innerHTML = degree1;
     document.getElementById("sch2").innerHTML = schname2;
     document.getElementById("schyr2").innerHTML = year2;
     document.getElementById("degr2").innerHTML = degree2;



     //Working Experience
     


     document.querySelector(".btnGenerate").style.display="none"
     document.querySelector(".btnDownload").style.display="block"
}
generateCv.addEventListener('click',myCv);



//Working Experience Creation Form
function workForm(){
    //For span
    let wkCompany = document.getElementById("workEx2")
    let creatCompany = document.createElement("input")
    creatCompany.setAttribute("type","text")
    creatCompany.setAttribute("class","wkr")
    creatCompany.setAttribute("id","details")
    creatCompany.setAttribute("placeholder", "Organazition/Company")
    wkCompany.appendChild(creatCompany)
    //console.log(wkCompany)
    //alert("Good")
    //let start = document.getElementById("workSrtYr2")
    let wkSrtYr = document.getElementById("workStartYr2")
    let creatStrYr = document.createElement("input")
    creatStrYr.setAttribute("type","text")
    creatStrYr.setAttribute("class","wkr")
    creatStrYr.setAttribute("id","details")
    creatStrYr.setAttribute("placeholder", "Start Year")
    creatStrYr.setAttribute("style", "width:150px")
  // start.appendChild(wkSrtYr)
    wkSrtYr.appendChild(creatStrYr)
    //console.log(wkSrtYr)
    //console.log(start)
    //console.log(creatStrYr)

//     let end = document.getElementById("workEndYr")
//     let wkEndYr = document.getElementById("workStartYr2")
//     let creatEndYr = document.createElement("input")
//     creatEndYr.setAttribute("type","text")
//     creatEndYr.setAttribute("class","wkr")
//     creatEndYr.setAttribute("id","details")
//     creatEndYr.setAttribute("placeholder", "End Year")
//     creatEndYr.setAttribute("style", "width:150px")
//    end.appendChild(wkEndYr)
   // wkSrtYr.appendChild(creatEndYr)
}
document.getElementById("btnWork").addEventListener('click',workForm);
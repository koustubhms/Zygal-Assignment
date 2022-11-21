let today=new Date();
let currentMonth=today.getMonth();
let currentYear=today.getFullYear();
let selectedYear=document.getElementById('year');
let selectedMonth=document.getElementById('month');
let input_date=document.getElementById('date');


let months= ["Jan" ,"Feb" ,"Mar" ,"Apr","may" ,"Jun", "Jul", "Aug", "Sep" ,"Oct","Nov","Dec"];

let monthAndYear =document.getElementById("monthAndYear");
showCalendar(currentMonth,currentYear);

function jump(){
    currentMonth=parseInt(selectedMonth.value);
    currentYear = parseInt(selectedYear.value);
    showCalendar(currentMonth,currentYear);
}

function showCalendar(month,year){
    
    let firstDay = (new Date(year,month)).getDay();

     let DaysInMonth = 32 - new Date(year , month ,32).getDate();

    let tbl= document.getElementById("calender-body");
    tbl.innerHTML="";

    monthAndYear.innerHTML=months[month]+" "+ year;
    selectedMonth.value=month;
    selectedYear.value=year;

    let date =1;
    for( let i = 0;i<6 ;i++){
        let row = document.createElement("tr");

        for(let j = 0 ; j < 7 ;j++){
            if(i === 0 && j <firstDay){
                let cell= document.createElement("td");
                let cellText=document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if( date > DaysInMonth){
                break;
            }
            else{
                let cell =document.createElement("td");
                var cellText=document.createTextNode(date);
                console.log(date);
                
                if( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() && input_date.value==""){
                    cell.classList.add("bg");
                }else{
                    cell.style.backgroundColor = "white";
                }
                
                cell.appendChild(cellText);
                if(cell.innerText==input_date.value){
                    cell.style.backgroundColor = "green";
                }
                row.appendChild(cell);
                date++;

            }
        }
        tbl.appendChild(row);
    }
    document.getElementById('btn').addEventListener('click',()=>{
        showCalendar(currentMonth,currentYear);
    }) 


}

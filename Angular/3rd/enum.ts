enum WeekDay{
    Monday =1,
    Tuesday ,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
    }

function getday(d : number) : String{
 
    return WeekDay[d];
  
}

 var z = getday(6);  /// input the date (1 to 7) to get day of week
 console.log(z);



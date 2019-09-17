enum WeekDay{
    Monday =1,
    Tuesday ,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
    }

function getday<T>(d : T) : string{
 
    var p = Number(d);
     
     return WeekDay[p];
  
}
// usage number getday(6);
// string getday("6");
 var z = getday(6);  /// input the date (1 to 7) to get day of week
 console.log(z);



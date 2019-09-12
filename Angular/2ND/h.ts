interface IDate { 
    today:Date; 
    toString();
 } 

class cust implements IDate
{
    
    today: Date;
    constructor(td : Date)
    {
        this.today=td;
    }
    toString()
    {
        console.log(this.today+'');
    }

}

var z = new Date();
var x = new cust(z);
x.toString();
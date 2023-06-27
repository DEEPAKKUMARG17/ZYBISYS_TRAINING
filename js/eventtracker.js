class tracker
{
  constructor()
  {
     this.arr=[];
     this.count=0;
  }
    additem(name,date,location)
    {
      const obj=
      {
        name,
        date,
        location
      }
      this.arr.push(obj)
      this.count++;
    }
    displayitems()
    {
    
      const display=this.arr;
      display.forEach((element)=>
      {
        console.log(`task:${element.name}`)
        console.log(`date:${element.date}`)
        console.log(`location:${element.location}`)
        console.log();
      })
    }
    
    displaycount()
    {
    return this.count
     // console.log(`No of items:${this.count}`);
    }
    
    filteritems(startdate,endate)
    {
      return this.arr.filter((element=>
      {
        return((element.date>=startdate)&&(element.date<=endate))
      }))
    }
}
const event=new tracker();

event.additem("todo","2023-09-10","trichy")
event.additem("cooking","2023-07-10","mumbai")
event.additem("studying","2023-04-10","chennai")


console.log("DISPLAYING THE EVENTS IN THE EVENT TRACKER USING CLASS");
console.log("--------------------------------------------------------");
console.log()

event.displayitems();

 const filterdata=event.filteritems("2023-04-10","2023-08-10")
 
 console.log("Events filtered Using date as a range");
 console.log("----------------------------------------------------");
 console.log();
 
 
 filterdata.forEach((element)=>
      {
        console.log(`task:${element.name}`)
        console.log(`date:${element.date}`)
        console.log(`location:${element.location}`)
        console.log();
      })
      
console.log("---------------------------------");

const count =event.displaycount()

console.log(`No of items in the list tracker:${count}`)
console.log();

console.log("PERFORMIMG ALL FUNCTIONALITY USING SECOND OBJECT")
console.log("----------------------------------");
console.log()


const tasker=new tracker();
tasker.additem("performimg","2023-03-01","kolkata")
tasker.additem("inprogress","2023-06-01","pune")
tasker.additem("failed","2023-11-10","delhi")


 console.log("DISPLAYING THE EVENTS IN THE EVENT TRACKER USING CLASS");
console.log("--------------------------------------------------------");
console.log();


tasker.displayitems();

 const filtered=tasker.filteritems("2023-02-10","2023-08-10")
 
 
 console.log("Events filtered Using date as a range");
 console.log("--------------------------------------------------------");
 console.log();
 
 filtered.forEach((element)=>
      {
        console.log(`task:${element.name}`)
        console.log(`date:${element.date}`)
        console.log(`location:${element.location}`)
        console.log();
      })
      
console.log("---------------------------------");

const counter =tasker.displaycount()

console.log(`No of items in the list tracker:${counter}`)
console.log();
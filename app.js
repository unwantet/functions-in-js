// function noldan(raqam) {
//     if (raqam <= 0){
//         console.log(true);
//     } else{
//         console.log(false);
//     }
// }
// noldan(5)


// /////////////////////////////////////

// function ichkiBurchaklar(n) {
//     n = (n - 2) * 180;
//     console.log(n)   
// }

// ichkiBurchaklar(3)


// /////////////////////////////////////////

// function ochkolar(x,y) {
//     x=x*2;
//     y=y * 3;
//     let a =  x+y;
//     console.log(a)

// }

// ochkolar(38,8)


/////////////////////////////////////////////////

// function nameString (word){
//     console.log(`${word}Edabit`)
// }
// nameString("Salom")

/////////////////////////////////////////////////////

// function ikkitaSon(x,y) {
//     if( x+y < 100){
//         console.log(true);

//     }else{
//         console.log(false)
//     }
// }

// ikkitaSon(50,49)


///////////////////////////////////////////////////////



// function printArray(n) {

//     if (typeof n === 'number' && Number.isInteger(n) && n > 0) {
     
//       const array = Array.from({ n.leng }, (_, index) => index + 1);
  
//       console.log(array);
//     } else {
//       console.log('Please provide a positive integer as an argument.');
//     }
//   }
//     printArray(3);


///////////////////////////////////////////////////////////////


// function oyoqlar(tovuq, qoy, sigir) {
//     tovuq = tovuq * 2;
//     qoy = qoy * 4;
//     sigir = sigir * 4;
//     let jami = tovuq + qoy + sigir;
//     console.log(jami)
// }

// oyoqlar(4,5,2);

///////////////////////////////////////////////////////////////////////


// function teng (x,y){
//     if (x== String || y == String){
//         console.log(false);
//     }
//     else if(x==y){
//     console.log(true) ;
//     }
//     else if (x !=y){
//         console.log(false) 
//     }

// }
// teng(4,4)


///////////////////////////////////////////////////////////////////////


// function futbolOchko(win, draw,loose) {
//     win = win * 3;
//     draw = draw * 1 ;
//     loose = loose * 0;
//     let all = win + draw + loose;
//     console.log(all)
// }

// futbolOchko(4,5,1)




///////////////////////////////////////////////////////////////////////


// function sekundlar(h, m) {
//     h = h * 3600;
//     m = m * 60;
//     let a = h + m;
//     console.log(a);
// }
// sekundlar(1,3)



///////////////////////////////////////////////////////////////////////


// function tubSon(num) {
//     if (num > 1) {
//       for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//           console.log(false);
          
//         }else{

//             console.log(true);
//             break;
//         }
        
//         }
//     } else {

//         console.log(false);
//     }
//   }

// tubSon(7)


////////////////////////////////////////////////////////////////


// function tengmi(x, y) {

//     if (x === y) {
//       return true;
//     } else {

//       return false;
//     }
//   }
//   console.log(tengmi("hello", "hello"))


////////////////////////////////////////////////////////////////

// function booleanToString(bool) {
//     bool = bool.toString();
//     console.log(` "${bool}" `);
// }
// booleanToString(true)

////////////////////////////////////////////////////////////


// const arrowFunc = (value) => value;
// let a = arrowFunc("3");
// console.log(a);


/////////////////////////////////////////////////////////////


// function frameSoni(minut, frame) {
//     minut = minut * 60 ;
//     frame = minut * frame;
//     console.log(frame);
// }
// frameSoni(10,25)


/////////////////////////////////////////////////////////////


// const evaluateMathString = (mathString) => {
//     try {
//       const result = eval(mathString);
      
//       return result;
//     } catch (error) {
//       console.error('Matematik amalni bajarishda xato:', error);
//       return null;
//     }
//   };
  

//   console.log(evaluateMathString("5+6"));
  


/////////////////////////////////////////////////////////////

// function teng10(s,w) {
//     if (s == 10 || w == 10 || s + w == 10) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// teng10(10,0)


///////////////////////////////////////////////////////////


// function litrMasofa(km) {
//     if ( km * 10 < 100) {
//         console.log(100);
//     }
//     else{
//         console.log(km * 10);
//     }
// }
// litrMasofa(12)


///////////////////////////////////////////////////////


// function fun(a,b) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }
// fun(500,501)


////////////////////////////////////////////////////////

// const arr = (arg1, arg2) => {

//     return [arg1, arg2];
//   };
  

//   console.log(arr("salomat", 42));

// function tengStrings(a, b) {
//     let y = 0;
//     let q = 0;
//     for (let x = 0; x < a.length; x++)  {
//         y++;
//     } 
//     for (let w = 0; w < b.length; w++)  {
//         q++;
//     } 
//     if (y==q) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
    
// }

// tengStrings("salom","aliw")

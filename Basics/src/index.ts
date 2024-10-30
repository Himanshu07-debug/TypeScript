// *************************************** DATATYPES ***********************************************************

let a = 25;

// let name = "Himanshu";  --> ERROR ( name keyword can't be used, its already declared in JS window )


let str = "Himanshu";  

// str will have all the functions of string class
console.log(str.charAt(2));  // 0 based indexing


// Specifying types in directly during declaration

let s: string = "{23}";
let num: number = 232;

console.log(num);

let b;  // can take any type, "any" can be specified

let c: any;

let id: string | number;       // can be a number or string

const fun = (a:number, b:number) : number => {
    return a*b;
}

console.log(fun(2, 3));


// TYPE KEYWORD

// defining types
type userName = string | number;

let ct: userName = "Hello";


// defining functions

type func = (a:number, b:number) => number;

const mul: func = (a, b) => {
    return a*b;
}


type themeMode = "light" | "dark";

const mode: themeMode = "light";


// Never type

const err = new Error();  // err type -> Error

const errorHandler = () : never => {
    throw new Error();                        // the throwing of error in function --> NEVER type
}



// ***************************************  ARRAY ***********************************************************


const arr: number[] = [1, 2, 3, 4];

const arr2: Array<string> = ["Luck", "Tan", "Him"];

const arr3: Array<string | number | boolean> = [1, 2, "Him", true];

arr.forEach(x => {
    console.log(x);        // x. se number ke properties ka bhi accessed
});


// fixed size array
const brr = new Array(6);


// *********************************************** OBJECTS ****************************************************

// naive way

const ob : {
    h : number, 
    w : number,
    gender : boolean
} = {
    h : 13,
    w : 15, 
    gender : true
};


// Better way

type Obj = {
    h : number, 
    w : number, 
    gender? : boolean,  // making gender field optional using ?
};

const ob1 : Obj = {
    h : 13, 
    w : 15, 
    gender : true
}

const ob2 : Obj = {
    h : 13, 
    w : 15, 
}

// declaring functions as field in object in NEAT WAY

type FuncType = (n: number, m: number) => void

// Interface
interface NewObj extends Obj{
    scolar : boolean;
    func : FuncType;
}

const gigi: NewObj = {
    h : 23,
    w: 54,
    scolar: true,
    func: (n, m) => {
        console.log(n * m);
    }
};

gigi.func(2, 3);  // Remember, if you have to call func, the field should not be declared optional





// *********************************************** FUNCTIONS ****************************************************

type Hun = (n: number, m:number, l:number) => number;

const rec1 : Hun = (n, m, l) => {
    return n*m*l;
}

// making l optional

type Tun = (n: number, m:number, l?:number) => number;

const rec2 : Tun = (n, m, l) => {

    if(typeof l === "undefined") return n*m;

    return n*m*l;
}

console.log(rec2(23, 25));


// making l default

const rec3 : Tun = (n, m, l = 20) => {
    return n * m * l;
}


// Rest operator

type Recca = (...m : number[]) => number[];

const rec4 : Recca = (...m : number[]) : number[] => {
    return m;
}

rec4(1, 2, 3, 4, 5, 6);
rec4(1, 2);


// Functions with Objects


// My product obj datatype
interface Product {
    name : string;
    stock : number; 
    price : number;
    photo : string;
    readonly id : string;
}

// function type
type GetDataType = (product : Product) => void;

const getData : GetDataType = (product) => {
    console.log(product);
}

const pro : Product = {
    name : "MacBook",
    stock : 46,
    price : 999999,
    photo : "sampleurl",
    id : "12345"
}

// call
getData(pro);

// ******************************************** TYPE ASSERTION ******************************************************

interface Person{
    name: string, 
    email : string,
}

const myObj : Person = {
    name: "Lucky",
    email : "abc@gmail.com"
}

console.log(myObj.name);

console.log(myObj["name"]);

let key1 = "name";
const key2 = "name";

// console.log(myObj[key1]);  --> ERROR , key1 not acceptable
console.log(myObj[key2]);  // --> NO ERROR, becz TS know that const will not change further

// to make them work, keyOf is used
// NOTE -> TS gives you error becz it do not assume the future, you are sure that the obj is not NULL, but ts wants you to validate it

console.log(myObj[key1 as keyof Person]);


const getName = (val : keyof Person) : string => {
    return myObj[val];
}

console.log("name");


// NOTE -> TS predicts the type of the variable can be null, but you are sure that it is not, use variableName and at last, use "!" mark


// ********************************************** UTITLITY TYPE ********************************************************

// this are the type that helps to make an copy of obj faster with the required type with no need to do manually

// Partial<Type>

type u1 ={
    name:string,
    email:string
}

// make both name and email as optional type, just hover on u2 and see
type u2 = Partial<u1>



// Required<Type> - opposite of partial

type u3 ={
    name?:string,
    email:string
}

// make both fields as required
const u4: Required<u3> = {
    name:"abhi",
    email:"abhi@gmail.vom"
}

// Readonly<Type> - makes every property readonly

type u5 = {
    name:string,
    email:string
}
const u6: Readonly<u5> = {
    name:"abhi",
    email:"abhi@gmail.vom"
}


// Record<Keys, Type>

type u7 = Record<"name"|"email"|"gender",string>   // first can be name, email, gender, Another one -> String

// Use case of Record

interface UserInfo {
  age: number;
}

type UserName = "john" | "levi" | "elon" | "jack";

const users: Record<UserName, UserInfo> = {
  john: { age: 34 },
  levi: { age: 34 },
  elon: { age: 34 },
  jack: { age: 34 },
};



// Pick<Type, Keys>

interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}

// to pick only certail fields
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// Omit<Type, Keys> 
interface customObj {
  city: string;
  state: string;
  country: string;
}

// to omit country field
type r1 = Omit<customObj,"country">



// Exclude<Type, ExcludedUnion>
type m1 = string | number | boolean
type r2 = Exclude<m1 , boolean>   // removing boolean type

// Extract<Type, Union>
type m2 = string | number | boolean
type r3 = Extract<m2 , boolean>

// NonNullable<Type>
type MyUnion = string | number | boolean | null | undefined
type Random = NonNullable<MyUnion>    // omit null and undefined

// same can be do by -->
type Random2 = Exclude<MyUnion,undefined| null>



// Parameters<Type>

const myfunc = (a: number, b: string) => {
  console.log(a + b);
};

// accepts type of
type r5 = Parameters<typeof myfunc>





// ConstructorParameters<Type>
class SampleClass {
  constructor(public s: string, public t: string) {}
}

type r6 = ConstructorParameters<typeof SampleClass>




// ReturnType<Type>
const myfunc1 = (a: number, b: string) : string => {
  return a + b;
};

type FuncType = ReturnType< typeof myfunc1>



// InstanceType<Type>

type r8 = InstanceType<typeof SampleClass>
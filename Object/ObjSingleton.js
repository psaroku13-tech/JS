//const tinderUser=new Object()

const tinderUsert={}
//console.log(tinderUser);

tinderUsert.id="1m1m",
tinderUsert.name="sunney"


//console.log(tinderUsert)


const regularUser ={

    email: "sun@gmail.com",
    fullname:{
        userfullname:{
            firstName:"dsat",
            lastName:"dom"
        }
    }
}

//console.log(regularUser.fullname.userfullname)

const obj1={1:"a",2:"b"}

const obj2={3:"c",4:"d"};

const dp={...obj1,...obj2}

const dp2=Object.assign({},obj1,obj2);

//console.log(dp)

//console.log(dp2);

const course = {

    coursename:"Js",
    price:"999",
    tutor:"Saroj"
}


const {coursename}=course
console.log(coursename);

const {name}=course;

const myp={
    "name":"Saroj",
    "courseName":"js",
    "price":"free"
}

[
    {},
    {},
    {}
]

const result=
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Amar",
        "last": "Hestetun"
      },
      "location": {
        "street": {
          "number": 2516,
          "name": "Østhornveien"
        },
        "city": "Knarrevik",
        "state": "Rogaland",
        "country": "Norway",
        "postcode": "1878",
        "coordinates": {
          "latitude": "39.1468",
          "longitude": "-117.2799"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "amar.hestetun@example.com",
      "login": {
        "uuid": "0504f6af-b067-433d-b0c2-84a4f8f58113",
        "username": "smallcat576",
        "password": "1414",
        "salt": "RcyBmnZR",
        "md5": "55d226c372981f7967a9089150cae847",
        "sha1": "6e01737ae91640e04e9dd352f041614c498059e0",
        "sha256": "9abdb39b8537dc4ee8c13d87b66baa576a13bdcd6a24dd1699b3fbc183eb93a2"
      },
      "dob": {
        "date": "1960-10-16T23:11:05.729Z",
        "age": 65
      },
      "registered": {
        "date": "2015-02-28T09:21:19.789Z",
        "age": 11
      },
      "phone": "85935102",
      "cell": "96246996",
      "id": {
        "name": "FN",
        "value": "16106040579"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/30.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
      },
      "nat": "NO"
    }
  ],
  "info": {
    "seed": "cfe1c5d2ccd61043",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
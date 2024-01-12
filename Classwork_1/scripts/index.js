// alert("Hello World");


// let test = "Hello World"; // Another way to set for test "Hello World"
//alert(test);

// test = "hello world";
//console.log("Hello World"); // Dmytro keybord --> F12 -> Console


// let nameUser, surnameUser, cityUser, ageUser, isMarried;
// nameUser = "Dmytro";

// console.log(typeof nameUser);


// start point -- ТОЧКА ВХОДУ

document.addEventListener("DOMContentLoaded", () => {
    // --- Upper Case ---
    // //alert("test") 
    let txt = "Lorem Ipsum is dummy text often used in printing and web design. Lorem Ipsum has been the industry's standard dummy text ever since the early 16th century. An unnamed printer at the time created a large collection of type sizes and shapes using Lorem Ipsum to produce type specimens. Lorem Ipsum has not only successfully survived five centuries without noticeable change, but has also entered electronic design. It was popularized in modern times by the publication of Letraset sheets containing Lorem Ipsum sample sheets in the 1960s, and, more recently, by electronic typesetting programs like Aldus PageMaker which use Lorem Ipsum in their templates.";
    // //console.log(txt);   
    // console.log(
    //     txt.toUpperCase()
    // )
    // console.log(txt)


    //  --- Lower Case ---
    //console.log("__ lower case __", txt.toLowerCase())


    //  --- Replace ---
    // console.log("__ replace __", txt.replace("i", "o"))
    // console.log("__ replace ALL __", txt.replaceAll("i", "o"))


    // --- Length ---
    //console.log("__ length __", txt.length)
    //console.log("__ length __", txt.replaceAll(" ", "").length)


    // --- Split
    //console.log("__ split __", txt.split(" "))

    
    // --- First and Last Characters
    //console.log("__ First char", txt[0])
    //console.log("__ Last char", txt[txt.length - 1])
    //console.log("__ Last char", txt.slice(-1))


    // --- Reverse ---
    //console.log("__ Reverse __", txt.split("").reverse().join(""))
    
    // let someText = "Lorem";
    // let reverseText;
    // reverseText = someText.split("").reverse().join("");
    // console.log("__ Reverse __", reverseText);



    // TASK
    // let name = "Dmytro";
    // let surName = "Leskiv";
    // let middleName = "Romanowych";

    // console.log(surName, name[0] + '.' + middleName[0] + '.');
    //console.log(`${surName} ${name[0]}.${middleName[0]}`)


    // --- Math ---

    // console.log(2**2); // Elevation to a degree - Піднесення до степеня
    // console.log(5 % 3); // Integer division - Цілочисельне ділення
    // console.log(2 < 4); // Comparison - Порівння
    // console.log(Math.pow(2, 5)); // Use module Math to perform operation with Evelevation


    // --- Array functions ---
    // let array = [1, "Jura", true, null];
    // // ADD
    // array.push("Dmytro");
    // array.unshift("Leskiv");
    // console.log(array);
    // DELETE
    //array.pop(2);
    //console.log(array);
    //array.shift();    
    //console.log(array);

    //let index = array.indexOf("Dmytro");
    //array.splice(index, 1); // 1 - how many element you remove from list (in list can be more indentical elements)
    // Another way to remove (filter)
    // let filteredArray = array.filter((e)=>{
    //     return e !== "Dmytro";
    // })
    // console.log(filteredArray);



    let a, b, c, d;
    // primitive
    a = 1;
    b = a;
    a = a + 1;
    
    // complex
    c = [1, 2, 3];
    d = [...c]
    c[0] = c[0] + 1;

    // output
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}) 
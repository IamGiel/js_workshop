// a beautiful coin combination is a coin that has all HHHH... or all TTTT...
// HHH or TTTT  or HH HHHT.. TT
// need the least number of flips/action to get beautiful coin combination

// If its coins are randomly mixed, a combination THHHHHT for example1,
// any HH....TT is a beautiful coin combination, therefore
// in example1, we need to flip the first T to H and the second to last H to T to be considered beautiful combination
// exmaple2 THHTTHH, we need to flip first coin to H, then flip the last two H's to T

let test_case1 = "THHHHT"; // 2 flips
let test_case2 = "TTTHHH"; // 3 flips
let test_case3 = "TTTTTTT"; // 0 flips
let test_case4 = "HHHHHHH";
let test_case5 = "TTTTTTH"; // 1 flips
let test_case6 = "HHHHHHT";
let test_case7 = "THHHHHT";
let test_case8 = "HTHHHHT";
let test_case9 = "HHHHHHTTT";
let test_case10 = "HHHTTH";
let test_case11 = "THHHTT";
let test_case12 = "THHHHTT";

let flips = null;

// function helpers

function checkFirstTwoChars(s) {
    // console.log(s)
    let res = {};
    let nArr = s.split("");
    let restOfElements = [];
    let countInstanceofT = 0;


    // check if two first chars have HH
    for (i = 0; i < nArr.length; i++) {
        if ((nArr[0] == "H") && (nArr[1] == "H")) {
            // console.log("two HHs baby!", nArr)
            // if it is, check the remaining elements
            if (i > 1) {
                // console.log("hellow")
                for (i = 2; i < nArr.length; i++) {
                    // console.log(`${i}: ${nArr[i]}`)
                    if (nArr[i] !== "H") {

                        // remove the first two characters from original string s
                        let new_str = s.substring(2);

                        res.original_string = s;
                        res.restOfString = new_str;
                        // let new_str = "HHHT"; // testing purpose
                        console.log(new_str)
                        console.log("first index of H: ", new_str.indexOf("H"))
                        console.log("last index of H ", new_str.lastIndexOf("H"))
                        let first_indexofH = new_str.indexOf("H");
                        let last_indexofH = new_str.lastIndexOf("H")

                        // if first instanceo f H and last instance of H are not 0 and not equal 
                        // it means that there are H's spread out randomly in the remaining string
                        // this means its not a beautiful combination
                        //  console.log("allsame(new_str): ", allsame(new_str))
                        if (allsame(new_str) && new_str.indexOf("H") > -1) {
                            console.log("all Hs --> beautiful combination already!")
                            countInstanceofT = 0;
                        } else {
                            if (((first_indexofH == 0) && (last_indexofH !== first_indexofH)) || (first_indexofH > 0) && ((last_indexofH - first_indexofH) >= 1)) {
                                console.log("some H's are spread mixed with T's")
                                for (j = 0; j < new_str.split("").length; j++) {
                                    if (new_str[j] == "H") {
                                        countInstanceofT++;
                                    }
                                }
                            } else {
                                console.log("its beautiful combination already!")

                            }
                        }
                    } else {
                        // alert("HERE")
                        countInstanceofT = 0;
                        res.numOfT = countInstanceofT;
                        res.theRestAreTs = false;
                    }

                    countInstanceofT = 0;
                    res.numOfT = countInstanceofT;
                }
                // alert("HERE")
                countInstanceofT = 0;
                res.numOfT = countInstanceofT;
            }
            // alert("HERE")
            countInstanceofT = 0;
            res.numOfT = countInstanceofT;
            // res.definition = "string starts with H's"
            // res.resolve = true;
        }


        if ((nArr[0] == "T") && (nArr[1] == "H")) {
            countInstanceofT = 1;
            // console.log("two HHs baby!", nArr)
            // if it is, check the remaining elements
            if (i > 1) {
                // console.log("hellow")
                for (i = 2; i < nArr.length; i++) {
                    // console.log(`${i}: ${nArr[i]}`)
                    if (nArr[i] !== "H") {

                        // remove the first two characters from original string s
                        let new_str = s.substring(2);

                        res.original_string = s;
                        res.restOfString = new_str;
                        // let new_str = "HHHT"; // testing purpose
                        console.log(new_str)
                        // console.log("first index of H: ", new_str.indexOf("H"))
                        // console.log("last index of H ", new_str.lastIndexOf("H"))
                        let first_indexofH = new_str.indexOf("H");
                        let last_indexofH = new_str.lastIndexOf("H")

                        // if first instanceo f H and last instance of H are not 0 and not equal 
                        // it means that there are H's spread out randomly in the remaining string
                        // this means its not a beautiful combination
                        //  console.log("allsame(new_str): ", allsame(new_str))

                        let tr = new_str.split("");
                        let second_to_last = tr[tr.length - 2]
                        // console.log(second_to_last)
                        if (allsame(new_str.slice(0, -2)) && new_str.slice(0, -2).indexOf("H") > -1 && second_to_last == "T") {
                            console.log("all Hs --> beautiful combination already!")
                        }
                    } else {
                        res.theRestAreTs = false;
                    }
                }
            }
            res.numOfT = countInstanceofT;
            res.definition = "string starts with H's"
            res.resolve = true;
        } else if (((nArr[0] == "H") && (nArr[1] == "H"))) {
            // alert("HERE")
            // console.log("NO, two HHs")
            res.numOfT = 0;
            res.definition = "string DID NOT start with H's"
            res.resolve = false;
        }
    }
    res.numOfT_definition = "number of flips to make em rest of combination Ts"
    // console.log("checkFirstTwoChars info: ", res)
    return res;
}

function makeEmUniform(s) {
    // attemp to make em all uniform, how many flips would it require
    let nArr = s.split("");
    // console.log(nArr)
    let allT = [];
    let allH = [];
    // console.log("make this uniform: ", nArr)

    for (let i = 0; i < nArr.length; i++) {
        let el = nArr[i]
        // console.log(el)
        if (el == "H") {
            allH.push(el)
        }
        if (el == "T") {
            allT.push(el)
        }
    }
    // console.log(allH.length)
    // console.log(allT.length)
    if ((allH.length < allT.length) && (allH.length !== nArr.length)) {
        // console.log("all H < all Ts", nArr)
        // console.log("steps to uniformity: ", allH.length)
        return allH.length;
    }
    if ((allT.length < allH.length) && (allT.length !== nArr.length)) {
        // console.log("all T < all H", nArr)
        // console.log("steps to uniformity: ", allT.length)
        return allT.length;
    }
    if ((allH.length > allT.length) && (allH.length === nArr.length)) {
        // console.log("all H < all Ts", nArr)
        // console.log("steps to uniformity: ", 0)
        return 0;
    }
    if ((allT.length > allH.length) && (allT.length === nArr.length)) {
        // console.log("all T < all H", nArr)
        // console.log("steps to uniformity: ", 0)
        return 0;
    }
    if (allT.length == allH.length) {
        // console.log("equal number of T and H", nArr)
        // console.log("steps to uniformity: ", allT.length)
        return allT.length;
    }
}

function first_last(s) {
    // if first is T and last is T
    let res = {};
    let nArr = s.split("");
    let first = nArr[0];
    let last = nArr[nArr.length - 1]
    if (first == "T" && last == "T") {
        res.same_tip = true;
        // console.log("first and last are T")
        if (allsame(s.slice(1, -1))) {
            res.step = 2;
        }
    } else if (!(first == "T" && last == "T")) {
        // alert("yo")
        res.same_tip = false;
    }
    // console.log(res)
    return res;
}

// MAIN 1
function run(s) {
    console.log("test string: ", s)
    console.log("============")
    let twoChars = checkFirstTwoChars(s);
    console.log(twoChars)
    console.log("numOfT: ", twoChars.numOfT)
    console.log("============")
    let uniformity = makeEmUniform(s);
    console.log("uniformity: ", uniformity);
    console.log("============")
    console.log("first and last: ", first_last(s));
    console.log("============")

    if (first_last(s).same_tip == false) {
        // twochars.numoft is null go to uniformity
        if (twoChars.numOfT == null) {
            console.log("we go to uniformity: ", uniformity)
            return uniformity;
        } else {
            if (twoChars.numOfT < uniformity) {
                console.log("return num steps: ", twoChars.numOfT)
            }
            if (twoChars.numOfT > uniformity) {
                console.log("return num steps: ", uniformity)
            }
            if (twoChars.numOfT == uniformity) {
                console.log("return num steps: ", uniformity)
            }
        }
    } else {
        console.log(first_last(s).step)
        if (first_last(s).step == undefined) {
            console.log("TESTing")
        }
    }
}

// if consective H and consecutive T

// run(test_case10);

// ========================

// check the last occurence of a string
// let test_string = "HHTTHHT";
// let string_length = test_string.length;
// let last_h = test_string.lastIndexOf("H");
// let last_t = test_string.lastIndexOf("T");
// let first_two = test_string.slice(0,2);
// let last_two = test_string.slice(-2);
// let middle_chars = test_string.slice(2,string_length-2);
// console.log("The string: ", test_string)
// console.log("last occurrence of a CHAR H: ", last_h+1)
// console.log("last occurrence of a CHAR T: ", last_t+1)
// console.log("string length: ", string_length)
// console.log("first_two: ", first_two)
// console.log("last_two: ", last_two)
// console.log("middle_chars: ", middle_chars)

// if first two are the same HH or TT
// if first two are not the same HT ot TH

// if last two are the same HH or TT
// if last two are not the same HT ot TH

// mesh
// if the middle chars allSame
// if the middle chars notAllSame 

// HH HHH.. TT good
// HH HHH.. HH good
// HH HHH.. TH change Last H to T
// HH HHH.. HT change Last H to T
// HH TTT.. TT good
// HH TTT.. HH change last two HH to TT
// HH TTT.. TH change last H to T
// HH TTT.. HT change last H to T

// TT HHH.. TT change first two TT to HH
// TT HHH.. HH change first two TT to HH
// TT HHH.. TH change first two TT
// TT HHH.. HT change all T to H or... change first two TT to HH
// TT TTT.. TT change first two to HH                                                                                     
// TT TTT.. HH change first two to to HH.. change last two HH to TT
// TT TTT.. TH change last H to T


// MAIN 2
function main2(s) { // FIRST ..... LAST
    let first_two = s.slice(0, 2);
    let last_two = s.slice(-2);
    let middle_chars = s.slice(2, s.length - 2);
   
    if (allsame(middle_chars) == true) {  // **** middle chars are uniform
        console.log("middle characters are all same block: ", s);

        if (first_two == "HH") {
            console.log("condition first_two = HH: ", s);
            handle_HH_uniformMiddle(first_two, middle_chars, last_two);
        }
        if (first_two == "TT") {
            console.log("condition first_two = TT: ", s);
            handle_TT_uniformMiddle(first_two, middle_chars, last_two);
        }
        if (first_two == "TH") {
            console.log("condition first_two = TH: ", s);
            handle_TH_uniformMiddle(first_two, middle_chars, last_two);

        }
        if (first_two == "HT") {
            console.log("condition first_two = HT: ", s);
            handle_HT_uniformMiddle(first_two, middle_chars, last_two);
        }
    } else 
    if (allsame(middle_chars) == false) { // ***** if middle chars are NOT uniform
        // HH TH ...HH/TT/HT/TH  HH THTH TT, HH THT TT, HH TH TT, HH HT TT
        // check numflips for flipping H or T
        
        // HANDLE HH and MIXED_MIDDLE and end = ?? HH/HT/TH/TT
        handle_HH_mixedMiddle(first_two, middle_chars, last_two)
        // HH HT ...HH/TT/HT/TH

        // TT TH ...HH/TT/HT/TH
        // TT HT ...HH/TT/HT/TH

        // HT TH ...HH/TT/HT/TH
        // HT HT ...HH/TT/HT/TH

        // TH TH ...HH/TT/HT/TH
        // TH HT ...HH/TT/HT/TH
        
    }
}

// HELPERS
function handle_HH_mixedMiddle(hh, mixed_middle, end) {
    let str = `${hh} ${mixed_middle} ${end}`;
    console.log(str)
    let result = `${mixed_middle}${end}`;
    // console.log(result)

    if(end=="TT"){ // HH TH... TT??
        console.log("check Ts vs Hs")
        checkNumHandT(result)
        // HHHTTTTT 
        // check first coin H and last coin H
        // check first coin T and last coin T must be equal to length of string (middle + end)
        let firstH = result.indexOf("H");
        let lastH = result.lastIndexOf("H");
        let firstT = result.indexOf("T");
        let lastT = result.lastIndexOf("T");
        let lenth = result.length;

        console.log(`first H: ${firstH}\n last H: ${lastH}\n length: ${lenth}\n firstT: ${firstT}\n lastT: ${lastT}`)

        if((firstH == lastH) && firstH == 0) {
            console.log(0)
            return 0;
        }
        if((firstH == lastH) && firstH !== 0) {
            console.log(1)
            return 1;
        }
        if((firstH == 0) && (firstT == (lastH + 1)) && (lastT == (lenth - 1))) {
            console.log(0)
            return 0;
        }
    }
    if(end=="HT"){ // HH TH... HT??
        console.log("check Ts vs Hs")
        let res = checkNumHandT(result);
        console.log(res)
    }
    if(end=="TH"){ // HH TH... TH??
        console.log("check Ts vs Hs")
        let res = checkNumHandT(result);
        console.log(res)
    }
    if(end=="HH"){ // HH TH... HH??
        console.log("check Ts vs Hs")
        let res = checkNumHandT(result);
        console.log(res)
        return res;
    }
}
function handle_TH_uniformMiddle(th, uniform_middle, end) {
    let result = `${th} ${uniform_middle} ${end}`;
    let combined = [...`${th}${uniform_middle}${end}`];
    let middle_T = uniform_middle.indexOf("T") > -1;
    if (middle_T == true) { // middle chars are Ts
        console.log("middle chars are Ts")
        if (end == "TT") { // TH TTT... TT
            console.log("flip (1) H to T")
            console.log(1)
            return 1;
        }
        if (end == "TH" || end == "HT") { // TH TTT... TH || TH TTT... HT
            console.log("flip (2) H to T")
            console.log(2)
            return 2;

        }
        if (end == "HH") { // TH TTT... HH
            console.log("check num H and T and make uniform least possible flip")
            let answer = checkNumHandT(combined);
            console.log(answer)
        }

    } else
    if (middle_T == false) { // middle chars are Hs
        console.log("middle chars are Hs")
        if (end == "TT") { // TH H... TT
            console.log("flip(1) the first T to H")
            console.log(1)
            return 1;
        }
        if (end == "TH" || end == "HT") { // TH H... TH || TH H... HT
            console.log("flip(2) First T to H and the last T to H")
            console.log(2)
            return 2;

        }
        if (end == "HH") { // TH HHH... HH
            console.log("flip(1) T to H")
            console.log(1);
            return 1;
        }
    }
}

function handle_HT_uniformMiddle(ht, uniform_middle, end) {

    let middle_T = uniform_middle.indexOf("T") > -1;
    if (middle_T == true) { // middle chars are Ts
        console.log("Ts: ", middle_T)
        // HT ....(all same)... TT
        if (end == "TT") { // HT TTT TT
            console.log("change H to T flip (1) coin")
            console.log(1)
            return 1;
        }
        if (end == "TH") { // HT TTT TH
            console.log("change Hs to Ts flip (2) coin")
            console.log(2)
            return 2;
        }
        if (end == "HH" || end == "HT") { // HT TTT HH
            // console.log("change Hs to Ts")
            let combined = [...`${ht}${uniform_middle}${end}`];
            let answer = checkNumHandT(combined);
            console.log(answer)
        }

    } else
    if (middle_T == false) { // middle chars are Hs
        console.log("Hs: ", !middle_T)
        if (end == "TT") { // HT HHH TT
            console.log("flip(1) First T to H")
            console.log(1)
            return 1;
        }
        if (end == "TH") { // HT HH TH
            console.log("flip(2) both Ts to H")
            console.log(2)
            return 2;
        }
        if (end == "HH") { // HT HHH HH 
            console.log("flip(1) T to H")
            console.log(1)
            return 1;
        }
        if (end == "TT") { // HT HHH TT
            console.log("flip(1) first T to H")
            console.log(1)
            return 1;
        }
    }
    // HT ....(all same)... TT
    // HT ....(all same)... TH
    // HT ....(all same)... HT
    // HT ....(all same)... HH
}

function handle_HH_uniformMiddle(hh, uniform_middle, end) {

    let middle_T = uniform_middle.indexOf("T") > -1;
    if (middle_T == true) { // HH TTTT... ??
        if(end=="TT"){ // HH TTTT... TT??
            console.log("0 flips")
            console.log(0)
            return 0;
        }
        if(end=="HH"){ // HH TTTT... HH??
            console.log("flip(2) last H to T");
            console.log(2)
            return 2; 
        }
        if(end=="TH"){ // HH TTTT... TH??
            console.log("flip(1) last H to T");
            console.log(1)
            return 1; 
        }
        if(end=="HT"){ // HH TTTT... HT??
            console.log("flip(1) last H to T");
            console.log(1)
            return 1; 
        }
    } else 
    if(middle_T == false){ // HH HHHHH... ??
        if(end=="TT"){ // HH HHHHH... TT??
            console.log("0 flips")
            console.log(0)
            return 0;
        }
        if(end=="HH"){ // HH HHHHH... HH??
            console.log("0 flips")
            console.log(0)
            return 0;
        }
        if(end=="TH"){ // HH HHHHH... TH??
            console.log("flip(1) last H to T or last T to H");
            console.log(1)
            return 1;
        }
        if(end=="HT"){ // HH HHHHH... HT??
            console.log("flip(1) last H to T");
            console.log(1)
            return 1;
        }
    }
}

function handle_TT_uniformMiddle(TT, uniform_middle, end) {
    let result = `${TT} ${uniform_middle} ${end}`;
    // console.log(result)
    let middle_T = uniform_middle.indexOf("T") > -1;
    console.log("middle are TTTTs ? ", middle_T)
    if ((TT == end) && (middle_T == true)) { // TT TTT.. TT
        console.log("TT == end: pass!: ", result)
        console.log(0)
        return 0;
    }
    if ((TT !== end) && (middle_T == true)) { // TT TTT ... ?? -->  HH / TH / HT
        if (end == "HT") {
            console.log("TT TTTT -> HT: Flip (1) H to T")
            console.log(1)
            return 1;
        }
        if (end == "TH") {
            console.log("TT TTTT -> TH: Flip (1) H to T")
            console.log(1)
            return 1;
        }
        if (end == "HH") {
            console.log("TT TTTT -> HH: Flip (2) HH to TT")
            console.log(2)
            return 2;
        }
    }
    if ((TT !== end) && (middle_T == false)) { // TT HHH ... HH / TH / HT
        if (end == "HT") { // TT HH HT
            console.log("flip least amount of occurence")
            let combined = [...`${TT}${uniform_middle}${end}`];
            let answer = checkNumHandT(combined);
            console.log(answer)
        }
        if (end == "TH") { // TT H TH
            console.log("flip least amount of occurence")
            let combined = [...`${TT}${uniform_middle}${end}`];
            let answer = checkNumHandT(combined);
            console.log(answer)
        }
        if (end == "HH") { // TT H HH
            console.log("TT TTTT -> HH: Flip (2) TT to HH")
            console.log(2)
            return 2;
        }
        
    }
    if((TT==end) && (middle_T==false)){
        console.log("flip least amount of occurence")
        let combined = [...`${TT}${uniform_middle}${end}`];
        let answer = checkNumHandT(combined);
        console.log(answer)
    }
}

function reducer(characters_to_test) {
    let w = [...characters_to_test]; // ["H", "T"]
    let H = 0;
    let T = 0;
    let r = w.reduce((acc, element, index) => {
        let numT;
        let numH;
        let strLength;
        // console.log(w[index])
        if (w[index] == "H") {
            numH = 1 + H++;
        } else
        if (w[index] == "T") {
            numT = 1 + T++;
        }
        return {
            numT,
            numH,
            strLength: characters_to_test.length
        }
    }, w)
    // console.log(r)
    return r;
}

function checkNumHandT(combined_string) {
    let testedObj = reducer(combined_string);
    let numH = testedObj.numH != undefined ? testedObj.numH : testedObj.strLength - testedObj.numT;
    let numT = testedObj.numT != undefined ? testedObj.numT : testedObj.strLength - testedObj.numH;
    console.log(testedObj)
    let result; // {numT: 3, numH: undefined, strLength: 9}
    if (testedObj.numH && (testedObj.strLength - testedObj.numH < numH)) {
        result = testedObj.strLength - testedObj.numH;
    }
    if (testedObj.numH && (testedObj.strLength - testedObj.numH > numH)) {
        result = testedObj.numH;
    }
    if (!testedObj.numH && (testedObj.strLength - testedObj.numT > numT)) {
        result = testedObj.numT;
    }
    if (!testedObj.numH && (testedObj.strLength - testedObj.numT < numT)) {
        result = testedObj.strLength - testedObj.numT;
    }
    return result;
}

function allsame(s) {
    return s.split('').every(char => char === s[0]);
}

// run test

// FIRST TWO as TH and With MIDDLE Ts... 
console.warn("**** FIRST TWO as TH and With MIDDLE Ts...  ****")
main2("THTHH") // first two TH and with middle TTTs... and with end == TH
console.log("======== test case end ========")
main2("THTTTHT") // first two TH and with middle TTTs... and with end == HT
console.log("======== test case end ========")
main2("THTTTTTTTTTHH") // first two TH and with middle TTTs... and with end == HH
console.log("======== test case end ========")
main2("THTTTTTTTTTT") // first two TH and with middle TTTs... and with end == TT
console.log("======== test case end ========")

// FIRST TWO as TH and With MIDDLE Hs... 
console.warn("**** FIRST TWO as TH and With MIDDLE Hs...  ****")
main2("THHHH") // first two TH and with middle TTTs... and with end == TH
console.log("======== test case end ========")
main2("THHHHHT") // first two TH and with middle TTTs... and with end == HT
console.log("======== test case end ========")
main2("THHHHHHHHH") // first two TH and with middle TTTs... and with end == HH
console.log("======== test case end ========")
main2("THHHHHHHHTT") // first two TH and with middle TTTs... and with end == TT
console.log("======== test case end ========")


// FIRST TWO as HT and With MIDDLE Ts... 
console.warn("**** FIRST TWO as HT and With MIDDLE Ts...  ****")
main2("HTTTTTTHT") // first two HT and with middle Ts and end == TH
console.log("======== test case end ========")
main2("HTTTTTTHT") // first two HT and with middle Ts and end == HT
console.log("======== test case end ========")
main2("HTTTTTTTT") // first two HT and with middle Ts and end == TT
console.log("======== test case end ========")
main2("HTTTTTTHH") // first two HT and with middle Ts and end == HH
console.log("======== test case end ========")

// FIRST TWO as HT and With MIDDLE Ts... 
console.warn("**** FIRST TWO as HT and With MIDDLE Hs...  ****")
main2("HTHHHHHHT") // first two HT and with middle Hs and end == HT
console.log("======== test case end ========")
main2("HTHHHHHTH") // first two HT and with middle Hs and end == TH
console.log("======== test case end ========")
main2("HTHHHHHTT") // first two HT and with middle Hs and end == TT
console.log("======== test case end ========")
main2("HTHHHHHHH") // first two HT and with middle Hs and end == HH
console.log("======== test case end ========")

// FIRST TWO as TT and With MIDDLE Ts... 
console.warn("**** FIRST TWO as TT and With MIDDLE Ts...   ****")
main2("TTTTTTTHT") // first two TT and with middle Ts and end == HT
console.log("======== test case end ========")
main2("TTTTTTTTH") // first two TT and with middle Ts and end == TH
console.log("======== test case end ========")
main2("TTTTTTTTT") // first two TT and with middle Ts and end == TT
console.log("======== test case end ========")
main2("TTTTTTTHH") // first two TT and with middle Ts and end == HH
console.log("======== test case end ========")


// FIRST TWO as TT and With MIDDLE Hs... 
console.warn("**** FIRST TWO as TT and With MIDDLE Hs...   ****")
main2("TTHHHHHHT") // first two TT and with middle Hs and end == HT
console.log("======== test case end ========")
main2("TTHHHHHTH") // first two TT and with middle Hs and end == TH
console.log("======== test case end ========")
main2("TTHHHHHTT") // first two TT and with middle Hs and end == TT
console.log("======== test case end ========")
main2("TTHHHHHHH") // first two TT and with middle Hs and end == HH
console.log("======== test case end ========")

// FIRST TWO as HH and With MIDDLE Ts...
console.warn("**** FIRST TWO as HH and With MIDDLE Ts...  ****")
main2("HHTTTTTHT") // first two HH and with middle Hs and end == HT
console.log("======== test case end ========")
main2("HHTTTTTTH") // first two HH and with middle Hs and end == TH
console.log("======== test case end ========")
main2("HHTTTTTTT") // first two HH and with middle Hs and end == TT
console.log("======== test case end ========")
main2("HHTTTTTHH") // first two HH and with middle Hs and end == HH
console.log("======== test case end ========") 

// FIRST TWO as HH and With MIDDLE Hs... 
console.warn("**** FIRST TWO as HH and With MIDDLE Hs...  ****")
main2("HHHHHHHHT") // first two HH and with middle Hs and end == HT
console.log("======== test case end ========") 
main2("HHHHHHHTH") // first two HH and with middle Hs and end == TH
console.log("======== test case end ========") 
main2("HHHHHHHHH") // first two HH and with middle Hs and end == HH
console.log("======== test case end ========") 
main2("HHHHHHHTT") // first two HH and with middle Hs and end == TT
console.log("======== test case end ========") 

// TEST MIXED MIDDLES

// FIRST TWO as HH and with MIXED MIDDLES...
// end = HT
console.warn("**** FIRST TWO as HH and with MIXED MIDDLES...  ****")
main2("HHHTHT") // first two HH and with mixed middle and end == HT
console.log("======== test case end ========") 
main2("HHTTTTTTTTTTTTHHT") // first two HH and with mixed middle and end == HT
console.log("======== test case end ========") 
main2("HHTHHT") // first two HH and with mixed middle and end == HT
console.log("======== test case end ========") 

// end = TH
main2("HHHTTH") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 
main2("HHTTTTTTTTTTTTHTH") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 
main2("HHTHTH") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 

// end = HH
main2("HHHTHH") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 
main2("HHTTTTTTTTTTTTHHH") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 
main2("HHTHHH") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 


// end = TT
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  IM HERE.... >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
main2("HHHTTT") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 
main2("HHHHHHTTTTTT") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 
main2("HHTHTT") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 
main2("HHTTTTTTTTTTTTHTT") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 
main2("HHTHTT") // first two HH and with mixed middle and end == TH
console.log("======== test case end ========") 

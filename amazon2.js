
// a beautiful coin combination is a coin that has all HHHH... or all TTTT...

 

// need the least number of flips/action to get beautiful coin combination

 

// If its coins are randomly mixed, a combination THHHHHT for example1,

// any HH....TT is a beautiful coin combination, therefore

// in example1, we need to flip the first T to H and the second to last H to T to be considered beautiful combination

// exmaple2 THHTTHH, we need to flip first coin to H, then flip the last two H's to T

 

let test_case1 = "THHHTH"; //2

let test_case2 = "TTTHHH"; //3

let test_case3 = "TTTTTTT"; //0

let test_case4 = "HHHHHHH"; //0

let test_case5 = "TTTTTTH"; //1

let test_case6 = "HHHHHHT"; //1

let test_case7 = "THHHHHT"; //2

let test_case8 = "HTHHHHT"; //2

let test_case9 = "HHHTHTHHTTT"; //2

let test_case10 = "HHHTTH"; // 1

let test_case11 = "THHHTT"; //1

let test_case12 = "THHHHTT"; //1

let test_case13 = "THHTTHH";//3

let test_case14 = 'HHHTHHTT';//1

 

findBorder = (string)=>{

    let array = string.split('');

    let previous = null;

    let border =  [];

    array.map((m,i)=>{

        if(!previous||m==previous){

            previous = m;

            return m

        }

        border.push(i)

        previous = m;

 

        return m

    })

    return border

}

 

findGreedyCount = (string)=>{

    let array = string.split('')

    let hcount  = array.filter(f=>f=='H').length

    let tcount  = array.filter(f=>f=='T').length

    return tcount<hcount ? tcount:hcount;

}

 

checkRandomCount = (string,flips)=>{

    if(!flips){

        flips = 0

    }

    let array = string.split('');

    let start = array.slice(0,2);

    let end = array.slice(array.length-2,array.length);

    let mid = array.slice(2,array.length-2)

    if(array.length<4){

        return null

    }

    flips += start.filter(f=>f!='H').length;

    flips += end.filter(f=>f!='T').length

    if(mid.length) {

        let midArr = mid.join('');

        let firstT = midArr.indexOf('T');

        let trimmedMid = midArr.slice(firstT,midArr.length)

        let lastH = trimmedMid.lastIndexOf('H')

        trimmedMid = trimmedMid.slice(0,lastH+1)

        flips += computeMid(trimmedMid)

    }

    return flips

}

 

computeMid = (arr)=>{

    let flips = 0;

    let border = findBorder(arr)

    let tFlips = null;

    let hFlips = null;

    if(!border.length){

        return flips

    }

    if(border.length==1){

        if(arr[0]=="H"){

            return flips

        }else if(arr[0]=="T"){

            return findGreedyCount(arr);

        }

    }

    if(border.length>1){

        let tArr = arr.slice();

        let hArr = arr.slice();

        tFlips = flipT(tArr,0);

        hFlips = flipH(hArr, 0);

        if(tFlips!=null ){

            flips = tFlips

        }

        if(hFlips!=null && hFlips<flips){

            flips = hFlips

        }

    }

 

    return flips

 

}

 

flipT = (string, flips)=>{

    let arr = [...string]

    let i  = arr.indexOf("T")

    if(i==-1){

        return flips

    }

    arr[i] = "H"

    flips += 1;

    let border = findBorder(arr.join(''));

    if(!border.length){

        return flips

    }

    if(border.length==1){

        if(arr[0]=="H"){

            return flips

        }else if(arr[0]=="T"){

            return findGreedyCount(arr.join(''));

        }

    }

    if(border.length>1){

       return flipT(arr.join(''), flips)

 

    }

}

 

flipH = (string, flips)=>{

    let arr = [...string]

    let i  = arr.indexOf("H")

    if(i==-1){

        return flips

    }

    arr[i] = "T"

    flips += 1;

    let border = findBorder(arr.join(''));

    if(!border.length){

        return flips

    }

    if(border.length==1){

        if(arr[0]=="H"){

            return flips

        }else if(arr[0]=="T"){

            return findGreedyCount(arr.join(''));

        }

    }

    if(border.length>1){

       return flipH(arr.join(''), flips)

 

    }

}

checkBeautiful = (string) => {

    let flips = null;

    let border = findBorder(string);

    if(!border.length){

        flips = 0

        return flips

    }

    flips = findGreedyCount(string);

    let randomPatternFlips = checkRandomCount(string)

    if(randomPatternFlips == null){

        return flips

    }else{

        return flips<randomPatternFlips ? flips : randomPatternFlips;

    }

}





console.log(checkBeautiful("HHTHTHTT"))

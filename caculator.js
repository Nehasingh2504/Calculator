// calculate the numbers
function calculate(frstnum,oprator,sndnum) {
    if(oprator == '+'){
        sol = frstnum + sndnum
    }
    else if(oprator == '-'){
        sol = frstnum - sndnum
    }
    else if(oprator == '/'){
        sol = frstnum / sndnum
    }
    else if(oprator == '*'){
        sol = frstnum * sndnum
    }
    return sol
}

let lst=''
let cnt=0
function display(equ) {
    // if the clicked button is C - clear(it cleans the display)
    if(equ.value == 'C'){
        document.getElementById('result').innerHTML=''
        document.getElementById('user_action').innerHTML=''
        lst=''
        cnt=0
        return
    }

    // if the clicked button is del it delete the element from last
    else if(equ.value == 'del'){
        string = document.getElementById('user_action').innerHTML
        document.getElementById('user_action').innerHTML = string.replace(string[(string.length)-1],'')
        document.getElementById('result').innerHTML = string.replace(string[(string.length)-1],'')
        lst = string.replace(string[(string.length)-1],'')
        return
    }

    // if the clicked button is %
    else if(equ.value=='%'){
        document.getElementById('user_action').innerHTML=document.getElementById('user_action').innerHTML + equ.value
        sol=document.getElementById('result').innerHTML / 100
        document.getElementById('result').innerHTML=sol
        lst = document.getElementById('user_action').innerHTML
        return
    }

    // if the last clicked button is % then it will diplay in numeric form for further calculation
    else if((lst.slice(-1)=='%')){
        document.getElementById('user_action').innerHTML = document.getElementById('result').innerHTML
        lst = document.getElementById('result').innerHTML
    }

    // if the user double click the decimal button it will only take one decimal point
    screen=document.getElementById('result').innerHTML
    for(i=0;i<screen.length;i++){if(screen[i]=='.'){break}}
    if(equ.value=='.' && i<screen.length ){
        i=0
        return
    }

    // if the user double click the oprator then it only take first oprator
    if((lst.slice(-1)=='+' || (lst.slice(-1)=='-') || (lst.slice(-1)=='/') || (lst.slice(-1)=='*') || (lst.slice(-1)=='=')) && (equ.value=='+' || equ.value=='-' || equ.value=='*' || equ.value=='/' || equ.value=='=')){
        return
    }
    
    // if the user click numeric value and the last clicked value is oprator then the display will clear and take new oprand
    if((lst.slice(-1)=='+')|| (lst.slice(-1)=='-') || (lst.slice(-1)=='/') || (lst.slice(-1)=='*') || (lst.slice(-1)=='=')){
        document.getElementById('result').innerHTML=''
    }

    // take and display numeric and decimal value
    if(0<=equ.value && equ.value<=9 || equ.value=='.'){
        document.getElementById('result').innerHTML=document.getElementById('result').innerHTML + equ.value
    }

    // if the user_action string have one oprator and now user click on other oprator or '=' then it will first calculate 
    else if(cnt>0 || equ.value=='='){
        // if the firstnum is divided by 0 then it display error
        if(parseFloat(document.getElementById('result').innerHTML)== 0 ){
            document.getElementById('result').innerHTML = 'Can"t divide with 0'
            return
        }
        sol=calculate(frstnum,oprator,parseFloat(document.getElementById('result').innerHTML))
        document.getElementById('result').innerHTML = sol
        frstnum=parseFloat(document.getElementById('result').innerHTML)
        lst=document.getElementById('result').innerHTML
        document.getElementById('user_action').innerHTML = lst
        if(equ.value=='='){
            cnt=0
        }
    }

    // if any oprator cliked then the first oprand is save in frstnum
    if(equ.value=='+'||equ.value=='-'||equ.value=='/'||equ.value=='*'){
        frstnum=parseFloat(document.getElementById('result').innerHTML)
        oprator = equ.value
        cnt=1
    }

    // store the user_action string
    if(equ.value!='='){
        lst=lst+equ.value
        document.getElementById('user_action').innerHTML = lst
    }
}
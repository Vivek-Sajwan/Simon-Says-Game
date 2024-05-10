let level=0;
let i=0;
let started=false;
let gameSeq=[];
let userSeq=[];
let btns=["one","two","three","four"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started==false)
    {
        console.log("Game has started");
        started=true;
    }
    levelUp();
})

function btnFlash(rand)
{
    rand.classList.add("change");
    setTimeout(function() {
        rand.classList.remove("change");
    },150);
}
function userFlash(rand)
{
    rand.classList.add("change1");
    setTimeout(function() {
        rand.classList.remove("change1");
    },150);
}

//generating random button
function generateRand()
{
    let randBtn=Math.floor(Math.random()*3);
    let btn=btns[randBtn]; //identified class name
    let rand=document.querySelector(`.${btn}`); //selected on the basis of class name
    gameSeq.push(rand.getAttribute("id"));
    btnFlash(rand);
}

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;

    generateRand();
}

function btnPress() {
    let r=this;
    userFlash(r);
    userSeq.push(this.getAttribute("id"));
    let indx=userSeq.length-1;
    if(userSeq[indx]===gameSeq[indx])
    {
        if(userSeq.length==gameSeq.length)
            setTimeout(levelUp,1000);
    }else
    {
        h2.innerHTML = '<span style="color: red;">Game Over!!!&nbsp;Press any key to start</span>';
        document.body.style.backgroundColor="red";
        setTimeout(function() {
            document.body.style.backgroundColor="white";
        },150);
        started=false;
        level=0;
        gameSeq=[];
        userSeq=[];
    }
}

let allBtns=document.querySelectorAll(".boxes div");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress)
}
const menuHome = ()=>{
 
    TurnOffCurrentButton();   
    
    let frame= document.getElementById("contentFrame");
    frame.setAttribute("src","./home.html");
    document.getElementById("menuHome").style = "color:black; background-color:white";
    
}

const menuJukebox= ()=>{
    TurnOffCurrentButton();   
    
    let frame= document.getElementById("contentFrame");
    frame.setAttribute("src","./jukebox.html");
    document.getElementById("menuJukebox").style = "color:black; background-color:white";
    

}

const menuGame= ()=>{
    
    TurnOffCurrentButton();   
    
    let frame= document.getElementById("contentFrame");
    frame.setAttribute("src","./game.html");
    document.getElementById("menuGame").style = "color:black; background-color:white";
       
}

const TurnOffCurrentButton = ()=>{

    let name = document.getElementById("contentFrame").getAttribute("src")
    let buttonName = "";
    if(name === "./home.html") buttonName =  "menuHome";
    else if(name === "./game.html") buttonName =  "menuGame";
    else if(name == "./jukebox.html") buttonName =  "menuJukebox";

    document.getElementById(buttonName).style = "color:white; background-color:#298eb5"   

}
function aritm(){

    let broj1 = parseFloat(document.getElementById("broj1").value);
    let op = document.getElementById("op").value;
    let broj2 = parseFloat(document.getElementById("broj2").value);
    let rezultat;

    if(op == "+")
    {
       rezultat=broj1+broj2;
       document.getElementById("rezultat").innerHTML='Vas rezultat je:'+rezultat;
    }
    else if(op == "-")
    {
        rezultat=broj1-broj2;
        document.getElementById("rezultat").innerHTML='Vas rezultat je:'+rezultat;
    }
    else if(op == "*")
    {
    rezultat=broj1*broj2;
    document.getElementById("rezultat").innerHTML='Vas rezultat je:'+rezultat;
    } 
        else if (op == "/") 
        {
            if (broj2 !== 0) {
            rezultat = broj1 / broj2;
            document.getElementById("rezultat").innerHTML='Vas rezultat je:'+rezultat;
            } 
            else
            {
    
            document.getElementById("rezultat").innerHTML='deljenje sa nulom nije definisano!';
            }
        } 
    else 
    {
        document.getElementById("rezultat").innerHTML='nepoznati operator!';
    }
}
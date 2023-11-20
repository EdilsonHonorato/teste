
    function mostrarValor(){
        var nome= document.getElementById("nome").value;
        var idade= document.getElementById("idade").value;
        if(idade<=12){
        alert("voce é uma criança");
        }else if(idade >12 && idade<=18 ){
            alert("voce é um adolescente "+nome);
        }else if(idade >18 && idade<=31 ){
            alert("voce é um jovem adulto");
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        else{
        alert(nome + "  "+ idade );
       
    }
}
const hamb=document.querySelector('.hamburger');

const toogleMenu=()=>{
    document.querySelector('.list-navigation').classList.toggle('active');

}


hamb.addEventListener('click',toogleMenu);


//kontrola upisa
 
let inputs=document.querySelectorAll('input');
let errors={
    "ime_prezime":[],
    "telefon":[],
    "email":[]
}
inputs.forEach(element=>{
    element.addEventListener('change', e=>{
        let currentInput=e.target;
        let inputValue=currentInput.value;
        let inputName=currentInput.getAttribute('name');

        if(inputValue.length>4){
            errors[inputName]=[];

            switch(inputName){
                case 'ime_prezime':
                    let validation=inputValue.trim();
                    validation=validation.split(" ");
                    if(validation.length<2){
                        errors[inputName].push('Moras napisati i ime i prezime');
                    }
                    break;
                case 'telefon':
                    let broj=parseFloat;
                    if(broj.length>=6){
                        errors[inputName].push('Broj mora imati najmanje 6 numera');
                    }
                    break;
                case 'email':
                    if(!validateEmail(inputValue)){
                        errors[inputName].push('Email nije dobar,pokusajte ponovo');
                    }

            }

        }
        else{
            errors[inputName]=['Polje mora sadrzati najmanje 4 karaktera'];
        }
        populateErrors();
    })
})

const populateErrors=()=>{

    //na kraju for petlja za brisanje stekovanih gresaka

    for(let elem of document.querySelectorAll('ul')){
        elem.remove();
    }

    for(let key of Object.keys(errors)){
        let input=document.querySelector(`input[name=${key}]`);
        //sada uzimam parent element a parent element je div
        let parentElement=input.parentElement;
        
        //sada pravim listu sa greskama
        let errorsElement=document.createElement('ul');
        // onda dodajem parrentElement
        parentElement.appendChild(errorsElement);
        

        //sada ul punimo greskama i prolazimi kroz petlju
        errors[key].forEach(error =>{
            //odmah pravi li koji ce biti u ul ovome gore
            let li=document.createElement('li');
            li.innerText=error;
            errorsElement.appendChild(li);
        } )
    }
}

const validateEmail=email=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
}





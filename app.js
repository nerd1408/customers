document.getElementById('button').addEventListener('click',loadcust)

function loadcust (e) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET','customers.json',true)
    xhr.onload = function() {
        if(this.status==200){ console.log('hahag');
            const customers =JSON.parse(this.responseText)
            let output=''
            customers.forEach(customer => {
                output += `
            <ul>id:${customer.id}<li></li>
            <li>name:${customer.name}</li>
            <li>phone:${customer.phone}</li></ul>
            `
            document.getElementById('customer').innerHTML = output
        
                
            });
            
        };

     
    }
    xhr.send()
}
 const formLogin = document.querySelector('.fomr1');
 console.log(formLogin);

 formLogin.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = document.getElementById('correo');
    const password = document.getElementById('password');

    console.log(email.value, password.value);

    /* fetch('http://localhost:8080/login',{
        method: 'POST',
        body: JSON.stringify({
            email: email,
            contrasenia: password
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(resp => {
        const token = resp.headers.get('Authorization');

        if(token && token.includes('Bearer') && resp.ok){
           localStorage.setItem('token', token);
           console.log(token);
           url = window.location;
           const path = url.paname.substring(0,url.pathname.lastIndexof('/')+1)
           location.href = path + 'tienda.html' 
        }else{
            localStorage.removeItem('token');
        }
    }) */
 })
 const formLogin = document.querySelector('.fomr1');
 //console.log(formLogin);

 formLogin.addEventListener('submit', (e) => {
     e.preventDefault();

     const email = document.getElementById('correo').value;
     const password = document.getElementById('password').value;

     //console.log(email, password);

     fetch('http://localhost:8080/login', {
         method: 'POST',
         body: JSON.stringify({
             email: email,
             contrasenia: password
         }),
         headers: {
             'Content-type': 'application/json'
         }
     }).then(resp => {
         if (resp.ok) {
             Swal.fire('Login exitoso')
             setTimeout(() => {


             }, 2000)
         } else {
             Swal.fire('Fallo iniciar')

         }

         const token = resp.headers.get('Authorization');

         if (token && token.includes('Bearer') && resp.ok) {
             localStorage.setItem('token', token);
             console.log(token);
             url = window.location;
             const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
             location.href = path + 'tienda.html'
         } else {
             localStorage.removeItem('token');
         }
     })
 })
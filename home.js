function login(){
    let username=uname.value
    console.log(username);
    localStorage.setItem('Username',username)
    window.location=('LOGIN.HTML')
    
}
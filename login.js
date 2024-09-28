let username=localStorage.getItem('Username');
console.log(username);
head.innerHTML=`Welcome ${username}`

function addemployee(){
    const Emp={
        id:Id.value,
        Name:empname.value,
        Address:address.value,
        Experience:experience.value,
        Salary:salary.value
    }
    if(Emp.id==""||Emp.Name==""||Emp.Address==""||Emp.Experience==""||Emp.Salary=="")
    {
        alert('Please fill the following details')
    }
    else{
        if(Emp.id in localStorage){
            alert("Employee details already exist")
        }
        else{
        localStorage.setItem(Emp.id, JSON.stringify(Emp));
        alert('Employee details added successfully')
        }
    }
    
}
function search(){
    let val=emp.value;
    console.log(val);

      if(val in localStorage){
       let e= JSON.parse(localStorage.getItem(val))
    console.log(e);

    let data=`<div class="card" style="width: 18rem;">
  <div class="card-header">
    DETAILS OF EMPLOYEE
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${e.id}</li>
    <li class="list-group-item">${e.Name}</li>
    <li class="list-group-item">${e.Address}</li>
    <li class="list-group-item">${e.Experience}</li>
    <li class="list-group-item">${e.Salary}</li>
  </ul>
</div>`
    card.innerHTML = data;
    }
    else{
        alert("Can't find employee details")
    }
}

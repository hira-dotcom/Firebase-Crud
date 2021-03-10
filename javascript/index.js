const userId = document.getElementById('userId');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('student');

addBtn.addEventListener('click',(ev)=>{
ev.preventDefault();
rootRef.child(userId.value).set({
    First_name:firstName.value,
    Last_name:lastName.value,
    Email:email.value,
    Password:password.value
});

});
updateBtn.addEventListener('click',(ev)=>{
ev.preventDefault();
const newData = {
    Password: password.value,
    First_name:firstName.value,
    Last_name:lastName.value,
    Email:email.value
};
const updates = {};
updates['/student/' + userId.value] = newData;
updates['/Updated-student/' + userId.value] = newData;
database.ref().update(updates);
});

removeBtn.addEventListener('click',ev=>{
ev.preventDefault();
rootRef.child(userId.value).remove().then(()=>{
    window.alert('user removed from database');
})
.catch(error=>{
    console.error(error);
})
});

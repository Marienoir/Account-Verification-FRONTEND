let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let account_number = document.getElementById('account_number');
let verifyBtn = document.getElementById('verify-btn');
let emailBtn = document.getElementById('email-btn');

const verifyAccountNumber = async () =>{
    try {
        const account_number= 4720007234
        const bank_code = 050
        await axios.get(`http://localhost:4000/account-verification/${account_number}/${bank_code}`)
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        const res= response.data;
        console.log(res.data);
    } catch (error) {
        console.log(error)
    }
}
verifyBtn.addEventListener('click', (e) => {
    verifyAccountNumber()
    e.preventDefault()
})
// emailBtn.addEventListener('click', (e) => {
//     console.log(emailBtn);
//     verifyEmailAddress()
//     e.preventDefault()
// });
// const verifyEmailAddress = async() =>{
//     axios.post('http://localhost:4000/register', {
//     name: "mary",
//     email: "mary@gmail.com"
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }





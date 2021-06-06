import { useState } from "react"
import Swal from 'sweetalert2'
import "./sing.css";

const Sing = ({onMock}) => {

    const [userName, setUserName] = useState("")
    const [passwords, setPasswords] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        setUserName('')
        setPasswords('')

        if (!validateUserName(userName)) {
            onMock('Please enter a user without numbers');
            return(Swal.fire({
                position: 'top-center',
                icon: 'warning',
                iconColor: '#FA8100',
                title: 'Please enter a user without numbers',
                showConfirmButton: false,
                timer: 1300
            }))
        }

        if (!validatePassword(passwords)) {
            return onMock('Incorrect password!');
            // return (Swal.fire({
            //     icon: 'error',
            //     iconColor: '#FA0000',
            //     title: 'Oops...',
            //     text: 'Incorrect password!',
            //     footer: '<a href="">Did you forget your password</a>'
            // }))
        }
        return onMock("wellcome");

        // return Swal.fire({
        //     icon: 'success',
        //     iconColor: '#39FA00',
        //     title: 'Welcome',
        //     showConfirmButton: false,
        //     timer: 1100
        // })
    }

    const validateUserName = (val) => {
        const userRegex = /^[A-Z ]+$/i;
        return userRegex.test(val);
    }

    const validatePassword = (val) => {
        const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        return passwordRegex.test(val);
    }

    return (
        <div>
            <header>
                <h2 className="sing">sing in</h2>
            </header>
            <section>
                <form onSubmit={onSubmit} aria-label="singForm">
                    <label>user name:</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your username" aria-required="true"  />
                    <label>password:</label>
                    <input type="password" value={passwords} onChange={(e) => setPasswords(e.target.value)} placeholder="Enter your password" aria-required="true" />
                    <input className="btn-send" type="submit" value="Enviar" />
                </form>
            </section>
        </div>
    )
}

export default Sing;
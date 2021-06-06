import "./singUp.css";
import Swal from 'sweetalert2'

const SingUp = () => {

    const menssage = () =>{
        return Swal.fire({
            icon: 'success',
            title: 'Lets create a new user'
        })
    }

    return (
        <div>
            <header><h2>new user</h2></header>
            <section>
                <button className="btn-singUp" onClick={menssage}>sing up</button>
            </section>
        </div>
    )
}

export default SingUp;
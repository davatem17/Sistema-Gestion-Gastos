import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

//const dev = process.env.API_DEV;
const API_DEV = 'http://localhost:8000';

const Register = () => {
    const navigate = useNavigate();
    const API = `${API_DEV}/api/register`;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const{name, email, password} = user;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API, {name, email,password}).then(res => {
            navigate('/');
        }).catch(err => {
            console.log('error')
        })
    }
    return ( 
        <section className="body">
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                    <div className="card-body p-3 text-center">
                        <div className="mb-md-5 mt-md-4 pb-5">
                            <h2 className="lf--label">Registrarse</h2>
                            <br />
                            <form className="login-form validate-form" onSubmit={handleSubmit} >
                                <div className="flex-row">
                                    <input type="text"  className="lf--input"
                                        name="name" placeholder="Usuario" onChange={handleChange} />
                                
                                </div>
                                <div className="flex-row">
                                    <input type="email"  className="lf--input"
                                         name="email" placeholder="Correo electronico" onChange={handleChange}/>
                                
                                </div>
                                <div className="flex-row">
                                    <input type="password"  className="lf--input"
                                        name="password" pattern="[A-Za-z0-9_-]{1,15}" requiered
                                        placeholder="Contraseña" onChange={handleChange} />
                                    
                                </div>
                                <button className="lf--submit" type="submit">Crear Cuenta</button>
                            </form><br/>
                            <Link to="/" className="lf--forgot">Regresar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
     );
}
 
export default Register;
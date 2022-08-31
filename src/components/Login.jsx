import React, {useState, useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import AppContext from "../context/AppContext";
import '../Login.css';
import axios from 'axios';

//const dev = process.env.API_DEV;
const API_DEV = 'http://localhost:8000';

const Login = () => {
    const navigate = useNavigate();
    const {addToEq} = useContext(AppContext);
    const API = `${API_DEV}/api/login`;

    const [users, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...users,
            [e.target.name]: e.target.value
        });
    }
    const{email, password} = users;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API, {email,password}).then(res => {
            
            addToEq(res.data.accessToken);
            
            navigate('/principal');
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
                            <h2 className="lf--label">Inicio de Sesión</h2>
                            <br />
                            <form className="login-form  validate-form" onSubmit={handleSubmit}>
                                <div className="flex-row">
                                    <input type="email"  className="lf--input"
                                        name="email" placeholder="Correo Electronico" onChange={handleChange} />
                                    
                                </div>
                                <div className="flex-row">
                                    <input type="password"  className="lf--input"
                                        name="password" pattern="[A-Za-z0-9_-]{1,15}" requiered
                                        placeholder="Contraseña" onChange={handleChange}/>
                                    
                                </div>
                                <button className="lf--submit" type="submit">Login</button>
                            </form><br/>
                            <Link to="/register" className="lf--forgot">Registro</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
     );
}
 
export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="section footer bg-dark text-white">

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p className="text-white">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                            the more obscure Latin words, consectetur,
                
                        </p>

                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                       <div> <Link to="/">Contact</Link></div>
                        <div><Link to="/">Home</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1"> 17 Demonstration St</p></div>
                        <div><p className="text-white mb-1"> 123456 123</p></div>
                        <div><p className="text-white mb-1"> 123457 124</p></div>
                        <div><p className="text-white mb-1"> axtiveit@gmail.com </p></div>
                    </div>
                </div>

            </div>
        </section>

    );
    
}

export default Footer;
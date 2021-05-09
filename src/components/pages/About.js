import React from 'react';
import VMC from './inc/Vmc';

function Aboutus() {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About us</h4>
                        </div>
                            <div className="col-md-8 my-auto">
                                <h6 className="float-end">
                                    Home / About Us
                                </h6>
                            </div>
                    </div>
                </div>
            </section>

            <section className="section  border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                            the more obscure Latin words, consectetur,</p>
                </div>

            </section>

            {/* Our vision, mission and values*/}
			<VMC />
        </div>
    );
}


export default Aboutus;



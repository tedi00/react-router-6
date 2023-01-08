import React from "react";
import {NavLink as NavigationLink} from "react-router-dom";

export const Footer = ({textContent, ...props}) => {
    return (
        <div className='text-center text-lg-start text-light'>
            <section className='bg-dark bg-gradient'>
                <container className='text-center text-md-start mt-5'>
                    <div className='mt-3 row footer-border pt-sm-4'>
                        <div className='col-md-3 mx-auto mb-4 ml'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                Company
                            </h6>
                            <p>
                                Zhongshan Shengqiong Hardware Technology Co., Ltd. is located at No. 15-10, Shalan East Road, Sanjiao Town, Zhongshan City, Guangdong Province. The factory covers an area of about 8,000 square meters and has 120 employees.
                            </p>
                        </div>

                        <div className='col-md-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <NavigationLink className='text-reset' title={''} to={'/'}>High Extention Cabinets </NavigationLink>
                            </p>
                            <p>
                                <NavigationLink className='text-reset' title={''} to={'/'}> Mul Basket </NavigationLink>
                            </p>
                            <p>
                                <NavigationLink className='text-reset' title={''} to={'/'}> Swing Basket </NavigationLink>
                            </p>
                            <p>
                                <NavigationLink className='text-reset' title={''} to={'/'}> Three Sided Basket </NavigationLink>
                            </p>
                        </div>

                        <div className='col-md-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <NavigationLink className='text-reset' title={''} to={'/'}> Pricing </NavigationLink>
                            </p>
                            <p>
                                <NavigationLink className='text-reset' title={''} to={'/'}> Orders </NavigationLink>
                            </p>
                            <p>
                                <NavigationLink className='text-reset' title={''} to={'/'}> Help </NavigationLink>
                            </p>
                        </div>

                        <div className='col-md-4 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                No. 15-10, Shalan East Road, Sanjiao Town, Zhongshan City, Guangdong Province.
                            </p>
                            <p>
                                info@example.com
                            </p>

                        </div>
                        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                            © 2021 Copyright: &nbsp;

                            <NavigationLink className='text-reset fw-bold' title={''} to={'/'}> Test </NavigationLink>
                        </div>
                    </div>

                </container>

            </section>


        </div>
    );
}
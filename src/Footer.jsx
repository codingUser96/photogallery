import React from 'react'

const Footer = props => {
    return (
        <div className="footer page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h6 className="footer-copyright text-uppercase">Abarajithan</h6>
                        <h2 className="footer-copyright">Photography</h2>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-3 mb-md-0 mb-3">
                    </div>
                    <div className="col-md-2 mb-md-0 mb-3">
                        <h6 className="footer-copyright text-uppercase">Instagram</h6>
                        <ul className="list-unstyled">
                        <li>
                            <a href="https://www.instagram.com/abarajithanpm/?igshid=e193le1nhut8" className="footerLink fa fa-instagram">abarajithanpm</a>
                        </li>
                        </ul>
                        <h6 className="footer-copyright text-uppercase">Mail</h6>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="footerLink">abarajithanpm@gmail.com</a>
                            </li>
                        </ul>
                        <h6 className="footer-copyright text-uppercase">Contact</h6>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="footerLink">+91 74021 97433</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright: ABARAJITHAN
            </div>
        </div>
    )
}

export default React.memo(Footer);
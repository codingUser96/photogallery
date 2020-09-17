import React from 'react'

const Footer = props => {
    return (
        <div class="footer page-footer font-small blue pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h6 class="footer-copyright text-uppercase">Abarajithan</h6>
                        <h2 className="footer-copyright">Photography</h2>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"/>
                    <div class="col-md-3 mb-md-0 mb-3">
                        {/* <h5 class="footer-copyright text-uppercase">Mail</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">abarajithanpm@gmail.com</a>
                            </li>
                        </ul> */}
                    </div>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="footer-copyright text-uppercase">Instagram</h5>
                        <ul class="list-unstyled">
                        <li>
                            <a href="https://www.instagram.com/abarajithanpm/?igshid=e193le1nhut8" className="fa fa-instagram">abarajithanpm</a>
                        </li>
                        </ul>
                        <h5 class="footer-copyright text-uppercase">Mail</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">abarajithanpm@gmail.com</a>
                            </li>
                        </ul>
                        <h5 class="footer-copyright text-uppercase">Contact</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">+91 74021 97433</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">© 2020 Copyright: ABARAJITHAN
            </div>
        </div>
    )
}

export default Footer;
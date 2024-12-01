import React from 'react';

const contact = {
    name : 'Anurag Hiware',
    email: 'companymails567@gmail.com',
    phone: '+91 8956782952'
}

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="contact">
                Email: {contact.email} |
                Phone: {contact.phone}
            </div>
            <p>© 2024 [{contact.name}]. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

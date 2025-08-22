import Link from "next/link"

const ContactComp = () =>{
    return(
        <>
         <section className="contact-section" id="contact-section">
            <div className="container contact__container">
                <aside className="contact__aside">
                    <div className="aside__image">
                        <img src="/assets/images/icon/contact.svg" alt="" />
                    </div>
                    <h2>Contact Us</h2>
                    <p>Feel free to contact us. We are here to assist you with all your needs.</p>
                    <ul className="contact__details">
                        <li>
                            <i className="uil uil-phone-times"></i>
                            <Link href='https://wa.me/+6283870026877' target='_blank'>+6283870026877</Link>
                        </li>
                        <li>
                            <i className="uil uil-envelope"></i>
                            <Link href='mailto:iysa.olympiad@gmail.com' target='_blank'>iysa.olympiad@gmail.com</Link>
                        </li>
                        <li>
                            <i className="uil uil-location-point"></i>
                            <Link href='https://goo.gl/maps/9x18coXGCmSscKec6' target='_blank'>Jl. Kemang No. 63 RT 03 RW 06</Link>
                        </li>
                    </ul>
                    <div className="contact-social-icon">   
                    <span>Follow us</span>
                        <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                        <Link href="https://www.instagram.com/iye.olympiad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                        <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                        <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                        <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                    </div>
                </aside>

                <form action="https://formspree.io/f/xkndylek" method="POST" className="contact__form">
                    <input type="text" name="name" placeholder="Enter Your Name" required/>
                    <input type="email" name="email" placeholder="Enter Your Email" required/>
                    <textarea name="message" rows={4} placeholder="Enter Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
         </section>
        </>
    )
}

export default ContactComp
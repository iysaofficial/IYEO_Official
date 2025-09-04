"use client";
import React, { useEffect } from "react";
import Link from "next/link"

const ContactComp = () =>{
    useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

        const form = document.forms.namedItem("home-contact");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Message sent successfully!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Failed to send Message.");
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup listener
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
        }
    }, []);

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

                <form action="" method="POST" className="contact__form" name="home-contact">
                    <input type="hidden" name="Event" value="IYEO" readOnly />
                    <input type="text" name="Name" placeholder="Enter Your Name" required/>
                    <input type="email" name="Email" placeholder="Enter Your Email" required/>
                    <textarea name="Message" rows={4} placeholder="Enter Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
         </section>
        </>
    )
}

export default ContactComp
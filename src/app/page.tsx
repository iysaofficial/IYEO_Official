'use client';

import './globals.css';
import HeroComp from '@/components/home/HeroComp'
import LogoComp from '@/components/home/LogoComp'
import ContactComp from '@/components/home/ContactComp'
import AboutComp from '@/components/home/AboutComp'
import NewsletterComp from '@/components/home/NewsletterComp'
import CategoryComp from '@/components/home/CategoryComp'
import AfterEventComp from '@/components/home/AfterEventComp'
import NewsComp from '@/components/home/NewsComp'


export default function HomePage() {
    return(
        <>
        <HeroComp></HeroComp>
        <AboutComp></AboutComp>
        <CategoryComp></CategoryComp>
        <AfterEventComp></AfterEventComp>
        <ContactComp></ContactComp>
        <LogoComp></LogoComp>
        {/* <NewsComp></NewsComp> */}
        <NewsletterComp></NewsletterComp>
        </>
    )
}
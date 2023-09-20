import Head from 'next/head'
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Header/Navbar';
import Landing from '@/components/Landing Page'
import Test from '@/components/Test Page';
import FindTest from '@/components/FindTest';
import Schedule from '@/components/Schedule';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <div className='main'>
      <Navbar />
      <section>
      <Landing />
      </section>
      <section className='section-alternate'>
      <Test />
      </section>
      <section>
      <FindTest />
      </section>
      <section className='section-alternate'>
      <Schedule />
      </section>
      <section>
      <Reviews />
      </section>
    </div>
  )
}

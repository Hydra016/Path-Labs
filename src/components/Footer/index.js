import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-list">
          <span className="footer-link-heading">Company Info</span>
          <Link href="/" className="footer-text">
            About us
          </Link>
          <Link href="/" className="footer-text">
            Careers
          </Link>
          <Link href="/" className="footer-text">
            We are hiring
          </Link>
          <Link href="/" className="footer-text">
            Blog
          </Link>
        </div>
        <div className="footer-list">
          <span className="footer-link-heading">Features</span>
          <Link href="/" className="footer-text">
            Business Marketing
          </Link>
          <Link href="/" className="footer-text">
            User Analytics
          </Link>
          <Link href="/" className="footer-text">
            Live chat
          </Link>
          <Link href="/" className="footer-text">
            Unlimited Support
          </Link>
        </div>
        <div className="footer-list">
          <span className="footer-link-heading">Legal</span>
          <Link href="/" className="footer-text">
            Our Doctors
          </Link>
          <Link href="/" className="footer-text">
            Accredations
          </Link>
          <Link href="/" className="footer-text">
            Our Legal Staff
          </Link>
        </div>
        <div className="footer-list">
          <span className="footer-link-heading">Fee</span>
          <Link href="/" className="footer-text">
            Payment Plans
          </Link>
          <Link href="/" className="footer-text">
            Free Plan
          </Link>
          <Link href="/" className="footer-text">
            Pro Plan
          </Link>
          <Link href="/" className="footer-text">
            Regular Customer Fee
          </Link>
          <Link href="/" className="footer-text">
            Refunds
          </Link>
        </div>
        <div className="footer-list">
          <span className="footer-link-heading">Resources</span>
          <Link href="/" className="footer-text">
            IOS & Android
          </Link>
          <Link href="/" className="footer-text">
            Watch a demo
          </Link>
          <Link href="/" className="footer-text">
            Apple watch support
          </Link>
          <Link href="/" className="footer-text">
            API
          </Link>
        </div>
        <div className="footer-list">
          <span className="footer-link-heading">Get in Touch</span>
          <Link href="/" className="footer-text footer-text-link">
            <Image
              className="footer-text-link-img"
              src="/call.png"
              width={24}
              height={24}
            />
            <span className="footer-link-text">+37129330895</span>
          </Link>
          <Link href="/" className="footer-text footer-text-link">
            <Image
              className="footer-text-link-img"
              src="/location.png"
              width={24}
              height={30}
            />
            <span className="footer-link-text">
              Āzenes iela 8, Kurzemes rajons, Rīga, LV-1048
            </span>
          </Link>
          <Link href="/" className="footer-text footer-text-link">
            <Image
              className="footer-text-link-img"
              src="/email.png"
              width={26}
              height={20}
            />
            <span className="footer-link-text">haidermansoor24@gmail.com</span>
          </Link>
        </div>
      </div>
      <div className="seperator"></div>
      <div className="footer-info">
        <div className="footer-info-text footer-info-one">
          <span className="footer-link-heading">About Cpathlabs</span>
          <p className="footer-desc-txt">
            Find out what your body is trying to tell you. Book a blood test,
            expert health check-up package, and more online without the need to
            leave your home. With our competitive prices and top-notch customer
            service, you're sure to be happy with your experience at Cpathlabs.
          </p>
          <p className="footer-desc-txt">
            Know your health better with Cpathlabs - the one-stop destination
            for any diagnostic requirement. Choose from our wide range of
            services and book your package online now. Our experts will take
            care of everything else, so you can sit back, relax and know that
            you're in safe hands.
          </p>
          <p className="footer-desc-txt">
            Cpathlabs is committed to providing you with the best service in
            terms of quality, cost-effectiveness and convenience. You can choose
            from our wide range of services that includes blood tests and
            pathology test, CT scan and MRI scan, ECG and X-ray etc. The best
            part is that it can be done at home or in office through a simple
            process which takes less than 10 minutes
          </p>
        </div>
        <div className="footer-info-text footer-info-two">
          <span className="footer-link-heading">Test Lists</span>
          <p className="footer-desc-txt">
            Departments : Biochemistry | Hematology | Immunology | Microbiology
            | Molecular Biology | Serology
          </p>
          <p className="footer-desc-txt">
            Conditions : Heart | Infertility | Kidney | Liver | Lungs | Thyroid
          </p>
          <p className="footer-desc-txt">
            Test List : C-REACTIVE PROTEIN CRP (QUANTITATIVE) | LIVER FUNCTION
            TEST (LFT) | LIPID PROFILE | LDL CHOLESTEROL - SERUM (DIRECT LDL) |
            TRIGLYCERIDES - SERUM | CHOLESTEROL - SERUM | LIPOPROTEIN A (LP-A) |
            C-REACTIVE PROTEIN CRP (QUANTITATIVE) | HOMOCYSTEINE - SERUM /
            PLASMA | GAMMA GLUTAMYL TRANFERASE (GGT) | PROLACTIN | CREATININE,
            SERUM | CYTOMEGALOVIRUS (CMV) AVIDITY, IGG | CK CREATINE KINASE -
            SERUM (CPK) | AMINO ACID QUALITATIVE URINE GCMS
          </p>
        </div>
      </div>
      <div className="seperator"></div>
      <div className="footer-end">
        <div className="footer-end-one">
          <span className="footer-end-text">Made With Love By Haider Mansoor All Right Reserved </span>
        </div>
        <div className="footer-end-two">
          <Link href="https://www.facebook.com/haider.mansoor.750/">
            <Image
              className="footer-end-link"
              src="/facebook.png"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://www.instagram.com/fifaholic247/">
            <Image
              className="footer-end-link"
              src="/instagram.png"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://github.com/Hydra016">
            <Image
              className="footer-end-link"
              src="/github.png"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

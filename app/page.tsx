import Image from "next/image";
import React from "react";
import {
  FaCog,
  FaFacebookF,
  FaHandshake,
  FaLinkedinIn,
  FaRegClock,
  FaWallet,
  FaWhatsapp,
} from "react-icons/fa";
import aboutImage from "../public/assets/about.jpg";
import profileImage from "../public/assets/profile.jpg";
import assuranceIcon from "../public/assets/quality-assurance.png";
import accountingIcon from "../public/assets/budget.png";
import consultationIcon from "../public/assets/consultation.png";
import taxIcon from "../public/assets/tax.png";
import AppStore from "../public/assets/app-store.png";
import Link from "next/link";
import SectionTitle from "./components/SectionTitle";

const Home = () => {
  return (
    <>
      <section className="why_section new_section_m">
        <div className="container mx-auto px-5 lg:px-0">
          <SectionTitle title="Why Choose Us?" />
          <div className="content mt-7 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-primary-text">
            <article className="card p-5 border-4 border-[#6b6b6b57] flex flex-col items-center text-center min-h-[350] group transition-colors duration-200 cursor-pointer">
              <div className="mb-2 text-3xl leading-normal">
                <FaCog />
              </div>
              <h3 className="mb-4 text-2xl group-hover:text-gold-color">
                Reliable
              </h3>
              <p>
                Our cross industry experienced experts ensure we are always
                delivering to client satisfaction
              </p>
            </article>
            <article className="card p-5 border-4 border-[#6b6b6b57] flex flex-col items-center text-center min-h-[350] group transition-colors duration-200 cursor-pointer">
              <div className="mb-2 text-3xl leading-normal">
                <FaHandshake />
              </div>
              <h3 className="mb-4 text-2xl group-hover:text-gold-color">
                Committed
              </h3>
              <p>
                Every team member is dedicated to doing what is always in your
                best interest. In fact, it is our commitment creed.
              </p>
            </article>
            <article className="card p-5 border-4 border-[#6b6b6b57] flex flex-col items-center text-center min-h-[350] group transition-colors duration-200 cursor-pointer">
              <div className="mb-2 text-3xl leading-normal">
                <FaRegClock />
              </div>
              <h3 className="mb-4 text-2xl group-hover:text-gold-color">
                Accessible
              </h3>
              <p>
                We ensure responsive and timely service from a friendly
                approachable team. We also ensure resources are available
                quickly as per client’s need.
              </p>
            </article>
            <article className="card p-5 border-4 border-[#6b6b6b57] flex flex-col items-center text-center min-h-[350] group transition-colors duration-200 cursor-pointer">
              <div className="mb-2 text-3xl leading-normal">
                <FaWallet />
              </div>
              <h3 className="mb-4 text-2xl group-hover:text-gold-color">
                Affordable
              </h3>
              <p>
                We ensure that our valued clients are charged fairly while
                ensuring quality service and value addition to business.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about_section new_section_m">
        <div className="container mx-auto px-5 lg:px-0">
          <div className="row grid grid-cols-1 lg:grid-cols-2">
            <div className="box h-[700px] bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url('/assets/heroAlt.jpg')] relative hidden lg:flex">
              <div className="inner_img_box bg-white p-10 w-[500px] overflow-hidden h-[500px] absolute top-2/4 -right-20 -translate-y-2/4">
                <Image
                  src={aboutImage}
                  alt="About image"
                  className="max-w-full max-h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 order-2 md:order-1 max-h-[500px] rounded-2xl overflow-hidden object-cover lg:hidden">
              <Image
                src={aboutImage}
                alt="About Image"
                className="w-full h-auto"
              />
            </div>
            <div className="content flex-1 order-1 md:order-2 self-center lg:ml-20 lg:max-w-xl  mt-4 lg:mt-0">
              <h2 className="title text-2xl mb-6  text-primary-text p-4 border-l-4 border-b-4 border-[#9b9b9b5e] inline-block uppercase font-light">
                Who <strong className="font-semibold">We are</strong>
              </h2>
              <div className="flex flex-col gap-2 text-primary-text">
                <p className="text-lg leading-normal ">
                  Khawaja Tanveer & Co. is Chartered Accountant firm established
                  with a single aim of delivering best audit, taxation and
                  advisory services to valued clients.{" "}
                </p>
                <p className="text-lg leading-normal ">
                  We have employed our multi-disciplinary skills to add value to
                  our client’s decision-making process. We are carrying
                  knowledge and expertise various industries including from big4
                  to deliver best to our clients. We are firm with right talent
                  pool, understanding of business workings, and customer driven
                  approach which enable us to provide customized services across
                  different disciplines.
                </p>
                <p className="text-lg leading-normal ">
                  With deep knowledge , we have expertise required to help
                  businesses to expand to frontiers and sustain in competitive
                  market
                </p>
              </div>
              <button className="py-2 px-4 text-md border-2 border-gold-color mt-4 text-primary-text hover:bg-gold-color hover:text-white transition-all duration-300">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="services_section new_section_m">
        <div className="container mx-auto px-5 lg:px-0 text-primary-text ">
          <SectionTitle title="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-7 lg:mt-14">
            <article className="card flex flex-col justify-center items-center p-8 shadow-sm rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
              <div className="icon_box">
                <Image
                  src={assuranceIcon}
                  alt="Quality Assurance"
                  className=""
                />
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-center">
                Assurance
              </h3>
            </article>
            <article className="card flex flex-col justify-center items-center p-8 shadow-sm rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
              <div className="icon_box">
                <Image src={accountingIcon} alt="Accounting" />
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-center">
                Accounting
              </h3>
            </article>
            <article className="card flex flex-col justify-center items-center p-8 shadow-sm rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
              <div className="icon_box">
                <Image src={taxIcon} alt="Taxation" />
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-center">
                Taxation
              </h3>
            </article>
            <article className="card flex flex-col justify-center items-center p-8 shadow-sm rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
              <div className="icon_box">
                <Image src={consultationIcon} alt="Consultation Icon" />
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-center">
                Consultation
              </h3>
            </article>
          </div>
        </div>
      </section>

      {/* Team Section */}

      <section className="new_section_p team_section bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/assets/textures/texture_white.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-5 lg:px-0">
          <SectionTitle title="Meet Our Team" />
          <div className="mt-7 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="bg-white text-primary-text rounded-xl shadow-sm flex flex-col items-center overflow-hidden group hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out">
              <div className="img_box overflow-hidden object-cover h-80 relative">
                <div className="shimmer h-[20%] w-[200%] absolute -top-[50%] -left-[160%] bg-[rgba(255,255,255,0.5)] -rotate-45 group-hover:left-[130%] group-hover:top-[90%] transition-all duration-1000 ease-in-out disabled:opacity-0"></div>
                <Image src={profileImage} alt="John Doe" />
              </div>
              <div className="body p-4 ">
                <h3 className="text-semibold text-2xl group-hover:text-gold-color transition-color duration-200 ease-in-out">
                  John Doe
                </h3>
                <div className="social flex items-center justify-center gap-4 mt-4">
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaFacebookF />
                  </Link>
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaWhatsapp />
                  </Link>
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white text-primary-text rounded-xl shadow-sm flex flex-col items-center overflow-hidden group hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out">
              <div className="img_box overflow-hidden object-cover h-80 relative">
                <div className="shimmer h-[20%] w-[200%] absolute -top-[50%] -left-[160%] bg-[rgba(255,255,255,0.5)] -rotate-45 group-hover:left-[130%] group-hover:top-[90%] transition-all duration-1000 ease-in-out disabled:opacity-0"></div>
                <Image src={profileImage} alt="John Doe" />
              </div>
              <div className="body p-4 ">
                <h3 className="text-semibold text-2xl group-hover:text-gold-color transition-color duration-200 ease-in-out">
                  John Doe
                </h3>
                <div className="social flex items-center justify-center gap-4 mt-4">
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaFacebookF />
                  </Link>
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaWhatsapp />
                  </Link>
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white text-primary-text rounded-xl shadow-sm flex flex-col items-center overflow-hidden group hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out">
              <div className="img_box overflow-hidden object-cover h-80 relative">
                <div className="shimmer h-[20%] w-[200%] absolute -top-[50%] -left-[160%] bg-[rgba(255,255,255,0.5)] -rotate-45 group-hover:left-[130%] group-hover:top-[90%] transition-all duration-1000 ease-in-out disabled:opacity-0"></div>
                <Image src={profileImage} alt="John Doe" />
              </div>
              <div className="body p-4 ">
                <h3 className="text-semibold text-2xl group-hover:text-gold-color transition-color duration-200 ease-in-out">
                  John Doe
                </h3>
                <div className="social flex items-center justify-center gap-4 mt-4">
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaFacebookF />
                  </Link>
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaWhatsapp />
                  </Link>
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white text-primary-text rounded-xl shadow-sm flex flex-col items-center overflow-hidden group hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out">
              <div className="img_box overflow-hidden object-cover h-80 relative">
                <div className="shimmer h-[20%] w-[200%] absolute -top-[50%] -left-[160%] bg-[rgba(255,255,255,0.5)] -rotate-45 group-hover:left-[130%] group-hover:top-[90%] transition-all duration-1000 ease-in-out disabled:opacity-0"></div>
                <Image src={profileImage} alt="John Doe" />
              </div>
              <div className="body p-4 ">
                <h3 className="text-semibold text-2xl group-hover:text-gold-color transition-color duration-200 linear">
                  John Doe
                </h3>
                <div className="social flex items-center justify-center gap-4 mt-4">
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaFacebookF />
                  </Link>
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaWhatsapp />
                  </Link>
                  <Link href="/" className="hover:text-gold-color text-xl  ">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="new_section_m client_section">
        <div className="container mx-auto px-5 lg-px-0">
          <SectionTitle title="Our Clients" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  mt-7 lg:mt-14">
            <div className="box bg-white  border flex justify-center items-center p-8 group transition-all duration-200 ease-linear">
              <Image
                src={AppStore}
                alt="Apple Store"
                className="grayscale group-hover:grayscale-0 transition-all duration-200 ease-linear"
              />
            </div>
            <div className="box bg-white  border flex justify-center items-center p-8 group transition-all duration-200 ease-linear">
              <Image
                src={AppStore}
                alt="Apple Store"
                className="grayscale group-hover:grayscale-0 transition-all duration-200 ease-linear"
              />
            </div>
            <div className="box bg-white  border flex justify-center items-center p-8 group transition-all duration-200 ease-linear">
              <Image
                src={AppStore}
                alt="Apple Store"
                className="grayscale group-hover:grayscale-0 transition-all duration-200 ease-linear"
              />
            </div>
            <div className="box bg-white  border flex justify-center items-center p-8 group transition-all duration-200 ease-linear">
              <Image
                src={AppStore}
                alt="Apple Store"
                className="grayscale group-hover:grayscale-0 transition-all duration-200 ease-linear"
              />
            </div>
            <div className="box bg-white  border flex justify-center items-center p-8 group transition-all duration-200 ease-linear">
              <Image
                src={AppStore}
                alt="Apple Store"
                className="grayscale group-hover:grayscale-0 transition-all duration-200 ease-linear"
              />
            </div>
            <div className="box bg-white  border flex justify-center items-center p-8 group transition-all duration-200 ease-linear">
              <Image
                src={AppStore}
                alt="Apple Store"
                className="grayscale group-hover:grayscale-0 transition-all duration-200 ease-linear"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

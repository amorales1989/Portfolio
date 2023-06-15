import React from "react";
import Navbar from "./navbar";
import ProfileCard from "./perfil";
import Card from "./card";
import Footer from "./footer";
import "../App.css";

function Home() {
  return (
    <div className="home-container background-image">
      <div className="background-image"></div>
      <Navbar />
      <div className="container">
        <div className="profile-section">
          <ProfileCard />
        </div>
        <div className="card-section">
          <div className="row">
            <div className="col-md-12">
              <Card
                title="Henry-Market"
                description="Descripción del proyecto 2"
                image="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f2ba8678-eb26-4440-b2b2-ae43fb26cfaf.gif?ClientID=vimeo-core-prod&Date=1686329465&Signature=87301d72994ba1da38fc673e34b43a90ba6491d4"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              />
            </div>
            <div className="col-md-12">
              <Card
                title="Proyecto 2"
                description="Descripción del proyecto 2"
                image="ruta-de-la-imagen-3"
              />
            </div>
            <div className="col-md-12">
              <Card
                title="Proyecto 3"
                description="Descripción del proyecto 3"
                image="ruta-de-la-imagen-3"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

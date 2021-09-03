import React from "react";
import FeatureCard from "../components/featureCard";
import Companies from "../components/companyLogos";
import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";
import ProjectBlog from "../components/projectBlog";
import Teams from "../components/teams";
import PurchaseNow from "../components/purchaseNow";

export default function LandingPage() {
  return (
    <div className="container">
      <div>
        <Header />
        <div class="d-flex flex-column align-items-center">
          <PurchaseNow />
          <Companies />
          <Content />
          <FeatureCard />
          <Teams />
          <ProjectBlog />
        </div>
        <Footer />
      </div>
    </div>
  );
}

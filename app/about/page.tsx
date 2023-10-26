import Page from "@/components/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RSF - About",
  description: "Created by Edward",
};

const About = () => {
  return (
    <Page>
      <h1>About page</h1>
    </Page>
  );
};

export default About;

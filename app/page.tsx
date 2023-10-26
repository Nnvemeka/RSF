import Page from "@/components/page";
import Image from "next/image";
import { satisfy } from "./font";

export default function Home() {
  return (
    <Page>
      <div className="home">
        <div className="home__wrapper">
          <figure className="home__image__media">
            <Image
              src={"/images/women-in-shades.webp"}
              alt={"Women in shades"}
              width={150}
              height={280}
              className="home__image"
            />
          </figure>
          <figure className="home__image__media--2">
            <Image
              src={"/images/asian-girl.webp"}
              alt={"Asian girl"}
              width={150}
              height={250}
              className="home__image"
            />
          </figure>
          <div className="home__intro">
            <span className="home__intro--1">Step into the past with</span>
            <br />
            <span className="home__intro--2">Retro Super Future</span>
            <br />
            <span className="home__intro--3">
              <span className={satisfy.className}>&</span> discover the allure
            </span>
            <br />
            <span className="home__intro--4">of timeless retro</span>
            <br />
            <span className="home__intro--5">fashion.</span>
          </div>
        </div>

        <div className="home__content">
          <p className="home__content__text">
            [ At Retro Super Future, we celebrate the spirit of nostalgia,
            offering a handpicked selection of retro wears that pay homage to
            the iconic fashion trends of the past.
            <br /> From the bold patterns of the '60s to the disco fever of the
            '70s and the grunge vibes of the '90s, our pieces capture the
            essence of these iconic decades. ]
          </p>
          <br />

          <p className="home__content_text"></p>
        </div>
      </div>
    </Page>
  );
}

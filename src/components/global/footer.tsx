import Container from "./container"
import Logo from "./logo"
import { SiLinkedin, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si"

const SOCIAL_MEDIAS = [
  {
    id: 1,
    link: "https://www.instagram.com/bee_executive_/",
    icon: <SiInstagram />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/company/3199264/admin/",
    icon: <SiLinkedin />,
  },
  {
    id: 3,
    link: "https://www.facebook.com/executiveangola",
    icon: <SiFacebook />,
  },
  {
    id: 4,
    link: "https://www.youtube.com/channel/UCTupZGM2ZG1NNHjfL3Ck5tg",
    icon: <SiYoutube />,
  },
]

const Footer = () => {
  const todayYear = new Date().getFullYear()
  return (
    <footer className="w-full flex flex-col mt-[80px]">
      <div className="border-t border-t-beeBorder py-14">
        <Container className="flex lg:flex-row flex-col items-center justify-between w-full">
          <div className="w-full flex flex-col text-skin-text text-center lg:text-left gap-6 lg:gap-2 text-lg">
            <p>Tel: + 244 925 117 847</p>
            <p>geral@executive-angola.com</p>
            <p className="text-skin-text text-base lg:hidden block">
              Belas Business Park Edifício Kwanza sul, 4º andar 402 Talatona
              -Luanda
            </p>

            <div className="flex items-center justify-center lg:justify-start w-full gap-4 lg:w-fit">
              {SOCIAL_MEDIAS.map((media) => (
                <a
                  key={media.id}
                  target="_blank"
                  href={media.link}
                  className="text-3xl text-skin-text lg:text-3xl"
                >
                  {media.icon}
                </a>
              ))}
            </div>
          </div>
          <Logo className="w-80 h-14 block mt-12 lg:mt-0" />
        </Container>
      </div>

      <div className="border-t border-t-beeBorder py-14">
        <Container className="w-full flex lg:flex-row flex-col items-center justify-between">
          <p className="text-skin-text text-base hidden lg:block w-[30vw]">
            Belas Business Park Edifício Kwanza sul, 4º andar 402 Talatona
            -Luanda
          </p>
          <p className="text-skin-text text-sm lg:text-base">
            &copy; {todayYear} Bee Executive. All rights reserved
          </p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer

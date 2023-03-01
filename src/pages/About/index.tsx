import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import * as Component from '../../types/AboutStyledComponents/MainBody'
import Grid from '../../types/DataGrid'

export const About = () => {
  return (
    <>
      <Grid columns={1} gap="0" style={{ height: "100vh", display: "grid", gridTemplateRows: "1fr 6fr 1fr" }}>
        <Header />
        <Grid columns={0} gap="0">
          <Component.Container>

            <Component.Content style={{ width: "70%", display: "flex", alignItems: "center" }}>
              <Component.ImgPrincipal style={
                {
                  borderRadius: "5%", width: "30%", height: "65%", marginBottom: "85px"
                }
                } src="https://raw.githubusercontent.com/NathanCavalcanteFerreira/PortifolioFaculdade/master/src/assets/foto.jpg" />
              <Component.LowContainer style={{ marginBottom: "80px"}}>
                <Component.HighTypography style={{ fontSize: "42px", marginLeft: "70px", }}>Desenvolvedor Fullstack Nathan</Component.HighTypography>
                <Component.LowTypography style={{ fontSize: "22px",  marginLeft: "70px", }}>
                  Olá, meu nome é Nathan, moro na região metropolitana de São Paulo
                  atualmente atuo com stack de ReactJs,<br /> atuando em uma aplicação estruturada na arquitetura de micro-frontend,
                  meu objetivo é me tornar um arquiteto<br /> de sistemas no futuro, estruturando minha carreira com ReactJs  e Go.
                  Escrevo artigos no medium, pretendo<br /> criar meu próprio empreendimento social, ajudando jovens em vulnerabilidade social.
                </Component.LowTypography>

                <Component.LowTypography style={
                  {
                    fontSize: "22px",
                    marginLeft: "70px"
                  }
                }>
                  Comecei meus estudo pela ETEC Francisco Morato em 2019, meu primeiro Hello World foi com a linguagem C,<br /> de lá pra cá fiz algumas aplicações um pouco 
                  mais complexas que um Olá mundo, você pode conferir na página<br /> projetos... Hoje estudo com bolsa integral pelo Centro Universitário Senac,
                  e ao longo da minha carreira pretendo<br /> fazer outras especializações.

                </Component.LowTypography>
              </Component.LowContainer>
            </Component.Content>

          </Component.Container>


        </Grid>
        <Grid columns={0} gap="0">
          <Footer />
        </Grid>
      </Grid>
    </>

  )
}


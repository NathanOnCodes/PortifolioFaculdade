import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import * as Component from '../../types/AboutStyledComponents/MainBody'
import Grid from '../../types/DataGrid'

export const About = () => {
  return (
    <>
      <Grid columns={1} gap="0" style={{backgroundColor: "rgb(240, 239, 243)" , height: "100vh", display: "grid", gridTemplateRows: "1fr 6fr 1fr" }}>
        <Header />
        <Grid columns={0} gap="0">
          <Component.Container style={{display: "flex", flexDirection: "column" }}>

            <Component.Content style={{display: "flex", justifyContent: "center", }} >
            <Component.ImgPrincipal  alt="imagem vector de um jovem no computador" src={require("../../assets/SvgDeveloperAbout-removebg.png")} />
            </Component.Content>

            <Component.Content  style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }}>            
              
                <Component.HighTypography>Desenvolvedor Fullstack Nathan</Component.HighTypography>
                <Component.LowTypography>
                  Olá, meu nome é Nathan, moro na região metropolitana de São Paulo
                  atualmente atuo com stack de ReactJs,<br /> atuando em uma aplicação estruturada na arquitetura de micro-frontend,
                  meu objetivo é me tornar um arquiteto<br /> de sistemas no futuro, estruturando minha carreira com ReactJs  e Go.
                  Escrevo artigos no medium, pretendo<br /> criar meu próprio empreendimento social, ajudando jovens em vulnerabilidade social.
                </Component.LowTypography>

                <Component.LowTypography style={{marginBottom: "10em"}}>
                  Comecei meus estudo pela ETEC Francisco Morato em 2019, meu primeiro Hello World foi com a linguagem C,<br /> de lá pra cá fiz algumas aplicações um pouco 
                  mais complexas que um Olá mundo, você pode conferir na página<br /> projetos... Hoje estudo com bolsa integral pelo Centro Universitário Senac,
                  e ao longo da minha carreira pretendo<br /> fazer outras especializações.

                </Component.LowTypography>
              
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


import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Paginate } from "../../components/Paginate"
import Grid from "../../types/DataGrid"
import * as Component from "../../types/ProjectStyledComponents"
export const Projects: React.FC = () => {

  return (
    <>
      <Grid columns={1} gap="10px"  style={{ 
        backgroundColor: "rgb(240, 239, 243)" , height: "40vh", display: "grid", gridTemplateRows: "1fr 6fr 1fr" 
      }}>
        <Header />
         <Component.TypegraphHigh>Projetos: </Component.TypegraphHigh >
          
               <Paginate ItemsPerPage={5}  />  
        <Footer style={{position: "fixed", bottom: "0"}} />
      </Grid>
      
    </>
  )
}
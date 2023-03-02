import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Paginate } from "../../components/Paginate"
import Grid from "../../types/DataGrid"

export const Projects: React.FC = () => {

  return (
    <>
      <Grid columns={1} gap="10px"  style={{ 
        backgroundColor: "rgb(240, 239, 243)" , height: "40vh", display: "grid", gridTemplateRows: "1fr 6fr 1fr" 
      }}>
        <Header />
          <h1 style={{fontSize: "52px", marginLeft: "2em"}}>Projetos: </h1>
          
               <Paginate ItemsPerPage={5}  />  
      </Grid>
      <Footer  />
    </>
  )
}
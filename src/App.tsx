import { RoutesNavigation } from "./Routes";
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from "./styles";

const queryClient = new QueryClient();

const App = () => {
  return(
    <QueryClientProvider client={queryClient}>
       <GlobalStyle/>
       <RoutesNavigation />
    </QueryClientProvider>
  )
}

export default App;

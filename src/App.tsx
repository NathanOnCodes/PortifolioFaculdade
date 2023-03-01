import { RoutesNavigation } from "./Routes";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

const App = () => {
  return(
    <QueryClientProvider client={queryClient}>

       <RoutesNavigation />
      
    </QueryClientProvider>
  )
}

export default App;

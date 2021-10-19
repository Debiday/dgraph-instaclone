import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from '../App'

const ApolloWrapper = () => {
    const client = new ApolloClient({
        uri: process.env.REACT_APP_BACKEND_ENDPOINT,
        cache: new InMemoryCache(),
    })
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}

export default ApolloWrapper
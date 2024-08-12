const fragmentProduct = gql`
    fragment Product on Product {
        city
        name
        type
        description
    }
`

export const getFlightsProducts = gql`
    query getFlightsProducts {
        flights {
            date
            ...Product
        }
    }
    ${fragmentProduct}
`

export const getHotelsProducts = gql`
    query getHotelsProducts {
        hotels {
            ...Product
        }
    }
    ${fragmentProduct}
`

export const getCarRentalsProducts = gql`
    query getCarRentalsProducts {
        car_rentals {
            ...Product
        }
    }
    ${fragmentProduct}
`

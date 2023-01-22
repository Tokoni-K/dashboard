import React from 'react'
import { useGetProductsQuery } from '../state/api'
import Header from '../component/Header'
import { useState } from 'react'
import { Card, CardActions, CardContent, Collapse, Button, Rating, useTheme, Typography } from '@mui/material'

const Product = ({ _id, name, description, price, rating, category, supply, stat }) => {

    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <Card
        sx={{
            backgroundImage: "none",
            backgroundColor: theme.palette.color.background2,
            borderRadius: "0.55rem"
        }}
        >
        <CardContent>
            <Typography
            sx={{ fontSize:"0.9rem" }}
            color={theme.palette.color.text2}
            gutterBottom
            >
            {category}
            </Typography>
            <Typography variant="h5" sx={{ fontSize:"1.3rem" }} component="div">
            {name}
            </Typography>
            <Typography sx={{ mb: "1.5rem" }} color={theme.palette.color.text2}>
            ${Number(price).toFixed(2)}
            </Typography>
            <Rating value={rating} readOnly />

            <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
            <Button
            variant="primary"
            sx={{ fontSize:"0.8rem" }}
            onClick={() => setIsExpanded(!isExpanded)}
            >
            See More
            </Button>
        </CardActions>
        <Collapse
            in={isExpanded}
            timeout="auto"
            unmountOnExit
            sx={{
            color: theme.palette.color.text2,
            }}
        >
            <CardContent>
            <Typography sx={{ fontSize:"0.9rem" }}>id: {_id}</Typography>
            <Typography sx={{ fontSize:"0.9rem" }}>Supply Left: {supply}</Typography>
            <Typography sx={{ fontSize:"0.9rem" }}>
                Yearly Sales This Year: {stat.yearlySalesTotal}
            </Typography>
            <Typography sx={{ fontSize:"0.9rem" }}>
                Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
    )
}

const Products = () => {
    const { data, isLoading } = useGetProductsQuery();

    return (
        <div className='my-4 mx-6 overflow-y-auto'>
            <Header title="PRODUCTS" subtitle="See your list of products"/>
            {data || !isLoading ? (
                <div className='mt-[20px] grid grid-cols-1 md:grid-cols-3 gap-3 overflow-y-auto'>
                    {data.map(({ _id, name, description, price, rating, category, supply, stat }) => (
                        <Product
                            key={_id}
                            _id={_id}
                            name={name}
                            description={description}
                            price={price}
                            rating={rating}
                            category={category}
                            supply={supply}
                            stat={stat}
                        />
                        )
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Products
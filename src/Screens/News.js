import { Container } from '@material-ui/core'
import Card from './Card'
import React from 'react'
import './news.css'

const News = ({news, totalNews}) => {
    return (
        <Container className="news-container" maxWidth="md">
            {news.map((newsItem) => {
                return (
                   <Card newsItem={newsItem} key={newsItem.title}/> 
                )
            })}
        </Container>
    )
}

export default News

import React, { } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'


const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
  },
  media: {
    height: 0, paddingTop: '30%'
  }
}))


export default function Project({ card }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        title={card.title}
        image={`/images/${card.id}.png`}
      />
      <CardActionArea>
        <CardHeader
          title={card.title}
          subheader={`${moment(card.starts).format("MMM, YYYY")} - ${moment(card.ends).format("MMM, YYYY")}`}
        />
        <CardContent>
          <Typography>
            {card.context}
          </Typography>
          {card.responsibility.map((job, i) => <Typography key={i}>{job}</Typography>)}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button variant="contained" size="small" target="__new" color="primary">项目网站</Button> */}
        <button className="button is-primary is-outlined">项目网站</button>
        {/* <Button variant="contained" size="small" href={card.url} target="__new" color="primary">源代码</Button> */}
        <button className="button is-primary is-outlined">源代码</button>
      </CardActions>
    </Card>
  )
}
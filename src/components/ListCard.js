import React from 'react'

// Material imports
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import CardActions from '@material-ui/core/CardActions';
// import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import PeopleCardFooter from '@mui-treasury/components/cardFooter/people';

//-----------------

// Styles
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 300,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

//---------------------------

const ListCard = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        M
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Update the Card component"
                    subheader="March 23, 2020"
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odit voluptatibus culpa possimus numquam voluptates error 
                    aspernatur temporibus alias doloremque mollitia, fuga iusto ducimus, 
                    id deleniti soluta ratione, molestiae eaque voluptatem?.
                    </Typography>
                </CardContent>
                
                <Box px={3} pb={3}>
                    <PeopleCardFooter
                        faces={[
                            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQADnRMUBXaLj08GPAiHUM95rFzYc4VB2K6gh_BhfsA_0kfB4K',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTERdglJrfGuLjaVSPqNLIrW7L0PYFkmNWOHss3MUK-WKZ0M-j',
                        ]}
                    />
                </Box>
                
                {/* <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions> */}

            </Card>
        </React.Fragment>
    )
}

export default ListCard;
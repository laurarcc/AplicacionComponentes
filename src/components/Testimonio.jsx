import {Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {useState} from "react";
function Testimonio({name, opinion, country, profession, description, imageUrl, imageSize}) {
    const [isFavorited, setIsFavorited] = useState(false);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <>
            <div>
                <Card style={{maxWidth:600, margin:"1em auto"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={description}
                            height={imageSize}
                            image={imageUrl}
                            >
                        </CardMedia>
                        <CardContent>
                            <Typography variant='h3'>{name} en {country}</Typography>
                            <Typography variant='h7'>{profession}</Typography>
                            <Typography variant='body2'>{opinion}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <IconButton >
                            <IconButton onClick={toggleFavorite}>
                                {isFavorited ? <FavoriteOutlinedIcon color={'error'} /> : <FavoriteBorderOutlinedIcon/>}
                            </IconButton>
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default Testimonio

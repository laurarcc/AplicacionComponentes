import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import {FavouriteCustom} from 'milibreria';
import {FavouriteBorderCustom} from 'milibreria';
import {LauraRc} from 'milibreria';
import {MyButton} from 'milibreria';
import React, {useState} from "react";

function Testimonio({name, opinion, country, profession, description, imageUrl, imageSize}) {
    const [isFavorited, setIsFavorited] = useState(false);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <>
            <div>
                <Card style={{maxWidth: 600, margin: "1em auto"}}>
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
                        <IconButton onClick={toggleFavorite} >
                            {isFavorited ? <FavouriteCustom favcolor={'warning'} /> : <FavouriteBorderCustom favcolor={'warning'} /> }

                        </IconButton>
                        {isFavorited ? <LauraRc color={"secondary"} disabled={false} defaultChecked={false}/> :
                            <LauraRc disabled={true} defaultChecked={false}/>}
                        <MyButton text={"Reportar usuario"} txtcolor={"black"} bgcolor={"pinl"}
                                  borderColor={"red"} hoverTxtColor={"white"} hoverColor={"red"}>
                        </MyButton>
                    </CardActions>
                </Card>

            </div>

        </>
    )
}

export default Testimonio

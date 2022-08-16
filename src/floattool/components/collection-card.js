import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Tooltip, tooltipClasses, Button } from "@mui/material";
import { styled } from '@mui/material/styles';

const colorCodes = {
    "Covert": "#eb4b4b",
    "Classified": "#d32ce6",
    "Restricted": "#8847ff",
    "Mil-Spec": "#4b69ff",
    "Industrial": "#5080b8"
}

function splitByRange(skins) {
    let ranges = {};
    for (const skin of skins) {
        const currentRange = `${skin.MinWear};${skin.MaxWear}`;
        if (!(currentRange in ranges)) {
            ranges[currentRange] = [];
        }
        ranges[currentRange].push(skin);
    }
    return ranges;
}

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

function getRarity(rarity, skins) {
    if (skins[rarity]) {
        let splitted = splitByRange(skins[rarity])
        let totalCount = skins[rarity].length;

        let splitsCount = Object.keys(splitted).length;
        let index = 0;

        return (
            <Typography variant="body2" color="text.secondary" component="p">
                {rarity}:
                <Grid container spacing={0.25} columns={100} paddingTop="1px" paddingBottom="2px">
                    {Object.entries(splitted).map(([range, value]) => {
                        let isFirst = index === 0;
                        let isLast = index === splitsCount - 1;
                        index++;
                        return (
                            <Grid item xs={value.length / totalCount * 100}>
                                <HtmlTooltip title={
                                    <React.Fragment>
                                        <Typography color="inherit" fontWeight="bold">{range.replace(";", " - ")}</Typography>
                                        {value.map((skin) => (
                                            <Typography color="inherit">{skin.Name}</Typography>
                                        ))}
                                    </React.Fragment>
                                }>
                                    <Typography variant="body2" color="text.secondary" component="p"
                                        style={{
                                            backgroundColor: colorCodes[rarity],
                                            textAlign: 'center',
                                            borderRadius: `${isFirst ? '5px' : '0px'} ${isLast ? '5px 5px' : '0px 0px'} ${isFirst ? '5px' : '0px'}`,
                                        }}>
                                        {Math.round(value.length / totalCount * 100)}%
                                    </Typography>
                                </HtmlTooltip>

                            </Grid>
                        )
                    })}
                </Grid>
            </Typography>
        );
    }
}

export default function CollectionCard(params) {
    const { collection } = params;

    let skinsByRarity = {};
    for (const skin of collection.Skins) {
        if (!(skin.Rarity in skinsByRarity)) {
            skinsByRarity[skin.Rarity] = [];
        }
        skinsByRarity[skin.Rarity].push(skin);
    }

    let imageLink = "https://raw.githubusercontent.com/Prevter/FloatTool/gh-pages/Cases/";
    imageLink += `${collection.Name.replaceAll(" ", "").replaceAll(":", "").replaceAll(".", "")}.webp`;

    return (
        <Card elevation={2}>
            <CardMedia>
                <img src={imageLink} alt={collection.Name} style={{
                    width: '100%',
                    padding: '0px 12px'
                }} />
            </CardMedia>
            <CardContent>
                <Typography variant="h5" component="h4" textAlign={'center'}>
                    {collection.Name}
                </Typography>
                <Typography variant="p" component="p" fontWeight={'regular'}>
                    {getRarity("Covert", skinsByRarity)}
                    {getRarity("Classified", skinsByRarity)}
                    {getRarity("Restricted", skinsByRarity)}
                    {getRarity("MilSpec", skinsByRarity)}
                    {getRarity("Industrial", skinsByRarity)}
                </Typography>

                <Typography variant="p" component="p" fontWeight={'regular'} textAlign={'center'}>
                    <Button
                        size="small"
                        variant="outlined" color="secondary"
                        style={{ textAlign: 'center', marginTop: '8px' }}
                        href={collection.Link}>
                        Details &raquo;
                    </Button>
                </Typography>

            </CardContent>
        </Card>
    );
}
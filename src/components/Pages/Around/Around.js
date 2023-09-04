
import {Stack, Tabs, Tab, useMediaQuery} from "@mui/material";
import Map from "../../Map/Map";
import {useState} from "react";
import {mapData} from "./mapData";

export default function Around() {
    const isDesktop = useMediaQuery('(min-width:800px)')
    const [value, setValue] = useState(0);
    const [map, setMap] = useState(mapData[0]);

    return (
        <Stack flexDirection={isDesktop ? 'row' : 'column'} my={'1em'} width={'100%'} sx={{maxWidth: '1024px'}}>
            <Tabs
                orientation={isDesktop ? 'vertical' : 'horizontal'}
                variant="scrollable"
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
                sx={{ borderRight: 1, borderColor: 'divider', width: isDesktop ? '300px' : '100%'}}
            >
                {mapData.map((item) =>
                    <Tab key={item.value} label={item.name} id={item.value} onClick={() => setMap(item)}/>
                )}
            </Tabs>
            <Stack width={'100%'} height={'500px'}>
                <Map data={map} />
            </Stack>
        </Stack>
    );
}
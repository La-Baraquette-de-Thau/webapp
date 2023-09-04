
import {Stack, Tabs, Tab, useMediaQuery, MenuItem, FormControl, InputLabel, Select} from "@mui/material";
import Map from "../../Map/Map";
import {useState} from "react";
import {mapData} from "./mapData";

export default function Around() {
    const isDesktop = useMediaQuery('(min-width:800px)')
    const [value, setValue] = useState(0);
    const [map, setMap] = useState(mapData[0]);

    return (
        <Stack flexDirection={isDesktop ? 'row' : 'column'} alignItems={'center'} my={'1em'} width={'100%'} sx={{maxWidth: '1024px'}}>
            {isDesktop
                ?
                    <Tabs
                        orientation={'vertical'}
                        variant="scrollable"
                        value={value}
                        onChange={(_, newValue) => setValue(newValue)}
                        sx={{ borderRight: 1, borderColor: 'divider', width: isDesktop ? '300px' : '100%'}}
                    >
                        {mapData.map((item) =>
                            <Tab key={item.value} label={item.name} id={item.value} onClick={() => setMap(item)}/>
                        )}
                    </Tabs>
                :
                    <Select
                        value={map.value}
                        variant={'standard'}
                        onChange={(event) => setMap(mapData[event.target.value])}
                        sx={{width: '85%', mb: 2}}
                    >
                        {mapData.map((item) =>
                            <MenuItem key={item.value} value={item.value}>
                                {item.name}
                            </MenuItem>
                        )}
                    </Select>
            }
            <Stack width={'100%'} height={'500px'}>
                <Map data={map} />
            </Stack>
        </Stack>
    );
}
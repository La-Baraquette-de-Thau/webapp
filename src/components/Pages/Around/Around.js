
import {useEffect, useMemo, useState} from "react";
import {Stack, Tabs, Tab, useMediaQuery, MenuItem, Select, ToggleButtonGroup, ToggleButton} from "@mui/material";
import Map from "../../../features/Map/Map";
import {mapData} from "./mapData";

export default function Around() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('visit');
    const categoryMapData = useMemo(() =>
        mapData.filter((item) => item.type === category)
    ,[mapData, category]);
    const [selectedMap, setSelectedMap] = useState(categoryMapData[0]);

    useEffect(() => {
        setSelectedMap(categoryMapData[0]);
    }, [categoryMapData]);

    return (
        <Stack
            width={'100%'}
            height={`calc(100vh - ${isDesktop ? '60px' : '136px'})`}
            alignItems={'center'}
            gap={!isDesktop && 1}
            sx={{maxWidth: '1024px'}}
        >
            <ToggleButtonGroup
                value={category}
                onChange={(_, newValue) => setCategory(newValue)}
                exclusive
                color={'primary'}
                sx={{width: '100%', borderRadius: 0}}
            >
                <ToggleButton sx={{width: '100%', borderRadius: 0}} value={'visit'}>Visiter</ToggleButton>
                <ToggleButton sx={{width: '100%', borderRadius: 0}} value={'eat'}>Manger</ToggleButton>
                <ToggleButton sx={{width: '100%', borderRadius: 0}} value={'hobbies'}>Loisirs</ToggleButton>
            </ToggleButtonGroup>
            <Stack
                flexDirection={isDesktop ? 'row' : 'column'}
                alignItems={!isDesktop && 'center'}
                width={'100%'}
                height={'100%'}
            >
                {isDesktop
                    ?
                    <Tabs
                        orientation={'vertical'}
                        variant="scrollable"
                        value={value}
                        onChange={(_, newValue) => setValue(newValue)}
                        sx={{ borderRight: 1, borderColor: 'divider', width: isDesktop ? '300px' : '100%'}}
                    >
                        {categoryMapData.map((item) =>
                            <Tab key={item.value} label={item.name} id={item.value} onClick={() => setSelectedMap(item)}/>
                        )}
                    </Tabs>
                    :
                    <Select
                        value={selectedMap.value}
                        variant={'standard'}
                        onChange={(event) => setSelectedMap(categoryMapData[event.target.value])}
                        sx={{width: '85%', mb: 2}}
                    >
                        {categoryMapData.map((item) =>
                            <MenuItem key={item.value} value={item.value}>
                                {item.name}
                            </MenuItem>
                        )}
                    </Select>
                }
                <Stack width={'100%'} height={'100%'}>
                    <Map to={selectedMap} />
                </Stack>
            </Stack>
        </Stack>
    );
}
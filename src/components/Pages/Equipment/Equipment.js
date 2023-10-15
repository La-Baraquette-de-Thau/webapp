
import {Chip, Divider, List, ListItem, ListItemIcon, ListItemText, Stack} from "@mui/material";
import {equipmentData} from "./equipmentData";

export default function Equipment() {

    return (
        <Stack width={'100%'} alignItems={'center'} sx={{paddingY: '20px'}}>
            {equipmentData.map(category =>
                <>
                    <Divider flexItem variant={'middle'}><Chip label={category.name} /></Divider>
                    <List sx={{width: '90%'}}>
                        {category.list.map(equipment =>
                            <ListItem>
                                <ListItemIcon>{equipment.icon && equipment.icon}</ListItemIcon>
                                <ListItemText primary={equipment.name}/>
                            </ListItem>
                        )}
                    </List>
                </>
            )}
        </Stack>
    );
}
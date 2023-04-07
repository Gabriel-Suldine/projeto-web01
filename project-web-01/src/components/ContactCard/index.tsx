import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Contact } from '../../types'
type ContactCardProps = {
    contactData: Contact
}
export function ContactCard({ contactData }: ContactCardProps) {
    const { name, email, picture } = contactData
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={picture.medium} />
                </ListItemAvatar>
                <ListItemText primary={<Typography>{name.first}</Typography>} secondary={
                        <Typography>{email}</Typography> 
                }>
                </ListItemText>
            </ListItem>
            <Divider/>
        </>
    )
}
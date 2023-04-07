import { AppBar, Toolbar, Typography, Box } from '@mui/material'

type baseLayoutProps = {
    children: React.ReactNode
    appBarTitle: String
}


export function BaseLayout({ children, appBarTitle }: baseLayoutProps) {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h5' >
                        {appBarTitle}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                padding={2}
                mt={10}
                sx={{
                    bgcolor: "palette.background.default",
                    width: "100%",
                }}
                minHeight={100}
            >

                {children}
            </Box>
        </>


    )



}
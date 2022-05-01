import { Alert, AlertTitle, Container, Link, Typography } from "@mui/material"

const Homepage=()=>{
    
    return(
        <>
            <Container>
                <Typography variant='h3'>Whether the results are available or not?</Typography>
                <Typography variant='p'>If the dot is green,the results are available now.</Typography>
                <br/>
                <img alt='green' src='green.png'/>
                <br/>
                <Typography variant='p'>If the dot is red,the results are not available now.</Typography>
                <br/>
                <img alt='red' src='red.png'/>
                <Typography variant='h3'>To get results by your roll number</Typography>
                <Typography variant='p'>
                    Just click on the <Link to='/get_result_by_roll'>get your result now button</Link> from
                    the drawer,enter your BTEB roll number and submit,that's it.You will get your very recent exam-results. 
                </Typography>
                <img alt='byroll' src='byroll.png' style={{height:'50vh'}}/>
                <img alt='' src='respop.png' style={{height:'50vh'}}/>
                <Alert severity='info'>
                    <AlertTitle>All the results will be deleted automatically after 15 days of publication.</AlertTitle>
                </Alert>
                <Typography variant='h3'>
                    We don't <Typography variant='caption'>(but, we will do it on the next version of this app )</Typography>
                </Typography>
                <Alert severity='info'>
                    <AlertTitle>Show you the subjects you've failed.</AlertTitle>
                </Alert>
                <Alert severity='info'>
                    <AlertTitle>Show you the technology you read in.</AlertTitle>
                </Alert>
                <Typography variant='h3'>
                    Get results of all institutes
                </Typography>
                <Typography variant='p'>
                    Click <Link to='/institutionalResult'>institution-wise-results</Link> from the drawer,you will get 
                    the number of students failed,passed and the passing rates of the 
                    institutes seperately.
                </Typography>
                <img alt='all_res_photo' src='instires.png' style={{height:'50vh',width:'auto'}}/>
            </Container>
        </>
    )
}
export default Homepage;
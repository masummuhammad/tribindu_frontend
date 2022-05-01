import { Container, Typography } from "@mui/material";
const About=()=>{
    return(
        <div>
            <Container>
            <img alt='logo' src='bitmap.png' style={{width:'270px',height:'400px'}}/><img alt='tribindu' src='tribindu.png'/>
            <Typography variant='h3'>
                How this application works?
            </Typography>
            <Typography variant='p'>
                This application works without any kind of admin. It has a deployed python script that 
                does the scraping jobs from <a href='http://www.bteb.gov.bd'>Bangladesh Technical Education Board</a> website. After downloading 
                the pdfs of published results sends to the nodejs backend and then to database.
            </Typography>
            <img alt='' src='system_diagram.jpg'/>
        </Container>
        </div>
    )
}
export default About;
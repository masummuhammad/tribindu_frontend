import {gql,useApolloClient} from '@apollo/client';
import { Button, Input ,InputLabel,Dialog,DialogContent, Typography, Container, Alert} from '@mui/material';
import { useState } from 'react';
import { teal } from '@mui/material/colors';
import{loadCaptchaEnginge,validateCaptcha, LoadCanvasTemplateNoReload} from 'react-simple-captcha';
import { useEffect } from 'react';
const GET_RESULT_BY_ROLL=gql`
    query Result($roll:Int!){
        getResult(roll:$roll){
            eiin,
            institute,
            result,
            district,
            semester,
            regulation,
        }
    }
`;
const ResultByRoll=()=>{
    const [open,setOpen]=useState(false);
    const [result,setResult]=useState('');
    const [nf,setNF]=useState(false);
    const client=useApolloClient();
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    const formHandler=async(e)=>{
        e.preventDefault();
        let roll=parseInt(e.target.roll.value);
        e.target.roll.value=''
        let user_captcha_value=document.getElementById('user_captcha_code').value;
        document.getElementById('user_captcha_code').value=''
        if(validateCaptcha(user_captcha_value)===true){
        if(!isNaN(roll)){
            let res;
            try{
               res=await client.query({
                query:GET_RESULT_BY_ROLL,
                variables:{
                    roll
                   }
                 });
                setResult(res.data.getResult);
                setOpen(true)
        }catch(e){
                setResult('')
                setNF(true)
                
            }
            //alert(data.getResult.result)
            
            
           
            
        }
     }
     else{
         alert('captcha mismatched')
     }
        
        
    }

    
 
    const handleClose=()=>{
        setOpen(false);
    }
    const handleCloseNF=()=>{
        setNF(false);
    }
    return(
        <>
        <Container>
        <Typography variant='h3'>Get your results</Typography>
        <Alert severity='warning'>
            You must fill the captcha to get results.
        </Alert>
        <br/>
        <br/>
        <form onSubmit={formHandler}>
        <InputLabel variant='standard'>Enter your roll number:</InputLabel>
        <Input name='roll' type='number'/>
        <LoadCanvasTemplateNoReload/>
        <InputLabel>Enter the captcha code below:</InputLabel>
        <Input id='user_captcha_code'/>
        <br/><br/>
        <Button color='inherit' sx={{bgcolor:teal['A700']}} type='submit' size='small'>Get Your Result</Button>
        </form>
        <Dialog open={open} onClick={handleClose}>
            <DialogContent>
                <Typography variant='h6' noWrap component='div'>{result.eiin}</Typography>
                <Typography variant='h5' component='div'>{result.institute},</Typography>
                <Typography variant='h6'>{result.district}.</Typography>
                <Typography variant='h6'>Semester: {result.semester}</Typography>
                <Typography variant='h6'>Regulation: {result.regulation}</Typography>
                <Typography variant='h1' sx={{color:teal.A700}} component='div'>{result.result}</Typography>
            </DialogContent>
        </Dialog>
        <Dialog open={nf} onClick={handleCloseNF}>
            <DialogContent>
                <Typography variant='h1' sx={{color:teal.A700}}>Result Not Found!</Typography>
            </DialogContent>
        </Dialog>
        </Container>
        </>
    )
}
export default ResultByRoll;
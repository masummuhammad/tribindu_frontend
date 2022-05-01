import{TableContainer,Table,TableHead,TableBody,TableRow,TableCell, Paper} from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {gql,useQuery} from '@apollo/client';
const getAllInstitutionalResults=gql`
    query Results{
        getCurrentResultAll{
            eiin,
            institute,
            district,
            semester,
            regulation,
            pass,
            fail,
            passingRate
            
        }
    }
`;
const InstitutionalResult=()=>{
    let arr=[];
    for(let i=0;i<100;i++){
        arr.push(i);
    }
    const {loading,error,data}=useQuery(getAllInstitutionalResults);
    if(loading)return(
        <>
            <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>EIIN</TableCell>
                    <TableCell>Institute</TableCell>
                    <TableCell>Passed</TableCell>
                    <TableCell>Failed</TableCell>
                    <TableCell>Semester</TableCell>
                    <TableCell>District</TableCell>
                    <TableCell>Passing Rates</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {arr.map(e=>(
                <TableRow>
                
                <TableCell><Skeleton/></TableCell>
                <TableCell><Skeleton/></TableCell>
                <TableCell><Skeleton/></TableCell>
                <TableCell><Skeleton/></TableCell>
                <TableCell><Skeleton/></TableCell>
                <TableCell><Skeleton/></TableCell>
                <TableCell><Skeleton/></TableCell>
                <TableCell><Skeleton/></TableCell>
        
                </TableRow>
             ))}
            

            </TableBody>
            </Table>
        </TableContainer>
        </>

    )
    if(error)return <p>error:</p>
    
    return(
        <>
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>EIIN</TableCell>
                    <TableCell>Institute</TableCell>
                    <TableCell>Passed</TableCell>
                    <TableCell>Failed</TableCell>
                    <TableCell>Semester</TableCell>
                    <TableCell>District</TableCell>
                    <TableCell>Passing Rates</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {data.getCurrentResultAll.map(({eiin,institute,pass,fail,semester,district,passingRate},i)=>(
                <TableRow key={eiin}>
                    <TableCell>{i+1}</TableCell>
                    <TableCell>{eiin}</TableCell>
                    <TableCell>{institute}</TableCell>
                    <TableCell>{pass}</TableCell>
                    <TableCell>{fail}</TableCell>
                    <TableCell>{semester}</TableCell>
                    <TableCell>{district}</TableCell>
                    <TableCell>{passingRate}</TableCell>
                </TableRow>
            ))}

                </TableBody>
            </Table>
        </TableContainer>
        
        </>
    )
}
export default InstitutionalResult;
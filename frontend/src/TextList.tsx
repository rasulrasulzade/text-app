
import LoadingButton from "@mui/lab/LoadingButton";
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Skeleton from '@mui/material/Skeleton';
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Fragment, useState } from "react";

import { TextArray, TextListProps } from "./types";
import { deleteText } from "./actions"

const TextList: React.FC<TextListProps> = (props: { listIsLoading: boolean, fetchData: Function, data: TextArray }) => {

    const [textIsDeleting, setTextIsDeleting] = useState<Number | null>(null);

    const remove = async (id: number) => {
        setTextIsDeleting(id);
        try {
            await deleteText(id);
            props.fetchData()
        } catch (error) {
            console.error(error);
        } finally {
            setTextIsDeleting(null);
        }
    };

    return <Fragment>
        <Stack direction="row" spacing={4} sx={{ marginBottom: "20px", justifyContent: "space-between" }}>
            <Typography variant="h6" color="inherit" component="div">
                Text List
            </Typography>
            <LoadingButton
                loading={props.listIsLoading}
                loadingPosition="center"
                variant="contained"
                onClick={() => props.fetchData()}
            >
                Get texts
            </LoadingButton>
        </Stack>

        {props.listIsLoading ?
            <Box sx={{ width: "100%" }}>
                <Skeleton sx={{ height: 65 }} />
                <Skeleton sx={{ height: 65 }} />
                <Skeleton sx={{ height: 65 }} />
            </Box> :
            props.data?.length > 0 ?
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>N</TableCell>
                                <TableCell>Text</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data.map((item, index) => (
                                <TableRow
                                    key={item.text}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>{item.text}</TableCell>
                                    <TableCell align="right">
                                        <LoadingButton
                                            loading={textIsDeleting === item.id}
                                            loadingPosition="center"
                                            variant="contained"
                                            color="error"
                                            onClick={() => remove(item.id)}
                                        >
                                            Delete
                                        </LoadingButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : <Typography variant="h4"
                              color="inherit"
                              component="div"
                              sx={{ marginTop: "40px", textAlign: "center" }}>
                    NO CONTENT
                </Typography>
        }

    </Fragment>

}

export default TextList;